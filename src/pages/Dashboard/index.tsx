import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineExport,
} from "react-icons/ai";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Carrinho } from "../../components/Modal/ModalCarrinho";
import { useAuth } from "../../context/AuthContext";
import { Card } from "../../components/cards/cards";
import { useEffect } from "react";
//import { VerticallyCenter } from "../../components/Modal/ModalExemplo";
import { carrAuth } from "../../context/carrinhoContext";

interface ProdutosProps {
  titulo: string;
  id: number;
  preco: number;
  imagem: string;
  categoria: string;
}

export const Dashboard = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const history = useHistory();

  //oque fazer com o filterValue ?

  const { produtsList, product, signOut, user, accessToken } = useAuth();

  const { carrinho, closeCarr, openCarr, carrProd, modalCarr } = carrAuth();

  useEffect(() => {
    //console.log("useEffect da Dashboard");
    produtsList(user.id, accessToken);
    carrinho(user.id, accessToken);
  }, []);
  //console.log(carrProd, "\n carrinho");
  //console.log(user, "\n usuario do auth context");
  return (
    <>
      {modalCarr ? (
        <Box
          position="absolute"
          zIndex="1"
          w="100%"
          h="100vh"
          bg="black"
          opacity="30%"
          onClick={() => {}}
        ></Box>
      ) : (
        false
      )}
      {modalCarr ? <Carrinho /> : false}
      <Flex
        padding={["0px", "0px", "0px", "0px"]}
        alignItems="flex-start"
        flexDirection="column"
        w="100%"
        bg="white"
        color="gray.500"
        height={["auto", "auto", "100vh", "100vh"]}
      >
        <HStack
          w="100%"
          justifyContent="space-between"
          paddingY="3"
          bg="gray.300"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box padding={["0px 10px", "0px 10px", "0px 50px", "0px 50px"]}>
            <HStack alignItems="flex-end">
              <Heading as="h3" color="gray.700">
                Burguer
              </Heading>
              <Text color="red.400">
                <b>Kenzie</b>
              </Text>
            </HStack>
          </Box>

          <HStack paddingRight={["10px", "10px", "60px", "60px"]} spacing="4">
            <HStack
              bg="white"
              borderRadius="8px"
              border="1px solid gray.600"
              padding="8px"
            >
              <Input
                bg="transparent"
                border="none"
                onChange={(e) => setFilterValue(e.target.value)}
                h="50px"
                size="lg"
              />
              <Center
                borderRadius="8px"
                as="button"
                ml="2"
                w="50px"
                h="50px"
                fontSize="1xl"
                bg="green.400"
              >
                <Icon
                  as={AiOutlineSearch}
                  color="white"
                  fontSize="25px"
                  onClick={() => setIsFilter(true)}
                />
              </Center>
            </HStack>
            {!modalCarr ? (
              <Icon
                as={AiOutlineShoppingCart}
                fontSize={["25px", "25px", "33px", "33px"]}
                onClick={() => openCarr()}
                cursor="pointer"
              />
            ) : (
              <Icon
                as={AiOutlineShoppingCart}
                fontSize={["25px", "25px", "33px", "33px"]}
                onClick={() => closeCarr()}
                cursor="pointer"
              />
            )}
            <Icon
              as={AiOutlineExport}
              fontSize={["25px", "25px", "33px", "33px"]}
              onClick={() => signOut()}
              cursor="pointer"
            />
          </HStack>
        </HStack>
        <Box
          w="100%"
          h="89%"
          mt="5"
          paddingX={["15px 0px", "15px 0px", "15px", "15px"]}
          overflowY="auto"
        >
          <Flex
            h={["400px", "400px", "100%", "100%"]}
            justifyContent={["flex-start", "flex-start", "center", "center"]}
            alignItems="center"
            wrap={["nowrap", "nowrap", "wrap", "wrap"]}
            overflowX={["scroll", "scroll", "auto", "auto"]}
            gap={4}
          >
            {isFilter
              ? carrProd.map((card) => (
                  <Card
                    key={card.id}
                    categoria={card.categoria}
                    preco={card.preco}
                    titulo={card.titulo}
                    imagem={card.imagem}
                    id={card.id}
                  />
                ))
              : product.map((card) => (
                  <Card
                    key={card.id}
                    categoria={card.categoria}
                    preco={card.preco}
                    titulo={card.titulo}
                    imagem={card.imagem}
                    id={card.id}
                  />
                ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
