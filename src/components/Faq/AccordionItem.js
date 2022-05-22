import { Accordion } from "react-bootstrap";

const AccordionItem = ({ id, title, body }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionItem;
