import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, TRANSFER_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import TransferCard from "../components/TransferCard";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
    <Flex h={"75vh"} px={20} borderRadius={20}>
        <Flex flexDirection={"row"} w={"100%"}>
        <TransferCard/>
          <Box m={[0]}>
            <MediaRenderer
              src={TRANSFER_IMAGE_URL}
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
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} m={[8]}>
          <text style={{
            fontWeight: "bold",
            fontSize: "25px"
          }}>Steps to Transfer a Token:</text>
          <Stack spacing={4}>

            <FeatureCard
              title={"1. Claim Token"}
              description={"Claim tokens from the 'Tokens' section to test the transfer feature hassle-free. "}
            />
            <FeatureCard
              title={"2. Pick a Token"}
              description={"Choose a verified token from the list. This selection will be used to send to your loved ones."}
            />
            <FeatureCard
              title={"3. Select the Recipient"}
              description={"Input the wallet address of the intended recipient. Remember, this action is irreversible, so ensure the address is accurate."}
            />
            <FeatureCard
              title={"4. Add a Personal Note"}
              description={"Craft a message to accompany your token transfer. While optional, a heartfelt message to friends and family is always a thoughtful touch."}
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