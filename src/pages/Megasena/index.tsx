import { ThemeProvider } from "styled-components";
import { useContexto } from "../../hooks";
import { mega } from "../../styles/theme";
import Principal from "../../components/Principal/Principal";
import Carregando from "../../components/Carregando/Carregando";
import Logo from "../../assets/trevo-megasena.png"

export default function Megasena() {

    const { megasena } = useContexto()

    function isCarregado() {
        return !!megasena.numeroDoConcurso;
    }

    function renderElementos() {

        return (
            <ThemeProvider theme={mega}>
                <Principal resultado={megasena} logo={Logo}/>
            </ThemeProvider>
        )
    }

    function renderCarregando() {

        return (
            <Carregando isCarregando={isCarregado()}/>
        )
    }

    return (
        <>
            {isCarregado() ? renderElementos() : renderCarregando()}
        </>
    )
}