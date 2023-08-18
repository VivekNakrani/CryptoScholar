import { Box, Card, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import TokenSelection from "./TokenSelection";
import { useState } from "react";
import TokenBalance from "./TokenBalance";
import TransferButton from "./TransferButton";
import styles from "../styles/Home.module.css";

export default function TransferCard() {
  const address = useAddress();

  const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } =
    useContractRead(contract, "getVerifiedTokens");

  const [formData, setFormData] = useState({
    receiver: "",
    amount: "",
    message: "",
  });

  const [selectedToken, setSelectedToken] = useState("");

  const handleChange = (event: any, name: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const handleTokenSelection = (tokenAddress: string) => {
    setSelectedToken(tokenAddress);
  };

  return (
    <Card w="50%" p={8} boxShadow="md" borderRadius="md" backgroundColor="gray.50">
      <Heading size="lg" mb={4}>
        Transfer Token:
      </Heading>

      <Text fontWeight="semibold" mb={2}>
        Select Token:
      </Text>
      <Flex flexDirection="row" mb={4}>
        {!isVerifiedTokensLoading &&
          verifiedTokens.map((token: string) => (
            <Box
              key={token}
              onClick={() => handleTokenSelection(token)}
              className={styles.tokenButton}
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            >
              <TokenSelection
                tokenAddress={token}
                isSelected={selectedToken === token}
              />
            </Box>
          ))}
      </Flex>

      <TokenBalance tokenAddress={selectedToken} />

      <Text fontWeight="semibold" mt={4}>
        Send To:
      </Text>
      <Input
        placeholder="0x0000000"
        value={formData.receiver}
        onChange={(event) => handleChange(event, "receiver")}
        mb={2}
      />
      <Text fontWeight="semibold" mt={4}>
        Amount:
      </Text>
      <Input
        placeholder="0.0"
        type="number"
        value={formData.amount}
        onChange={(event) => handleChange(event, "amount")}
        mb={2}
      />
      <Text fontWeight="semibold" mt={4}>
        Message:
      </Text>
      <Input
        placeholder="Add a short message here."
        value={formData.message}
        onChange={(event) => handleChange(event, "message")}
        mb={4}
      />
      <Box mt={6}>
        {address ? (
          <TransferButton
            tokenAddress={selectedToken}
            receiver={formData.receiver}
            amount={formData.amount.toString()}
            message={formData.message}
          />
        ) : (
          <Text>Please connect your wallet to make a transfer.</Text>
        )}
      </Box>
    </Card>
  );
}
