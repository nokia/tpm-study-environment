import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import TpmSurvey from "./tpmSurvey";

import { getSurveyContents } from "../data/surveyContents";
import { memo, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Transition from "react-transition-group/Transition";
import { languageNameToId } from "../data/languageConversion";
import { useCookies } from "react-cookie";
import { settings } from "survey-react";

function SurveyContent({ selectedLibrary }) {
  const surveys = getSurveyContents(selectedLibrary);
  const selectedLibraryId = languageNameToId[selectedLibrary];
  const keys = surveys.map((survey) => survey.key);
  const [key, setKey] = useState(keys[0]);
  const initialVisibilities = {};
  surveys.forEach(
    (survey) => (initialVisibilities[survey.key] = survey.navigationDisabled)
  );
  const [surveyVisibility, setSurveyVisibility] = useState(initialVisibilities);
  const [surveyCookies, setSurveyCookies] = useCookies(
    surveys.map((survey) => survey.jsonFile.cookieName)
  );

  function storeCurrentPage(newKey) {
    const pageStorageName = "currentPage";
    window.localStorage.setItem(pageStorageName, newKey);
  }

  useEffect(() => {
    const pageStorageName = "currentPage";
    const currentPage = window.localStorage.getItem(pageStorageName) || key;
    setKey(currentPage);
    const newVisibility = surveyVisibility;
    surveys.forEach((survey, index) => {
      if (surveyCookies[survey.jsonFile.cookieName]) {
        newVisibility[survey.key] = false;
        if (survey.jsonFile.cookieName != "ExitSection") {
          newVisibility[surveys[index + 1]["key"]] = false;
        }
      }
    });
    setSurveyVisibility(newVisibility);
  }, []);

  const Quick = (props) => (
    <Transition {...props} timeout={1}>
      {props.children}
    </Transition>
  );

  return (
    <Container fluid>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={key}
        id="navigation-tabs"
        activeKey={key}
        onSelect={(k) => {
          setKey(k);
          storeCurrentPage(k);
        }}
        transition={Quick}
        mountOnEnter={true}
        unmountOnExit={false}
      >
        <Row>
          <Col sm={2}>
            <Nav variant="pills" justify className="flex-column">
              {surveys.map((survey) => (
                <Nav.Item key={survey.key}>
                  <Nav.Link
                    eventKey={survey.key}
                    disabled={surveyVisibility[survey.key]}
                  >
                    {survey.sectionTitle}{" "}
                    {!surveyCookies[survey.jsonFile.cookieName] ? (
                      ""
                    ) : (
                      <FontAwesomeIcon icon={faCheckCircle} />
                    )}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              {surveys.map((survey) => (
                <Tab.Pane key={survey.key} eventKey={survey.key}>
                  <Row>
                    <TpmSurvey
                      surveyJson={survey.jsonFile}
                      currentKey={survey.key}
                      keys={keys}
                      clientId={survey.key}
                      storeCurrentPage={storeCurrentPage}
                      setKey={setKey}
                      sectionTitle={survey.sectionTitle}
                      taskName={survey.taskName}
                      ideEnabled={survey.ideEnabled}
                      selectedLibraryId={selectedLibraryId}
                      surveyVisibility={surveyVisibility}
                      setSurveyVisibility={setSurveyVisibility}
                    />
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default memo(SurveyContent);
