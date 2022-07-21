import React, { useState } from "react";
import "survey-react/survey.css";

import { Container, Row } from "react-bootstrap";
import SurveyContent from "../components/surveyContent";

export default function SurveyPage({ selectedLibrary }) {
  return (
    <Container fluid className="mt-4">
      <Row>
        <SurveyContent selectedLibrary={selectedLibrary} />
      </Row>
    </Container>
  );
}
