import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

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
  product: IProduts[];
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  produtsList: (userId: string, accessToken: string) => Promise<void>;
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

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [product, setProduct] = useState<IProduts[]>([]);

  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Hamburguer:accessToken");
    const user = localStorage.getItem("@Hamburguer:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const produtsList = useCallback(
    async (userId: string, acessToken: string) => {
      try {
        const response = await api.get(`/produtos?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${acessToken}`,
          },
        });
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Hamburguer:accessToken", accessToken);
    localStorage.setItem("@Hamburguer:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Hamburguer:accessToken");
    localStorage.removeItem("@Hamburguer:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        accessToken: data.accessToken,
        signIn: signIn,
        signOut: signOut,
        produtsList,
        product,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
