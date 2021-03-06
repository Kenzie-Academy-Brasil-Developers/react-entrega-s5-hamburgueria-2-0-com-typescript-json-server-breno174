import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Carrinho } from "../../components/Modal/ModalCarrinho";
import { useAuth } from "../../context/AuthContext";
import { Card } from "../../components/cards/cards";
import { useEffect } from "react";
import { carrAuth } from "../../context/carrinhoContext";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  const [isFilter, setIsFilter] = useState(false);

  const { produtsList, product, user, accessToken } = useAuth();

  const { carrinho, carrProd, modalCarr } = carrAuth();

  useEffect(() => {
    produtsList(user.id, accessToken);
    carrinho(user.id, accessToken);
  }, []);
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
        <Header />
        <Flex
          w="100%"
          h="89%"
          mt="5"
          paddingX={["15px 0px", "15px 0px", "15px", "15px"]}
          overflowY="auto"
          justifyContent="center"
        >
          <Flex
            overflowY="auto"
            justifyContent={["flex-start", "center", "center", "center"]}
          >
            <Flex
              h={["400px", "400px", "100%", "100%"]}
              w="100%"
              gridColumn={4}
              justifyContent={["flex-start", "flex-start", "center", "center"]}
              alignItems="center"
              alignContent={[
                "flex-start",
                "flex-start",
                "flex-start",
                "flex-start",
              ]}
              wrap={["nowrap", "nowrap", "wrap", "wrap"]}
              overflowX={["scroll", "scroll", "auto", "auto"]}
              gap={3}
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
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
