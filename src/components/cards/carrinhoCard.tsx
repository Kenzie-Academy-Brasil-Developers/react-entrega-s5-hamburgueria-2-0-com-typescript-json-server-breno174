import {
  Flex,
  Box,
  Grid,
  Button,
  Image,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";

interface CardProps {
  titulo: string;
  id?: number;
  preco: number;
  imagem?: string;
  categoria: string;
}

export const Card = ({ titulo, categoria, id, imagem, preco }: CardProps) => {
  return (
    <Box>
      <HStack>
        <Image alt="img de algo" />
        <VStack>
          <Text
            as="h4"
            fontSize="20px"
            mt="1.5"
            fontWeight="regular"
            color="gray.600"
          >
            {titulo}
          </Text>
          <Text> {categoria} </Text>
          <Text color="green.400" fontWeight="bold">
            R$ {preco}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
