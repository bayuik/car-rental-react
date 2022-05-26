import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="fixed-top bgNav">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#services" className="fw-bold">Our Services</Nav.Link>
          <Nav.Link href="#why-us" className="fw-bold">Why Us</Nav.Link>
          <Nav.Link href="#testimonial" className="fw-bold">Testimonial</Nav.Link>
          <Nav.Link href="#faq" className="fw-bold">FAQ</Nav.Link>
          <Button variant="success">Register</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
