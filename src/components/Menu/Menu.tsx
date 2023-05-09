import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Nav, NavLink } from "./MenuElements";
import { mega, quina, timemania } from "../../styles/theme";

export default function Menu() {
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <Nav>
            <ThemeProvider theme={timemania}>
                <NavLink to="timemania" isActive={activeLink === "/timemania"}>Timemania</NavLink>
            </ThemeProvider>
            <ThemeProvider theme={mega}>
                <NavLink to="megasena" isActive={activeLink === "/megasena"}>Megasena</NavLink>
            </ThemeProvider>
            <ThemeProvider theme={quina}>
                <NavLink to="quina" isActive={activeLink === "/quina"}>Quina</NavLink>
            </ThemeProvider>
        </Nav>
    )
}
