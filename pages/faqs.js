import React, { useState } from "react";
import "survey-react/survey.css";

import { Container, Row, Col } from "react-bootstrap";
import FAQs from "../components/faqs";
import { faqs } from "../data/faqs";

export default function FaqsPage() {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col lg={{ span: 11 }}>
          <h3> Frequently Asked Questions </h3>
          <FAQs faqs={faqs} />
        </Col>
      </Row>
    </Container>
  );
}
