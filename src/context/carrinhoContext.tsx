import { AxiosResponse } from "axios";
import {
  ComponentType,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { Carrinho } from "../components/Modal/ModalCarrinho";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  openCarr: () => void;
  closeCarr: () => void;
  modalCarr: boolean;
  carrinho: (userId: string, accessToken: string) => Promise<void>;
  carrProd: IProduts[];
}

interface User {
  email: string;
  id: string;
  name: string;
}
interface IProduts {
  titulo: string;
  categoria: string;
  imagem: string;
  preco: number;
  id: number;
}

const CarrinhoContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(CarrinhoContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const CarrinhoProvider = ({ children }: AuthProviderProps) => {
  const [modalCarr, setModalCarr] = useState(false);
  const [carrProd, setcarrProd] = useState<IProduts[]>([]);

  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Hamburguer:accessToken");
    const user = localStorage.getItem("@Hamburguer:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const openCarr = () => {
    setModalCarr(true);
  };

  const closeCarr = () => {
    setModalCarr(false);
  };

  const carrinho = useCallback(async (userId: string, acessToken: string) => {
    console.log(userId, "user id");
    console.log(acessToken, "user token");
    try {
      const response = await api.get(`/carrinho?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      });
      setcarrProd(response.data);
    } catch (err) {
      console.log(err);
      console.log("falhou ao tentar pegar o carrinho");
    }
  }, []);

  return (
    <CarrinhoContext.Provider
      value={{
        user: data.user,
        accessToken: data.accessToken,
        openCarr,
        closeCarr,
        modalCarr,
        carrinho,
        carrProd,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export { CarrinhoProvider, useAuth as carrAuth };
