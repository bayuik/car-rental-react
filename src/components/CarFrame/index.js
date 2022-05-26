import { Container, Row } from "react-bootstrap";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";

const CarFrame = () => {
  const cars = useSelector((state) => state.carsReducer.data);
  return (
    <Container className="mb-section">
      <Row>
        {cars.map((car, id) => {
          return <CardItem key={id} {...car} />;
        })}
      </Row>
    </Container>
  );
};

export default CarFrame;
