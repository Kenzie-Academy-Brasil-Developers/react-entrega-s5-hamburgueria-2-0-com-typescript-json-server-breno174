import { Flex, Box, Grid, Button, Image, Text } from "@chakra-ui/react";

interface CardProps {
  titulo: string;
  id?: number;
  preco: number;
  imagem: string;
  categoria: string;
}

export const Card = ({ titulo, categoria, id, imagem, preco }: CardProps) => {
  return (
    <Box>
      <Flex>
        <Box>
          <Image alt={`imagem de ${titulo}`} src={imagem} />
        </Box>
        <Grid>
          <Text> {titulo} </Text>
          <Text> {categoria} </Text>
          <Text> {preco} </Text>
          <Button onClick={() => {}}>Adicionar</Button>
        </Grid>
      </Flex>
    </Box>
  );
};
