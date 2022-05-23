import { Row, Card, Col } from "react-bootstrap";

const SlideItem = ({ name, text, img }) => {
  return (
    <Card className="p-3 greenCard">
      <Card.Body>
        <Row>
          <Col sm={4} className="my-auto">
            <img src={img} alt="" />
          </Col>
          <Col className="text-start">
            <img src="/images/Rate.png" alt="" style={{ height: "16px" }} />
            <p>{text}</p>
            <p className="fw-bold">{name}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SlideItem;
