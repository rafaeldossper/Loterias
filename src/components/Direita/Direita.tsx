import { Props } from "../../types";
import Acumulou from "../Acumulou/Acumulou";
import Data from "../Data/Data";
import Resultado from "../Resultado/Resultado";
import { Div } from "./DireitaElements";

interface DireitaProps {
    resultado: Props
}

export default function Direita(props: DireitaProps) {

    return (
        <Div>
            <Resultado dezenas={props.resultado.dezenas} />
            <Acumulou isAcumulado={props.resultado.acumulado}/>
            <Data numeroDoConcurso={props.resultado.numeroDoConcurso} dataPorExtenso={props.resultado.dataPorExtenso}/>
        </Div>
    )
}