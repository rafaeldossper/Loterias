import { Props } from "../../types";
import Direita from "../Direita/Direita";
import Esquerda from "../Esquerda/Esquerda";
import { Container } from "./PrincipalElements";

interface PrincipalProps {
    resultado: Props,
    logo: string
}

export default function Principal(props: PrincipalProps) {

    return (
        <Container>
            <Esquerda resultado={props.resultado} logo={props.logo} />
            <Direita resultado={props.resultado} />
        </Container>
    )
}