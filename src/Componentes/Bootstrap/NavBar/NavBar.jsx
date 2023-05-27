import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from "../../../Context/AuthContext";

function NavBar() {

    const { logout } = useContext(AuthContext);


    return (


        <Navbar bg="light" expand="lg">
            <Container>
                <Row className="w-100">
                    <Col className="text-end" style={{margin:"3px"}}>
                        <Navbar.Brand>Gerenciamento de Produtos</Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/produtos">Produtos</Nav.Link>
                                <Nav.Link href="/checkout">Checkout</Nav.Link>
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>

    );
}

export default NavBar;