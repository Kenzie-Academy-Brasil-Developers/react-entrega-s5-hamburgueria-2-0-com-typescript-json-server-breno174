import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
//import { Search2Icon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineExport,
} from "react-icons/ai";
import { useState } from "react";
import { useHistory } from "react-router-dom";
//import { Input } from "../../components/Input";
import { useAuth } from "../../context/AuthContext";
import { Card } from "../../components/cards";

interface ListProps {
  produto: Array<ProdutosProps>[];
}

interface ProdutosProps {
  titulo: string;
  id: number;
  preco: number;
  imagem: string;
  categoria: string;
}

export const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const history = useHistory();
  const { produtsList, product } = useAuth();
  return (
    <Flex
      padding={["10px 15px", "10 15px", "0px", "0px"]}
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
        mt="4"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box padding={["0px 10px", "0px 10px", "0px 60px", "0px 60px"]}>
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
            bg="gray.300"
            borderRadius="8px"
            border="1px solid gray.600"
            padding="8px"
          >
            <Input
              bg="transparent"
              border="none"
              onChange={(e) => setFilter(e.target.value)}
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
                onClick={() => {}}
              />
            </Center>
          </HStack>
          <Icon
            as={AiOutlineShoppingCart}
            fontSize={["25px", "25px", "33px", "33px"]}
            onClick={() => {}}
          />
          <Icon
            as={AiOutlineExport}
            fontSize={["25px", "25px", "33px", "33px"]}
            onClick={() => {}}
          />
        </HStack>
      </HStack>
      <Box w="100%" h="89%" mt="5">
        <Flex justifyContent="center" alignItems="center">
          <Grid padding="20px" m="5" />
        </Flex>
      </Box>
    </Flex>
  );
};
/**
     * <Flex justifyContent="center" alignItems="center">
          {product.map((prod) => (
            <Card
              key={prod.id}
              categoria={prod.categoria}
              titulo={prod.titulo}
              preco={prod.preco}
              imagem=""
            />
          ))}
        </Flex>
     */
