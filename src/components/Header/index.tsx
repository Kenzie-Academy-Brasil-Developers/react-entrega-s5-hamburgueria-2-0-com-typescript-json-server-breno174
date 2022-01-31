import { useState } from "react";

interface VerificarProps2 {
  forEach<T>(
    array: T[],
    callback?: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}

interface VerificarProps {
  lista: IProd[];
  forEach(
    callback: (value: number, index: number, array: number[]) => void,
    thisArg?: any
  ): void;
  //forEach<T>(array: T[], callback?: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}

interface IProd {
  titulo: string;
  imagem: string;
  id: number;
  preco: number;
  categoria: string;
}

interface FilterProps {
  setProd: (props: string) => void;
  listProd: IProd[];
  prodfiltrados: IProd[];
  setFiltrados: (props: IProd) => void;
}

export const Filtro = ({
  setProd,
  listProd,
  prodfiltrados,
  setFiltrados,
}: FilterProps) => {
  const [init, setInit] = useState("");
  //const [init, setInit] = useState<IProdutesCarr[]>([])

  interface IProdutesCarr {
    titulo: string;
    categoria: string;
    imagem: string;
    preco: number;
    id: number;
    quantidade: number;
  }

  const Verificar = (recebido: string | number) => {
    const recebe = typeof recebido;

    if (recebe === "number") {
      prodfiltrados = listProd.filter((el) => el.preco === recebido);
    } else if (recebido === "") {
      prodfiltrados = listProd;
    } else {
      prodfiltrados = listProd.filter(
        (el) => el.titulo === recebido || el.categoria === recebido
      );
    }
  };
  //? (prodfiltrados = listProd) : (prodfiltrados = recebido);
  Verificar(init);

  /**
   * 
   function newForEach ({array , callback}: VerificarProps2) {
    for (let i = 0; i < array.length; i++) {
       callback(array[i],i,array)
    }
    }
   */

  const qualquer = (lista: VerificarProps) => {
    lista.forEach((el) => {});
  };

  return (
    <>
      <input
        value={init}
        placeholder="Digitar pesquisa"
        onChange={(event) => setInit(event.target.value)}
      />
      <button
        onClick={() => {
          setProd(init);
        }}
      >
        Pesquisar
      </button>
    </>
  );
};
