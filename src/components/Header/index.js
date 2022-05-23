import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bgGreen">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Our Services</Nav.Link>
          <Nav.Link href="/">Why Us</Nav.Link>
          <Nav.Link href="/">Testimonial</Nav.Link>
          <Nav.Link href="/">FAQ</Nav.Link>
          <Button variant="success">Register</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
