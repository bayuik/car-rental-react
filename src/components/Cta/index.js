import { Button, Card, Container } from "react-bootstrap";

const Cta = () => {
  return (
    <Container>
      <Card className="text-center bgBlue text-white p-5">
        <Card.Body>
          <h2 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h2>
          <Card.Body className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </Card.Body>
          <Button variant="success">Mulai Sewa Mobil</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cta;
