import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MediaRenderer } from "@thirdweb-dev/react";
import { LOGO_IMAGE_URL } from "../const/addresses";

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
                            marginBottom: "10px",
                        }}
                    >
                        <MediaRenderer
                            src={LOGO_IMAGE_URL}
                            height="70%"
                            width="70%"
                        />
                    </span>
                </Link>
                {address && (
                    <Flex flexDirection={{ base: "column", md: "row" }} mt={{ base: "10px", md: "0" }}>
                        <Link href={"/transfer"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">Transfer</Text>
                        </Link>
                        <Link href={"/claim"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">Tokens</Text>
                        </Link>
                        <Link href={"/nft"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">NFT</Text>
                        </Link>
                        <Link href={`/profile/${address}`}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">My Account</Text>
                        </Link>
                        <Link href={"/learn"}>
                            <Text mb={{ base: "10px", md: 0 }} mr={{ base: 0, md: 4 }} fontSize="xl" fontWeight="bold">Learn</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet />
            </Flex>
        </Container>
    );
}
