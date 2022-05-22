import { Accordion, Col, Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quae. Animi neque pariatur laborum accusamus eos excepturi et, fugiat non blanditiis sed atque numquam quo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quae. Animi neque pariatur laborum accusamus eos excepturi et, fugiat non blanditiis sed atque numquam quo.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
