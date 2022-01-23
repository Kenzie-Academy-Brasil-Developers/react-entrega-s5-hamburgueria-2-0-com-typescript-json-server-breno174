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
import { Link, useHistory } from "react-router-dom";
import { Input } from "../../components/Input";
import ShoppingBag from "../../assets/shopping-bag.svg";
import {
  DeepMap,
  FieldError,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

interface SignUpData {
  email: string;
  password: string;
  name: string;
}

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignup = ({ name, email, password }: SignUpData) => {
    setLoading(true);

    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const history = useHistory();

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
          padding={["10px 0px", "10px 0px", "30px 15px", "30px 15px"]}
          bg="white"
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="center"
          alignItems="center"
          mt={["4", "4", "0"]}
          w={["100%", "100%", "80%", "70%"]}
        >
          <VStack
            padding="15px 15px"
            maxWidth="380px"
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
                <img
                  alt="caixa box"
                  src={ShoppingBag}
                  width="50px"
                  height="50px" //quando diminuo a tela meu icone está diminuindo o tamanho, por que?
                />
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
            width="100%"
            maxWidth="540px"
            borderColor="gray.400"
            minWidth={["280px", "280px", "370px", "370px"]}
            mt="5"
            padding="15px 15px"
          >
            <HStack justifyContent="space-between">
              <Heading as="h3">Cadastro</Heading>
              <Link to="/">voltar para Login</Link>
            </HStack>
            <VStack spacing="5" mt="4" display="flex">
              <Box w="100%">
                <Input name="name" />
                <Text>messagem</Text>
              </Box>
              <Box w="100%">
                <Input name="email" />
                <Text>messagem</Text>
              </Box>
              <Box w="100%">
                <Input name="password" />
                <Text>messagem</Text>
              </Box>
              <Box w="100%">
                <Input name="confirm_password" />
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
                onClick={() => history.push("/")}
                _hover={{
                  background: "green.300",
                }}
                type="submit"
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
