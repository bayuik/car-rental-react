import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsPeople, BsGear, BsCalendar2Date } from "react-icons/bs";
const CarFrame = () => {
  return (
    <Container className="mb-section">
      <Col md={4}>
        <Card className="shadow">
          <Card.Body>
            <Col className="text-center my-3">
              <img src="/images/car01.min.jpg" alt="" className="rounded img-frame" />
            </Col>
            <p>Nama/Tipe Mobil</p>
            <p className="fw-bold">Rp 430.000 / hari</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Col>
              <BsPeople />
              <p className="feature">4 orang</p>
            </Col>
            <Col>
              <BsGear />
              <p className="feature">Manual</p>
            </Col>
            <Col>
              <BsCalendar2Date />
              <p className="feature">Tahun 2020</p>
            </Col>
            <Button className="w-100 mt-4" variant="success">
              Pilih Mobil
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default CarFrame;
