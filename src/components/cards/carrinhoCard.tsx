import {
  Flex,
  Box,
  Grid,
  Button,
  Image,
  Text,
  HStack,
  VStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface CardProps {
  titulo: string;
  id?: number;
  preco: number;
  imagem?: string;
  categoria: string;
}

export const CarrinhoCard = ({
  titulo,
  categoria,
  id,
  imagem,
  preco,
}: CardProps) => {
  return (
    <Box w="100%" p="0px 15px 0px 15px">
      <HStack>
        <Box bg="gray.300">
          <Image alt="img de algo" />
        </Box>
        <Flex w="90%" justifyContent="space-between">
          <VStack alignItems="flex-start" paddingLeft="10px">
            <Heading as="h5" fontSize="20px" color="gray.700">
              {titulo}
            </Heading>
            <HStack
              bg="gray.200"
              boder="2px solid"
              borderColor="gray.400"
              w="140px"
              h="40px"
              borderRadius="8px"
            >
              <Button
                bg="gray.400"
                color="red.400"
                padding="0px 5px"
                fontSize="18px"
                _hover={{
                  bg: "green.500",
                  color: "white",
                }}
                onClick={() => {}}
              >
                -
              </Button>
              <Grid
                w="40px"
                h="35px"
                bg="white"
                color="gray.700"
                textAlign="center"
                alignItems="flex-start"
                ml="0px"
              >
                10
              </Grid>
              <Button
                bg="gray.400"
                color="red.400"
                padding="0px 5px"
                fontSize="18px"
                _hover={{
                  bg: "green.500",
                  color: "white",
                }}
                onClick={() => {}}
              >
                +
              </Button>
            </HStack>
          </VStack>
          <Icon
            as={FaTrash}
            fontSize="22px"
            onClickCapture={() => console.log("deletou o item do carrinho")}
          />
        </Flex>
      </HStack>
    </Box>
  );
};
