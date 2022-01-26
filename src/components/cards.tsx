import { Flex, Box, Grid, Button, Image, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";

interface CardProps {
  titulo: string;
  id?: number;
  preco: number;
  imagem?: string;
  categoria: string;
}
type CardVariationOptions = {
  [key: string]: string;
};

const CardVariation: CardVariationOptions = {
  default: "green.400",
  focus: "green.300",
};

export const Card = ({ titulo, categoria, id, imagem, preco }: CardProps) => {
  const [valide, setValid] = useState(false);

  const [variation, setVariation] = useState("default");

  const handleCardFocus = useCallback(() => {
    if (!valide) {
      setVariation("focus");
    }
  }, [valide]);

  return (
    <Box
      h="310px"
      minWidth="250px"
      padding="10px 10px"
      bg="white"
      border="3px solid"
      borderColor="gray.400"
      _hover={{
        boderColor: "green.400",
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
            bg="green.400"
            w="100px"
            color="white"
            h="44px"
            borderRadius="8px"
            _hover={{
              background: "green.300",
            }}
            onClick={() => {}}
          >
            Adicionar
          </Button>
        </Grid>
      </Flex>
    </Box>
  );
};
