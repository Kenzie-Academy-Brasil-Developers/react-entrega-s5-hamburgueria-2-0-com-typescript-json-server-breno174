import { Flex, Box, Grid, Button, Image, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { carrAuth } from "../../context/carrinhoContext";

interface CardProps {
  titulo: string;
  id: number;
  preco: number;
  imagem: string;
  categoria: string;
}

export const Card = ({ titulo, categoria, id, imagem, preco }: CardProps) => {
  const { addCarrinho } = carrAuth();
  const { accessToken, user } = useAuth();
  const produto = {
    titulo: titulo,
    categoria: categoria,
    id: id,
    imagem: imagem,
    preco: preco,
  };

  return (
    <Box
      h="310px"
      minWidth="300px"
      maxWidth="300px"
      padding="10px 10px"
      bg="white"
      border="3px solid"
      borderColor="gray.400"
      cursor="progress"
      //_hover={{
      //  border: "3px solid",
      //  boderColor: "red",
      //}}
      _hover={{
        borderColor: "green.400",
        "div > button": { bg: "green.400" },
      }}
      m="4"
    >
      <Flex flexDirection="column">
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          bg="gray.300"
          h="150px"
        >
          <Image
            alt={`imagem de ${titulo}`}
            src={imagem}
            width="200px"
            height="130px"
          />
        </Flex>
        <Grid paddingLeft="8px">
          <Text
            as="h4"
            fontSize="26px"
            mt="1.5"
            fontWeight="bold"
            color="gray.600"
          >
            {titulo}
          </Text>
          <Text> {categoria} </Text>
          <Text color="green.400" fontWeight="bold">
            R$ {preco}
          </Text>
          <Button
            bg="gray.500"
            w="100px"
            color="white"
            h="44px"
            borderRadius="8px"
            _hover={{
              background: "green.400",
            }}
            onClick={() => addCarrinho(user.id, accessToken, produto)}
          >
            Adicionar
          </Button>
        </Grid>
      </Flex>
    </Box>
  );
};
