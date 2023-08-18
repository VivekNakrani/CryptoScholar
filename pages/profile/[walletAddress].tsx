import React from 'react';
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs, useContractRead } from '@thirdweb-dev/react';
import { Avatar, Container, Flex, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import styles from '../../styles/Home.module.css';
import { CONTRACT_ADDRESS, TRANSFER_CONTRACT_ADDRESS } from '../../const/addresses';
import BalanceCard from "../../components/BalanceCard";

export default function CombinedProfile() {
    // Profile Component
    const profileAddress = useAddress();
    const { contract } = useContract(CONTRACT_ADDRESS);
    const { data: ownedNFTs, isLoading: isOwnedNFTsLoading } = useOwnedNFTs(contract, profileAddress);

    // AccountPage Component
    const accountAddress = useAddress();
    const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS);
    const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } = useContractRead(transferContract, "getVerifiedTokens");

    const truncateAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div className={styles.container}>
            {profileAddress ? (
                <div>
                    <div>
                        <h1>Profile</h1>
                        <p>Address: {truncateAddress(profileAddress || "")}</p>
                    </div>
                    <hr />
                    <div>
                        <h3>My NFTs:</h3>
                        <div className={styles.grid}>
                        {!isOwnedNFTsLoading ? (
                            ownedNFTs?.length! > 0 ? (
                                ownedNFTs?.map((nft) => (
                                    <div key={nft.metadata.id} className={styles.NFTCard}>
                                        <ThirdwebNftMedia metadata={nft.metadata} />
                                        <h3>{nft.metadata.name}</h3>
                                    </div>
                                ))
                            ) : (
                                <p>No NFTs owned.</p>
                            )
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.main}>
                    <p>Connect your wallet to view your profile.</p>
                </div>
            )}
            
            <Container maxW={"1440px"} py={4}>
                {accountAddress ? (
                    <Flex>
                        <Flex flexDirection={"column"} mr={8} p={10}>
                            <Avatar size={"2xl"} mb={4}/>
                            <Text 
                                fontSize={"sm"} 
                                border={"1px solid black"} 
                                textAlign={"center"} 
                                borderRadius={4}
                            >{truncateAddress(accountAddress)}</Text>
                        </Flex>
                        <Flex flexDirection={"column"} w={"100%"}>
                            <Heading>Token Balances</Heading>
                            <SimpleGrid columns={3} spacing={4} mt={4}>
                            {!isVerifiedTokensLoading ? (
                                verifiedTokens.map((token: string) => (
                                    <BalanceCard key={token} tokenAddress={token} />
                                ))
                            ) : (
                                <Spinner />
                            )}
                            </SimpleGrid>
                        </Flex>
                    </Flex>
                ) : (
                    <Flex>
                        <Text>Connect Wallet</Text>
                    </Flex>
                )}
            </Container>
        </div>
    );
}
