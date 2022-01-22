import {
  Box,
  Grid,
  VStack,
  Flex,
  Heading,
  Image,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Flex
      padding={["10px 15px", "10 15px", "0px", "0px"]}
      bg="white"
      alignItems="center"
      justifyContent="center"
      color="gray.500"
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Flex
          padding="30px 15px"
          bg="white"
          flexDirection={["column", "column", "row-reverse", "row-reverse"]}
          justifyContent="center"
          mt={["4", "4", "0"]}
          w={["100%", "100%", "80%", "65%"]}
        >
          <VStack
            padding="15px 15px"
            maxWidth="420px"
            alignSelf="center"
            spacing="5"
          >
            <HStack alignItems="flex-end">
              <Heading as="h2" color="red.400">
                Burguer
              </Heading>
              <Text color="gray.700">
                <b>Kenzie</b>
              </Text>
            </HStack>
            <HStack>
              <figure>
                <img alt="caixa box" />
              </figure>
              <figcaption>
                A vida é como um sanduíche, é preciso recheá-la com os{" "}
                <b>melhores</b> ingredientes.
              </figcaption>
            </HStack>
            <Box
              maxWidth="440px"
              height={["0px", "0px", "200px", "200px"]}
            ></Box>
          </VStack>

          <Grid
            border="3px solid"
            borderColor="gray.100"
            minWidth="370px"
            mt="5"
            padding="15px 15px"
          >
            <Heading as="h3">Login</Heading>
            <VStack spacing="5" mt="4" display="flex">
              <Box w="100%">
                <Input name="algo1" />
                <Text>messagem</Text>
              </Box>
              <Box w="100%">
                <Input name="algo2" />
                <Text>messagem</Text>
              </Box>
            </VStack>
            <VStack mt="4" spacing="5" textAlign="center">
              <Button
                isLoading={loading}
                bg="green.400"
                w="100%"
                color="white"
                h="60px"
                borderRadius="8px"
                _hover={{
                  background: "green.300",
                }}
                type="submit"
              >
                Entrar
              </Button>
              <Text>
                Crie sua conta para saborear muitas delícias e matar a sua fome!
              </Text>
              <Button
                bg="gray.200"
                w="100%"
                color="gray.500"
                h="60px"
                borderRadius="8px"
                _hover={{
                  background: "gray.500",
                  color: "white",
                }}
              >
                Cadastrar
              </Button>
            </VStack>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};
