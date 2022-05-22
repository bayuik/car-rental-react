import { Col, Card } from "react-bootstrap";

const CardItem = ({img, title, text}) => {
  return (
    <Col>
      <Card className="p-2" style={{height: "225px"}}>
        <Card.Body>
          <img src={img} alt={title} className="mb-4" />
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
