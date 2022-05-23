import { Col, Container, Row } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import { socmed } from "./socmed";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col>
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
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
    </>
  );
};

export default Footer;
