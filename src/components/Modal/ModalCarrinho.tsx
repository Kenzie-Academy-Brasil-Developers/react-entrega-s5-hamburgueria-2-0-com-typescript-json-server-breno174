import {
  Heading,
  Flex,
  Box,
  Text,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { carrAuth } from "../../context/carrinhoContext";
import { CarrinhoCard } from "../cards/carrinhoCard";

export const Carrinho = () => {
  const { user, accessToken } = useAuth();
  const { closeCarr, carrProd, carrinho, modalCarr } = carrAuth();
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    carrinho(user.id, accessToken);
  }, [modalCarr]);

  const total = carrProd.reduce((ant, cur) => (ant += cur.preco), 0);
  useEffect(() => {
    console.log(total);
    if (carrProd.length >= 1) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [carrProd]);

  return (
    <Flex
      w={["280px", "320px", "430px", "430px"]}
      bg="white"
      position="absolute"
      top={["20vh", "20vh", "35%", "35%"]}
      left={["8vmax", "25vw", "28vw", "44vw"]}
      flexDirection="column"
      border="2px solid"
      borderColor="gray.500"
      borderRadius="10px"
      zIndex="2"
    >
      <HStack
        w="100%"
        h="45px"
        bg="green.400"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="10px 10px 0px 0px"
      >
        <Text pl="20px" fontSize="18px" color="white" fontWeight="semibold">
          Carrinho de compras
        </Text>
        <Button
          bg="green.400"
          color="white"
          _hover={{
            bg: "green.400",
          }}
          _focus={{
            bg: "green.400",
          }}
          _active={{
            bg: "green.400",
          }}
          onClick={() => closeCarr()}
        >
          X
        </Button>
      </HStack>
      <Flex
        bg="white"
        w="100%"
        h="100%"
        justifyContent="space-around"
        alignItems="center"
        borderRadius="10px"
        flexDir="column"
      >
        {!isEmpty ? (
          <>
            <Heading
              mt="30px"
              as="h3"
              color="gray.700"
              fontSize="25px"
              fontWeight="bold"
            >
              Sacola está vazia
            </Heading>
            <Text mb="30px" fontSize="18px" color="gray.500">
              Volte para adicionar um item
            </Text>
          </>
        ) : (
          <>
            <VStack
              spacing="3"
              w="100%"
              h="180px"
              paddingTop="10px"
              paddingBottom="10px"
              overflowY="auto"
            >
              {carrProd.map((prod) => (
                <CarrinhoCard
                  key={prod.id}
                  titulo={prod.titulo}
                  categoria={prod.categoria}
                  preco={prod.preco}
                  imagem={prod.imagem}
                  id={prod.id}
                />
              ))}
            </VStack>
            <Flex
              flexDir="column"
              alignItems="center"
              w="100%"
              as="footer"
              borderTop="2px solid"
              borderColor="gray.400"
              paddingTop="10px"
              paddingBottom="20px"
            >
              <HStack justifyContent="space-evenly" w="100%">
                <Text
                  paddingLeft="10px"
                  color="gray.700"
                  fontWeight="bold"
                  fontSize="20px"
                >
                  Total
                </Text>
                <Text
                  paddingRight="10px"
                  color="gray.600"
                  fontWeight="bold"
                  fontSize="20px"
                >
                  R$ {total}
                </Text>
              </HStack>
              <Button
                bg="gray.400"
                fontSize="20px"
                padding="29px 25px"
                w="90%"
                _hover={{
                  bg: "green.500",
                  color: "white",
                }}
                onClick={() => {}}
              >
                Remover todos
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
};
