"use client";
import GetJogos, { GetJogoLatest } from "@/services/getJogos";
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Providers({ children }) {
  const [headers, setHeaders] = useState([]);
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    GetJogos().then((res) => {
      const loterias = res;
      setHeaders(loterias);
      const promises = loterias.map((lote) => GetJogoLatest(lote));

      Promise.all(promises).then((lot) => {
        const aux = lot.map((j) => ({ [j.loteria]: j }));
        setJogos(aux);
      });
    });
  }, []);

  return (
    <Context.Provider value={{ headers, jogos }}>{children}</Context.Provider>
  );
}

export const useProviderContext = () => useContext(Context);
