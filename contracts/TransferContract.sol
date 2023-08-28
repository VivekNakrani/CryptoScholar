// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// This interface defines the functions that an ERC20 token must implement.
interface IERC20Interface {
    // Transfers 'amount' of tokens from 'sender' to 'recipient'.
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    // Approves 'spender' to spend 'amount' of tokens on behalf of the owner.
    function approve(address spender, uint256 amount) external returns (bool);
    // Returns the balance of tokens owned by 'account'.
    function balanceOf(address account) external view returns (uint256);
}

// This contract allows transferring verified ERC20 tokens with additional info.
contract TransferContract {
    address public owner; // Address of the contract owner.
    mapping(address => bool) private verifiedTokens; // Tokens that are verified for transfer.
    address[] public verifiedTokenList; // List of verified tokens.

    // Structure to hold transaction details.
    struct Transaction {
        address sender; // Sender's address.
        address receiver; // Receiver's address.
        uint256 amount; // Amount of tokens being transferred.
        string message; // Additional message.
    }

    // Event emitted when a transaction is completed.
    event TransactionCompleted(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        string message
    );

    // Constructor to set the contract owner as the deployer.
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to only the contract owner.
    modifier onlyOwner {
        require(msg.sender == owner, "ERC20Transfer: caller is not the owner");
        _;
    }

    // Modifier to restrict access to only verified tokens.
    modifier onlyVerifiedToken(address _token) {
        require(verifiedTokens[_token] == true, "ERC20Transfer: token is not verified");
        _;
    }

    // Function to add a new token to the list of verified tokens.
    function addVerifiedToken(address _token) public onlyOwner {
        verifiedTokens[_token] = true;
        verifiedTokenList.push(_token);
    }

    // Function to remove a token from the list of verified tokens.
    function removeVerifiedToken(address _token) public onlyOwner {
        require(verifiedTokens[_token] == true, "ERC20Transfer: token is not in the list");
        verifiedTokens[_token] = false;

        // Removing the token from the verifiedTokenList
        for (uint256 i = 0; i < verifiedTokenList.length; i++) {
            if (verifiedTokenList[i] == _token) {
                verifiedTokenList[i] = verifiedTokenList[verifiedTokenList.length - 1];
                verifiedTokenList.pop();
                break;
            }
        }
    }

    // Function to get the list of verified tokens.
    function getVerifiedTokens() public view returns (address[] memory) {
        return verifiedTokenList;
    }

    // Function to transfer verified tokens with additional info.
    function transfer(IERC20Interface token, address to, uint256 amount, string memory message) public onlyVerifiedToken(address(token)) returns (bool) {
        uint256 senderBalance = token.balanceOf(msg.sender);
        require(senderBalance >= amount, "ERC20Transfer: insufficient balance");

        bool success = token.transferFrom(msg.sender, to, amount);
        require(success, "ERC20Transfer: transfer failed");

        // Emitting the TransactionCompleted event.
        Transaction memory transaction = Transaction({
            sender: msg.sender,
            receiver: to,
            amount: amount,
            message: message
        });

        emit TransactionCompleted(transaction.sender, transaction.receiver, transaction.amount, transaction.message);

        return true;
    }
}
