import React from "react";
import "survey-react/survey.css";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function ConsentPage() {
  return (
    <Container fluid className="consent-details-container mt-4">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <h4 className="title">PARTICIPATION CONSENT:</h4>
          <ul>
            <li>I voluntarily agree to participate in this research study.</li>
            <li>
              I understand that even if I agree to participate now, I can
              withdraw at any time or refuse to answer any question without any
              consequences of any kind.
            </li>
            <li>
              I understand that participation involves the collection and
              analysis of the code snippets executed in the online IDE,
              responses to the questionnaire, and basic demographic.
            </li>
            <li>
              I understand that all information I provide for this study will be
              treated confidentially.
            </li>
            <li>
              I understand that in any report on the results of this research my
              identity will remain anonymous.
            </li>
            <li>
              I understand that I am free to contact any of the people involved
              in the research to seek further clarification and information.
            </li>
            <li>
              I have had the purpose and nature of the study explained to me in
              writing and I have had the opportunity to ask questions about the
              study.
            </li>
            <li>
              I understand that I can withdraw permission to use data from my
              participation within two weeks after the study, in which case it
              will be deleted.
            </li>
          </ul>
          <h4 className="title">PRIVACY NOTICE:</h4>
          <p>
             In the course of completing this survey, Nokia will be collecting the survey respondent’s responses on series of questions related to Trusted Platform Module (TPM).
             The study will involve collection and analysis of the code snippets executed in the online IDE, responses to the questionnaire, and basic demographics.
             We may also collect your email address to send you further information about receiving the compensation for your participation (only if you have opted in).
             All responses will be aggregated prior to analysis and results published as to observations and trends.
             We will retain as long as we need to analyze survey results.
             A cookie is a small text file stored by a web server on a computer or mobile device.
             We use persistent cookies to collect your information which means they need to be manually deleted on your browser.
             We will delete the survey website meaning the cookies will become obsolete once we have received all survey responses.
             Your data will be held securely in accordance with Nokia’s policies and procedures.
             Your rights in relation to your personal data are indicated here: <a href="https://www.nokia.com/privacy/" target="_blank">https://www.nokia.com/privacy/</a>.
          </p>
          <p>
            If you wish to raise any queries or concerns about Nokia's use of data, please contact the sender of this survey.
          </p>
          <p>18 March 2021</p>
        </Col>
      </Row>
    </Container>
  );
}
