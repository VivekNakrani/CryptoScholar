import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Events from "../components/Events";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
      <Flex h={"75vh"} px={20} borderRadius={20} >
        <Flex flexDirection={"row"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Flex
              h={"70vh"}
              px={20}
              borderRadius={20}
              m={[50]}
              style={{
                backgroundImage: "linear-gradient(45deg, #ff9a8b, #ffd479, #91eae4)",
                backgroundSize: "200% 200%",
                animation: "gradientAnimation 10s infinite",
              }}
            >
              <Stack spacing={4}>
                <Heading fontSize={"5xl"} m={[5,5]}>
                  Effortlessly Share Tokens with Loved Ones
                </Heading>
                <Text fontSize={"xl"}>
                Explore a range of tokens available for seamless transfers to friends and family. Add a personal touch with a custom message. Begin right away by linking your wallet!
                </Text>
                <Link href={"/transfer"}>
                  <Button
                    w={"80%"}
                    style={{
                      background: "#FFA07A",
                      color: "#ffffff",
                      fontWeight: "bold",
                      border: "2px solid #ff9a8b",
                      borderRadius: "11px",
                      cursor: "pointer",
                      fontSize: "20px",
                      margin: "30px"

                    }}
                  >
                    Send Tokens
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Flex>
          <Box m={[0]}>
            <MediaRenderer
              src={HERO_IMAGE_URL}
              height="100%"
              width="100%"
            />
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Flex>
          <MediaRenderer
            src={FEATURES_IMAGE_URL}
            height="100%"
            width="80%"
          />
        </Flex>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <text style={{
            fontWeight: "bold",
            fontSize: "25px"
          }}>Steps to Transfer a Token:</text>
          <Stack spacing={4}>

            <FeatureCard
              step={"1"}
              title={"Claim Token"}
              description={"Claim tokens from the 'Claim Token' section to test the transfer feature hassle-free. "}
            />
            <FeatureCard
              step={"2"}
              title={"Pick a Token"}
              description={"Choose a verified token from the list. This selection will be used to send to your loved ones."}
            />
            <FeatureCard
              step={"3"}
              title={"Select the Recipient"}
              description={"Input the wallet address of the intended recipient. Remember, this action is irreversible, so ensure the address is accurate."}
            />
            <FeatureCard
              step={"4"}
              title={"Add a Personal Note"}
              description={"Craft a message to accompany your token transfer. While optional, a heartfelt message to friends and family is always a thoughtful touch."}
            />
          </Stack>
        </Flex>
      </SimpleGrid>
      <Events />
    </Container>
  );
};

export default Home;