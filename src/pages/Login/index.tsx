import {
  Box,
  Grid,
  VStack,
  Flex,
  Heading,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "../../components/Input";
import ShoppingBag from "../../assets/shopping-bag.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  email: yup.string().required("email obrigaorio").email("email invalido"),
  password: yup
    .string()
    .required("senha obrigatoria")
    .min(6, "minimo de 6 digitos"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn, accessToken } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    console.log(data)
    setLoading(true);
    signIn(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
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
          flexDirection={["column", "column", "row-reverse", "row-reverse"]}
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
                  height="50px"
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
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
            border="3px solid"
            width="100%"
            maxWidth="540px"
            borderColor="gray.400"
            minWidth={["280px", "280px", "370px", "370px"]}
            mt="5"
            padding="15px 15px"
          >
            <Heading as="h3">Login</Heading>
            <VStack spacing="5" mt="4" display="flex">
              <Box w="100%">
                <Input
                  placeholder="Digite seu login"
                  type="email"
                  label="Login"
                  error={errors.email}
                  {...register("email")}
                />
              </Box>
              <Box w="100%">
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  label="Senha"
                  error={errors.password}
                  {...register("password")}
                />
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
                type="submit"
                w="100%"
                color="gray.500"
                h="60px"
                borderRadius="8px"
                onClick={() => history.push("/Register")}
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
