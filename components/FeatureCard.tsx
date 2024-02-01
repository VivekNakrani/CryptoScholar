import { Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <Card px={8} py={10}>
      <Stack spacing={8}>
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Heading fontSize={"2xl"}>{title}</Heading>
        </Flex>
        <Text fontSize={"large"} ml={10}>{description}</Text>
      </Stack>
    </Card>
  );
};