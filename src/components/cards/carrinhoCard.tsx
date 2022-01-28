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
import { useCallback, useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { carrAuth } from "../../context/carrinhoContext";
import { useAuth } from "../../context/AuthContext";

interface CardProps {
  titulo: string;
  categoria: string;
  imagem: string;
  preco: number;
  id: number;
}

type OmitIdCard = Omit<CardProps, "id">;

export const CarrinhoCard = ({
  titulo,
  categoria,
  imagem,
  preco,
  id,
}: CardProps) => {
  const { addCarrinho, subCarrinho } = carrAuth();
  const { accessToken, user } = useAuth();

  const buget = useRef({
    titulo,
    categoria,
    imagem,
    preco,
    id,
  });

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
                onClick={() => subCarrinho(buget.current, accessToken)}
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
                1
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
                onClick={() => addCarrinho(user.id, accessToken, buget.current)}
              >
                +
              </Button>
            </HStack>
          </VStack>
          <Icon
            as={FaTrash}
            fontSize="22px"
            cursor="pointer"
            onClickCapture={() => subCarrinho(buget.current, accessToken)}
          />
        </Flex>
      </HStack>
    </Box>
  );
};
