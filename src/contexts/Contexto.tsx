import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import Loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({children}:any){
    const [megasena,setMegasena] = useState({} as Props);
    const [quina,setQuina] = useState({} as Props);
    const [lotofacil,setLotofacil] = useState({} as Props);
    const [timemania,setTimemania] = useState({} as Props);
    const [rotaAtual, setRotaAtual] = useState("");

    useEffect(()=>{
        ( async ()=>{
            const resp = await Loteria.get();
            setMegasena(resp.megasena);
            setLotofacil(resp.lotofacil);
            setQuina(resp.quina);
            setTimemania(resp.timemania);

        } )();
    },[]);
    
    useEffect(() => {
      const pathname = window.location.pathname;
      setRotaAtual(pathname);
    }, []);

    return (
      <Contexto.Provider value = {{megasena,lotofacil,quina,timemania}}>
        {children}
      </Contexto.Provider>
    );
  }

  export { Contexto, ContextoProvider };