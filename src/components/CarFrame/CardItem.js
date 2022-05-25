import { Button, Card, Col } from "react-bootstrap";
import { BsPeople, BsGear, BsCalendar2Date } from "react-icons/bs";

const CardItem = ({ image, manufacture, model, rentPerDay, description, capacity, transmission, year }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Body>
          <Col className="text-center my-3">
            <img src={image} alt={model} className="rounded img-frame" />
          </Col>
          <p>
            {manufacture} {model}
          </p>
          <p className="fw-bold">Rp {rentPerDay.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} / hari</p>
          <p className="desc">{description}</p>
          <Col>
            <BsPeople />
            <p className="feature">{capacity} orang</p>
          </Col>
          <Col>
            <BsGear />
            <p className="feature">{transmission}</p>
          </Col>
          <Col>
            <BsCalendar2Date />
            <p className="feature">Tahun {year}</p>
          </Col>
          <Button className="w-100 mt-4" variant="success">
            Pilih Mobil
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
