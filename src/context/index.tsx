import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../theme/theme";
import { AuthProvider } from "./AuthContext";
import { CarrinhoProvider } from "./carrinhoContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <CarrinhoProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CarrinhoProvider>
  </AuthProvider>
);
