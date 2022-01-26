import { Heading, Flex, Box } from "@chakra-ui/react";

export const Carrinho = () => {
  return (
    <Box
      w="330px"
      h="240px"
      bg="gray.300"
      position="absolute"
      top="200px"
      left="200px"
    >
      <Box w="100%" h="30px" bg="green.400"></Box>
      <Flex
        bg="white"
        w="90%"
        h="120px"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h3" color="red.400" fontSize="25px" fontWeight="bold">
          Carrinho
        </Heading>
      </Flex>
    </Box>
  );
};
