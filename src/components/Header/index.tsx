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
  SimpleGrid,
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

interface VerificarProps2 {
  forEach<T>(
    array: T[],
    callback?: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}

interface VerificarProps {
  lista: IProd[];
  forEach(
    callback: (value: number, index: number, array: number[]) => void,
    thisArg?: any
  ): void;
  //forEach<T>(array: T[], callback?: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}

interface IProd {
  titulo: string;
  imagem: string;
  id: number;
  preco: number;
  categoria: string;
}

interface FilterProps {
  setProd: (props: string) => void;
  listProd: IProd[];
  prodfiltrados: IProd[];
  setFiltrados: (props: IProd) => void;
}
/**
 * ({
  setProd,
  listProd,
  prodfiltrados,
  setFiltrados,
}: FilterProps)
 */
export const Header = () => {
  const [init, setInit] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  //const [init, setInit] = useState<IProdutesCarr[]>([])

  const { carrinho, closeCarr, openCarr, carrProd, modalCarr } = carrAuth();
  const { produtsList, product, signOut, user, accessToken } = useAuth();
  ///
  interface IProdutesCarr {
    titulo: string;
    categoria: string;
    imagem: string;
    preco: number;
    id: number;
    quantidade: number;
  }
  /**
 * 
 const Verificar = (recebido: string | number) => {
   const recebe = typeof recebido;

   if (recebe === "number") {
     prodfiltrados = listProd.filter((el) => el.preco === recebido);
   } else if (recebido === "") {
     prodfiltrados = listProd;
   } else {
     prodfiltrados = listProd.filter(
       (el) => el.titulo === recebido || el.categoria === recebido
     );
   }
 };
 Verificar(init);
 */

  //? (prodfiltrados = listProd) : (prodfiltrados = recebido);

  /**
   * 
   function newForEach ({array , callback}: VerificarProps2) {
    for (let i = 0; i < array.length; i++) {
       callback(array[i],i,array)
    }
    }
   */

  const qualquer = (lista: VerificarProps) => {
    lista.forEach((el) => {});
  };

  return (
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
          <Text color="red.400" fontSize="20px">
            <b>Kenzie</b>
          </Text>
        </HStack>
      </Box>

      <HStack paddingRight={["10px", "10px", "60px", "60px"]} spacing="4">
        <HStack
          bg="white"
          borderRadius="8px"
          border="2px solid"
          borderColor="gray.400"
          padding="8px"
        >
          <Input
            bg="transparent"
            border="none"
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="digite sua pesquisa"
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
            paddingX={["22px", "25px", "28px", "30px"]}
          >
            <Icon
              as={AiOutlineSearch}
              color="white"
              fontSize="25px"
              fontWeight="bold"
              onClick={() => setIsFilter(true)}
            />
          </Center>
        </HStack>
        {!modalCarr ? (
          <Icon
            as={AiOutlineShoppingCart}
            fontSize={["26px", "33px", "33px", "33px"]}
            onClick={() => openCarr()}
            cursor="pointer"
          />
        ) : (
          <Icon
            as={AiOutlineShoppingCart}
            fontSize={["26px", "33px", "33px", "33px"]}
            onClick={() => closeCarr()}
            cursor="pointer"
          />
        )}
        <Icon
          as={AiOutlineExport}
          fontSize={["26px", "33px", "33px", "33px"]}
          onClick={() => signOut()}
          cursor="pointer"
        />
      </HStack>
    </HStack>
  );
};
