import { Col, Container, Row } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import { accordions } from "./accordions";

const Faq = () => {
  return (
    <Container className="mb-section">
      <Row>
        <Col>
          <h2 className="fw-bold mb-4">Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col>
          {accordions.map(({ title, body }, id) => {
            return <AccordionItem id={id} title={title} body={body} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
