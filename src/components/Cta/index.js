import { Button, Card, Container } from "react-bootstrap";

const Cta = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Sewa Mobil di (Lokasimu) Sekarang</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
          <Button variant="success">Mulai Sewa Mobil</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cta;
