import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Filter = () => {
  return (
    <Container className="shadow p-4 mb-5 bg-body filter-container">
      <Row>
        <Col md={3}>
          <p>Tipe Driver</p>
          <Form.Select>
            <option>Pilih Tipe Driver</option>
            <option value=""></option>
          </Form.Select>
        </Col>
        <Col>
          <p>Tanggal</p>
          <Form.Control type="date" placeholder="Pilih Tanggal" />
        </Col>
        <Col>
          <p>Waktu Jemput/Ambil</p>
          <Form.Control type="time" placeholder="Pilih Waktu" />
        </Col>
        <Col md={3}>
          <p>Jumlah Penumpang (optional)</p>
          <Form.Control type="number" placeholder="Jumlah Penumpang" />
        </Col>
        <Col md={2} className="mt-auto">
          <Button variant="success">Cari Mobil</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
