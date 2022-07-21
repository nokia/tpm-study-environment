import React from "react";
import "survey-react/survey.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import ContactDetails from "../components/contactDetails";
const { NEXT_PUBLIC_SERVER_NAME } = process.env;

const chatLink = `https://tlk.io/${NEXT_PUBLIC_SERVER_NAME}`;
export default function ContactPage() {
  return (
    <Container fluid className="contact-details-container mt-4">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <h4 className="title"> Contact us:</h4>
          <p>
            If you need technical support (e.g. if your study site is frozen)
            you can reach out to us via chat or email.
          </p>
          <p>
            The chat service we use requires no login and you can pick a
            nickname of your choice.
          </p>
          <p>
            However, please do not communicate anything sensitive as that is a
            public chat. For sensitive information, kindly use email.
          </p>
          <Button href={chatLink} target="_blank">Open chat</Button>
          <ContactDetails />
        </Col>
      </Row>
    </Container>
  );
}
