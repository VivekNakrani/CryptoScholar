import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { STK_CLAIM_TOKEN_CONTRACT_ADDRESS, HTK_CLAIM_TOKEN_CONTRACT_ADDRESS, CLAIM_TOKEN_IMAGE } from "../const/addresses";

export default function ClaimPage() {
    const { contract } = useContract(STK_CLAIM_TOKEN_CONTRACT_ADDRESS, HTK_CLAIM_TOKEN_CONTRACT_ADDRESS);

    const { data: contractMetadata } = useContractMetadata(contract);

    const claimAmount = 10;
    const toast = useToast();

    return (
        <Container maxW="1440px" h="80vh">
            <SimpleGrid columns={2} spacing={10} h="100%">
                <Flex m={[50, 50]}>
                    <MediaRenderer src={CLAIM_TOKEN_IMAGE} height="90%" width="100%" />
                </Flex>
                <Flex flexDirection="column" justifyContent="center">
                    <Stack spacing={4}>
                        <Heading fontSize="5xl">Claim Free Tokens</Heading>
                        <Text fontSize="xl">
                            Claim your FREE Tokens. You do not have to pay for gas to claim your Free Tokens. Use these token to test and try the transfer feature of this dApp.
                        </Text>
                        <Text fontWeight="bold">Select any listed Token to Claim {claimAmount} Tokens</Text>
                        <Box>
                            <Web3Button
                                contractAddress={STK_CLAIM_TOKEN_CONTRACT_ADDRESS}
                                action={(contract) => contract.erc20.claim(claimAmount)}
                                onSuccess={() =>
                                    toast({
                                        title: "Claim Successful",
                                        description: "You have successfully claimed STK tokens!",
                                        status: "success",
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                }
                            >
                                Claim STK Token
                            </Web3Button>
                            <Box mt={2}>
                                <Web3Button
                                    contractAddress={HTK_CLAIM_TOKEN_CONTRACT_ADDRESS}
                                    action={(contract) => contract.erc20.claim(claimAmount)}
                                    onSuccess={() =>
                                        toast({
                                            title: "Claim Successful",
                                            description: "You have successfully claimed HTK tokens!",
                                            status: "success",
                                            duration: 9000,
                                            isClosable: true,
                                        })
                                    }
                                >
                                    Claim HTK Token
                                </Web3Button>
                            </Box>
                        </Box>
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Container>
    );
}
