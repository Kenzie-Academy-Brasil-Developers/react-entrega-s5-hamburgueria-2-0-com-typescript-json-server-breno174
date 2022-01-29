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
  openCarr: () => void;
  closeCarr: () => void;
  modalCarr: boolean;
  carrinho: (userId: string, accessToken: string) => Promise<void>;
  carrProd: IProduts[];
  addCarrinho: (
    userId: string,
    acessToken: string,
    objeto: IPostProduts
  ) => void;
  subCarrinho: (props: IDeleteProduts, accessToken: string) => void;
}

interface ListaProds {
  produtos: IRemoveAll[];
  forEach?: (elemet: IDeleteProduts) => void;
}

interface IRemoveAll {
  titulo: string;
  categoria: string;
  imagem: string;
  preco: number;
  id: number;
  forEach?: (elemet: IDeleteProduts) => void;
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
  userId: number;
}

interface IPostProduts {
  titulo: string;
  categoria: string;
  imagem: string;
  preco: number;
  id?: number;
}

interface IDeleteProduts {
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

  const openCarr = () => {
    setModalCarr(true);
  };

  const closeCarr = () => {
    setModalCarr(false);
  };

  const carrinho = useCallback(async (userId: string, acessToken: string) => {
    try {
      const response = await api.get(`/carrinho?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      });
      setcarrProd(response.data);
    } catch (err) {
      console.log(err);
      setcarrProd([]);
    }
  }, []);

  const addCarrinho = useCallback(
    async (userId: string, acessToken: string, objeto: IPostProduts) => {
      const data = {
        titulo: objeto.titulo,
        categoria: objeto.categoria,
        preco: objeto.preco,
        imagem: objeto.imagem,
        userId: userId,
      };

      try {
        const response = await api.post(`/carrinho?userId=${userId}`, data, {
          headers: {
            Authorization: `Bearer ${acessToken}`,
          },
        });
        setcarrProd([...carrProd, response.data]);
      } catch (err) {
        console.log(err);
        toast.error("nao adicionou ao carrinho");
      }
      carrinho(userId, acessToken);
    },
    []
  );

  const subCarrinho = async (objeto: IDeleteProduts, acessToken: string) => {
    try {
      const response = await api.delete(`/carrinho/${objeto.id}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      });
      const newcar = carrProd.filter((elemt) => elemt.id !== objeto.id);
      setcarrProd(newcar);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CarrinhoContext.Provider
      value={{
        openCarr,
        closeCarr,
        modalCarr,
        carrinho,
        carrProd,
        addCarrinho,
        subCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export { CarrinhoProvider, useAuth as carrAuth };
