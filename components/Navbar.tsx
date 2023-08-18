import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
    const address = useAddress();

    return (
        <Container maxW={"1440px"} py={4}>
            <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"} alignItems={{ base: "flex-start", md: "center" }}>
                <Link href={"/"} style={{ textDecoration: "none", color: "#333333", cursor: "pointer" }}>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontWeight: "bold",
                            fontSize: "24px",
                            letterSpacing: "-0.5px",
                            marginBottom: "10px", // Corrected here
                        }}
                    >
                        <span
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                background: "#ff9a8b",
                                marginRight: "10px",
                            }}
                        />
                        DigiWalletHub
                    </span>
                </Link>
                {address && (
                    <Flex flexDirection={{ base: "column", md: "row" }} mt={{ base: "10px", md: "0" }}>
                        <Link href={"/transfer"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">Transfer</Text>
                        </Link>
                        <Link href={"/claim"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">Claim Token</Text>
                        </Link>
                        <Link href={"/NFT"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">Claim NFT</Text>
                        </Link>
                        <Link href={`/profile/${address}`}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">My Account</Text>
                        </Link>
                        <Link href={'https://mumbaifaucet.com/'}>
                            <Text fontSize="xl" fontWeight="bold">Faucet Funds</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet />
            </Flex>
        </Container>
    );
}
