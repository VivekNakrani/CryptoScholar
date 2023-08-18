import React from "react";
import { Container, Divider, Text, Link, Box } from "@chakra-ui/react";

const footerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const linkStyle: React.CSSProperties = {
  marginRight: "10px",
  textDecoration: "none",
};

function Footer() {
  return (
    <Container maxW={"100%"} mt={20} py={8} backgroundColor="gray.100">
      <Divider />
      <Container maxW={"1440px"} style={footerStyle}>
        <Text fontSize="2xl" mb={4} fontWeight={"bold"}>
          Made with ❤️ by Vivek.
        </Text>
        <Text fontSize="md" mb={4}>
          Building DigiWalletHub has been an incredibly fun effort.
          <br />
          I am always looking to make it better,
          <br />
          so please let me know how I can improve.
        </Text>
        <Box mt={4}>
          <Link href="https://github.com/VivekNakrani" style={linkStyle}>
            👨‍💻 GitHub
          </Link>
          <Link href="mailto:coder.vivekpatel@gmail.com" style={linkStyle}>
            ✉️ Email
          </Link>
          <Link href="#" style={linkStyle}>
            📜 Terms of use
          </Link>
          <Link href="#" style={linkStyle}>
            🔒 Privacy policy
          </Link>
        </Box>
        <Text fontSize="xl" mt={6} fontWeight={"extrabold"}>
          © DigiWalletHub
        </Text>
      </Container>
    </Container>
  );
}

export default Footer;