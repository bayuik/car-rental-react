import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="bgGreen">
        <Container>
          <Row>
            <Col>
              <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Button variant="success">Mulai Sewa Mobil</Button>
            </Col>
            <Col>
              <img src="/images/img_car.png" alt="Car Logo" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
