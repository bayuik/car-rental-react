import { Col, Container, Nav, Row } from "react-bootstrap";

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
            <a href="https://www.facebook.com/">
              <img src="images/icon_facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="images/icon_instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com/">
              <img src="images/icon_twitter.png" alt="Twitter" />
            </a>
            <a href="https://mail.google.com/">
              <img src="images/icon_mail.png" alt="E-mail" />
            </a>
            <a href="https://www.twitch.tv/">
              <img src="images/icon_twitch.png" alt="Twitch" />
            </a>
          </Col>
          <Col>
            <p>Copyright Binar 2022</p>
            <img src="/images/logo.png" alt="logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
