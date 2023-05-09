import { ThemeProvider } from "styled-components";
import { useContexto } from "../../hooks";
import Principal from "../../components/Principal/Principal";
import Carregando from "../../components/Carregando/Carregando";
import Logo from "../../assets/trevo-timemania.png"
import { timemania as TimemaniaTheme } from "../../styles/theme";

export default function Timemania() {

    const { timemania } = useContexto()

    function isCarregado() {
        return !!timemania.numeroDoConcurso;
    }

    function renderElementos() {

        return (
            <ThemeProvider theme={TimemaniaTheme}>
                <Principal resultado={timemania} logo={Logo}/>
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