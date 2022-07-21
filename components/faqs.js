import { Container, Row, Col, Nav, Card, ListGroup, Table } from "react-bootstrap";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

export default function FAQs({ faqs }) {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Nav defaultActiveKey="faq-1" className="flex-column" variant="pills">
            {faqs.map((faq, index) => {
              const key = `faq-${index + 1}`;
              return (
                <Nav.Item key={key}>
                  <Link href={`#${key}`}>
                    <Nav.Link href={`#${key}`}>
                      {index + 1}. {faq.question}
                    </Nav.Link>
                  </Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
        <Col md={10}>
          {faqs.map((faq, index) => {
            const key = `faq-${index + 1}`;
            return (
              <div key={key}>
                <span id={key} className="faq-anchor"></span>
                <h4 id={key}>
                  {index + 1}. {faq.question}
                  <a href={`#${key}`}> #</a>
                </h4>
                <p>{ReactHtmlParser(faq.answer)}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
