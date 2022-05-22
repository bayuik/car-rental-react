import { Card, Col, Container, Row } from "react-bootstrap";

const WhyUs = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <img src="/images/icon_complete.png" alt="" />
                <Card.Title>Mobil Lengkap</Card.Title>
                <Card.Text>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyUs;
