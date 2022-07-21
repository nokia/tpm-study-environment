import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Survey from "survey-react";
import "survey-react/survey.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import IDE from "./ide";

export default function TpmSurvey({
  surveyJson,
  currentKey,
  keys,
  clientId,
  storeCurrentPage,
  setKey,
  sectionTitle,
  ideEnabled,
  taskName,
  selectedLibraryId,
  surveyVisibility,
  setSurveyVisibility,
}) {
  var survey = new Survey.Model(surveyJson);
  survey.clientId = clientId;
  const [surveyData, setSurveyData] = useState({});
  const [surveyCookies, setSurveyCookies] = useCookies([survey.cookieName]);
  const [currentPage, setCurrentPage] = useState(0);
  const [startTime, setStartTime] = useState(null);
  survey.data = surveyData;
  survey.currentPageNo = currentPage;

  survey.onAfterRenderSurvey.add((sender, options) => {
    console.log("Setting start time");
    setStartTime(new Date(Date.now()));
  });

  survey.onCurrentPageChanged.add((sender, options) => {
    setCurrentPage(options.newCurrentPage.visibleIndex);
  });

  survey.onComplete.add((sender, options) => {
    console.log("Setting end time");
    const endTime = new Date(Date.now());
    const surveyData = {
      ...sender.data,
      startTime: startTime,
      endTime: endTime,
      timeSpentInSeconds: Math.floor((endTime - startTime) / 1000),
    };
    const res = fetch("/api/submissions", {
      method: "POST",
      body: JSON.stringify(surveyData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => console.log("Complete! " + JSON.stringify(sender.data)));
    if (sender.cookieName) {
      setSurveyCookies(sender.cookieName, true);
    }
    moveToNextTask(currentKey, keys);
  });

  survey.onValueChanged.add((sender, options) => {
    saveStateToLocalStorage(sender);
  });

  function loadStateFromLocalStorage(survey) {
    const storageName = "surveyData";
    var storageSt = window.localStorage.getItem(storageName) || "{}";
    var storageData = JSON.parse(storageSt);
    //Set the loaded data into the survey.
    if (storageData.hasOwnProperty(survey.clientId)) {
      setSurveyData(storageData[survey.clientId]["data"]);
      survey.data = storageData[survey.clientId]["data"];
      survey.currentPageNo = storageData[survey.clientId]["currentPage"];
    }
    survey.render();
  }

  function saveStateToLocalStorage(survey) {
    const dataStorageName = "surveyData";
    var storageSt = window.localStorage.getItem(dataStorageName) || "{}";
    var surveyData = JSON.parse(storageSt);
    if (!surveyData.hasOwnProperty(survey.clientId)) {
      surveyData[survey.clientId] = {};
    }
    surveyData[survey.clientId]["data"] = survey.data;
    surveyData[survey.clientId]["currentPage"] = survey.currentPageNo;
    window.localStorage.setItem(dataStorageName, JSON.stringify(surveyData));
    setSurveyData(survey.data);
    storeCurrentPage(currentKey);
  }

  function moveToNextTask(key, keys) {
    const currentKeyIndex = keys.indexOf(key);
    if (key != "exit") {
      const newKey = keys[currentKeyIndex + 1];
      setKey(keys[currentKeyIndex + 1]);
      storeCurrentPage(keys[currentKeyIndex + 1]);
      const newVisibility = surveyVisibility;
      newVisibility[newKey] = false;
      setSurveyVisibility(newVisibility);
    }
  }

  useEffect(() => {
    loadStateFromLocalStorage(survey);
  }, []);

  const handleClick = () => {
    moveToNextTask(currentKey, keys);
  };

  var surveyComponent;
  if (!surveyCookies[survey.cookieName]) {
    surveyComponent = <Survey.Survey model={survey} />;
  } else if (
    surveyCookies[survey.cookieName] &&
    survey.cookieName == "ExitSection"
  ) {
    surveyComponent = (
      <Card>
        <Card.Header className="sv_header" as="h4">
          Thank you for participating in our study!
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Your answers have been successfully submitted!</p>
            <p>
              {" "}
              If you have selected to be compensated for your efforts in the
              demographics questionnaire, we will contact you at the given email
              address with more information on this topic.
            </p>
            <p>
              {" "}
              After we analyze the results, we will reach out and update you on
              the final results of our study.
            </p>
            <p>
              Please feel free to <Link href="/contact">contact us</Link> if you
              have any further questions, comments or feedback about the study.
              We would be happy to hear about it.{" "}
            </p>
          </Card.Text>
          {/* <Button variant="primary" onClick={handleClick}>
            Go to next section
          </Button> */}
        </Card.Body>
      </Card>
    );
  } else {
    surveyComponent = (
      <Card>
        <Card.Header className="sv_header" as="h4">
          {sectionTitle}
        </Card.Header>
        <Card.Body>
          <Card.Text>Thank you for completing this section!</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Go to next section
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col>{surveyComponent}</Col>
      </Row>
      <Row>
        <IDE
          visible={ideEnabled && currentPage == 0}
          taskName={taskName}
          selectedLibraryId={selectedLibraryId}
        />
      </Row>
    </Container>
  );
}
