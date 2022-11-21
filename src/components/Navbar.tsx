import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export function Navbar () {
    return (
    <NavbarBs className="navbar">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                Home
                </Nav.Link>
                <Nav.Link to="/ListA" as={NavLink}>
                ListA
                </Nav.Link>
                <Nav.Link to="/ListB" as={NavLink}>
                ListB
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>)
}