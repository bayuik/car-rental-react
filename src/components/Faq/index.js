import { Col, Container, Row } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import { accordions } from "./accordions";

const Faq = () => {
  return (
    <Container className="mb-section" id="faq">
      <Row>
        <Col>
          <h2 className="fw-bold mb-4">Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col>
          {accordions.map((accordion, id) => {
            return <AccordionItem key={id} {...accordion} id={id} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
