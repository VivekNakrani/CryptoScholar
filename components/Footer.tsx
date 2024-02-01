import React from "react";
import { Container, Divider, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Container maxW={"100%"} mt={20} py={8} backgroundColor="gray.100">
      <Divider />
      <Container maxW={"1440px"} textAlign="center">
        <Text fontSize="xl" fontWeight="extrabold">
        Copyright © 2024 SmartCryptoEd, Inc.
        </Text>
      </Container>
    </Container>
  );
}

export default Footer;
