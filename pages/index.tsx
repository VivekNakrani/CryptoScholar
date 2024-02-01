import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
      <Flex h={"75vh"} px={20} borderRadius={20}>
        <Flex flexDirection={"row"} w={"100%"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Stack spacing={4}>
              <Heading fontSize={"5xl"}>
                Discover the world of crypto with our simple guides and hands-on practice.
              </Heading>
              <Text fontSize={"2xl"}>
                Simplify, learn, and navigate crypto with ease.
              </Text>
              <Link href={"/learn"}>
                <Button
                  w={"40%"}
                  style={{
                    background: "#FFA07A",
                    color: "#ffffff",
                    fontWeight: "bold",
                    border: "2px solid #ff9a8b",
                    borderRadius: "11px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  Start Learning
                </Button>
              </Link>
            </Stack>
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
        <Box p={[100,100]}>
          <MediaRenderer
            src={FEATURES_IMAGE_URL}
            height="100%"
            width="100%"
          />
        </Box>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} m={[7]}>
          <Text style={{
            fontWeight: "bold",
            fontSize: "35px"
          }}>Key Features:</Text>
          <Stack spacing={4}>
            <FeatureCard
              title={"Claim Tokens and NFTs Hassle-Free"}
              description={"Easily claim tokens and NFTs from the respective section, simplifying the testing of features."}
            />
            <FeatureCard
              title={"Simulated Token Transfers"}
              description={"Engage in practical learning by simulating token transfers, gaining confidence in navigating the cryptocurrency system."}
            />
            <FeatureCard
              title={"Educational Tutorials"}
              description={"Explore interactive tutorials covering crypto transactions, NFTs, and blockchain basics for comprehensive learning."}
            />
          </Stack>
        </Flex>
      </SimpleGrid>
      <Events />
      <Footer />
    </Container>
  );
};

export default Home;
