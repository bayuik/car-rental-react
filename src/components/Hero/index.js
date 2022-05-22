import { Button, Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Row className="bgGreen mb-section">
      <Col className="my-auto text-hero">
        <h2 className="fw-bold mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <Button variant="success">Mulai Sewa Mobil</Button>
      </Col>
      <Col>
        <img src="/images/img_car.png" alt="Car Logo" />
      </Col>
    </Row>
  );
};

export default Hero;
