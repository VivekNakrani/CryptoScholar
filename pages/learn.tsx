import React from 'react';
import { Container, Heading, Divider } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Heading as="h1" mb={8}>
        Let's Learn
      </Heading>
      <Divider />
    </Container>
  );
};

export default Home;