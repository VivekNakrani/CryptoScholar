import { Box, Card, Spinner, Text } from "@chakra-ui/react";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

type Props = {
  tokenAddress: string;
  isSelected?: boolean;
};

export default function TokenSelection({ tokenAddress, isSelected }: Props) {
  const { contract } = useContract(tokenAddress);

  const { data: tokenMetadata, isLoading: isTokenMetadataLoading } =
    useContractMetadata(contract);

  let coinBorderColor = "gray.100";
  let coinBackgroundColor = "white";

  if (isSelected) {
    coinBorderColor = "green.100";
    coinBackgroundColor = "green.50";
  }

  return (
    <Card
      p={4}
      mr={2}
      border="2px solid"
      borderColor={coinBorderColor}
      backgroundColor={coinBackgroundColor}
      cursor="pointer"
      transition="background-color 0.3s"
      _hover={{ backgroundColor: "gray.100" }}
    >
      {(!isTokenMetadataLoading && tokenMetadata) ? (
        <Box>
          <Text>{tokenMetadata.symbol}</Text>
        </Box>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
