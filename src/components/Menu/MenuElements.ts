import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    isActive: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
    font-weight: bold;
    font-size: 24px;
    text-decoration-line: none;
    margin-right: 20px;
    color: ${props => props.theme.loteria};
    ${({ isActive }) => isActive && `
        color: grey;
        pointer-events: none;
    `}
`;

export const Nav = styled.nav`
    padding: 5px;
    margin-bottom: 20px;
`

