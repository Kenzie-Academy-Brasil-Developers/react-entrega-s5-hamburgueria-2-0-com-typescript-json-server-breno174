import { Box, Button, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  const history = useHistory();
  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Button onClick={() => history.push("/")}>Voltar</Button>
    </Box>
  );
};
