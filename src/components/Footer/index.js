import { Col, Container, Nav, Row } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import { socmed } from "./socmed";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="mb-section">
      <Row>
        <Col>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col>
          <Nav.Link href="#services" className="text-dark">Our services</Nav.Link>
          <Nav.Link href="#why-us" className="text-dark">Why Us</Nav.Link>
          <Nav.Link href="#testimonial" className="text-dark">Testimonial</Nav.Link>
          <Nav.Link href="#faq" className="text-dark">FAQ</Nav.Link>
        </Col>
        <Col>
          <p>Connect with us</p>
          {socmed.map((item, id) => (
            <SocialMedia key={id} {...item} />
          ))}
        </Col>
        <Col>
          <p>Copyright Binar 2022</p>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
