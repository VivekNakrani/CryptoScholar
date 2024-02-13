import Head from 'next/head';
import React, { useState } from 'react';
import { Container, Heading, Divider, Box, Collapse, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react';

const Home: React.FC = () => {
  const [isBasicCourseOpen, setIsBasicCourseOpen] = useState(false);

  const toggleBasicCourse = () => {
    setIsBasicCourseOpen(!isBasicCourseOpen);
  };

  return (
    <Container maxW="container.lg" py={10}>
      <Head>
        <title>Crypto Scholar - Courses</title>
      </Head>
      <Heading as="h1" mb={8}>
        Free Courses
      </Heading>
      <Divider />

      {/* Basic Course */}
      <Box mt={8} bg="gray.100" p={4} borderRadius="md">
        <Heading as="h2" size="md" mb={4}>
          Basic Course for Beginners
          <Button ml={4} onClick={toggleBasicCourse}>
            {isBasicCourseOpen ? '↓' : '→'}
          </Button>
        </Heading>
        <Collapse in={isBasicCourseOpen}>

          {/* Getting Started */}
          <Box mt={4}>
            <Heading as="h3" size="sm" mb={2}>
              Getting Started
            </Heading>
            <UnorderedList>
              <ListItem>
                Overview
                <UnorderedList>
                  <ListItem>Introduction to decentralized technologies</ListItem>
                  <ListItem>Brief history of blockchain</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                What is web3?
                <UnorderedList>
                  <ListItem>Understanding the decentralized web</ListItem>
                  <ListItem>Key components of web3 technology</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                What is blockchain?
                <UnorderedList>
                  <ListItem>Exploring the fundamentals of blockchain</ListItem>
                  <ListItem>How blockchain ensures security and transparency</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                What are smart contracts?
                <UnorderedList>
                  <ListItem>Definition and purpose of smart contracts</ListItem>
                  <ListItem>Use cases and applications of smart contracts</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                What are wallets?
                <UnorderedList>
                  <ListItem>Different types of wallets (hardware, software, paper, etc.)</ListItem>
                  <ListItem>Setting up and managing a cryptocurrency wallet</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>

            {/* Demo of a blockchain app */}
            <UnorderedList>
              <ListItem>
                Demo of a blockchain app
                <UnorderedList>
                  <ListItem>Walkthrough of a sample blockchain application</ListItem>
                  <ListItem>Highlighting key features and functionalities</ListItem>
                  <ListItem>Discussing potential use cases and benefits</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Smart Contracts */}
          <Box mt={4}>
            <Heading as="h3" size="sm" mb={2}>
              Smart Contracts
            </Heading>
            <UnorderedList>
              <ListItem>
                Overview
                <UnorderedList>
                  <ListItem>Deep dive into the concept and significance of smart contracts</ListItem>
                  <ListItem>Real-world examples of successful smart contract implementations</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Smart contract standards
                <UnorderedList>
                  <ListItem>Introduction to ERC standards (e.g., ERC-20, ERC-721, ERC-1155)</ListItem>
                  <ListItem>Understanding the importance of standards in the blockchain ecosystem</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Explore Contracts
                <UnorderedList>
                  <ListItem>Deploying an ERC20 contract
                    <UnorderedList>
                      <ListItem>Step-by-step guide to deploying and interacting with ERC20 contracts</ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>Deploying an ERC721 contract
                    <UnorderedList>
                      <ListItem>Creating unique non-fungible tokens (NFTs) on the blockchain</ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>Deploying an ERC1155 contract
                    <UnorderedList>
                      <ListItem>Understanding multi-token standards and their applications</ListItem>
                    </UnorderedList>
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Application */}
          <Box mt={4}>
            <Heading as="h3" size="sm" mb={2}>
              Application
            </Heading>
            <UnorderedList>
              <ListItem>
                Overview
                <UnorderedList>
                  <ListItem>Introduction to decentralized applications (dApps)</ListItem>
                  <ListItem>How blockchain technology is used in real-world applications</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>
        </Collapse>
      </Box>
    </Container>
  );
};

export default Home;