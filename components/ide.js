import "survey-react/survey.css";

import { Row, Container, Col } from "react-bootstrap";
import { memo } from "react";

function IDE({ visible, taskName, selectedLibraryId }) {
  const { NEXT_PUBLIC_SERVER_NAME } = process.env;
  //const iframeUrl = `https://${NEXT_PUBLIC_SERVER_NAME}.usable-tpm.site:5000?task=${taskName}&selectedLibrary=${selectedLibraryId}`;
  const iframeUrl = `http://localhost:3000?task=${taskName}&selectedLibrary=${selectedLibraryId}`;

  return (
    <Col sm={12}>
      {visible && (
        <div>
          <p>
            <b>Note about the IDE</b>
          </p>
          <p>
            Your current working directory has a subdirectory called{" "}
            <code>./task_files</code>. Please be sure to create files in that
            subdirectory, if you want any files to be persisted between runs.
          </p>
          <iframe
            src={iframeUrl}
            style={{
              position: "relative",
              top: "0px",
              width: "100%",
              height: "90vh",
            }}
            id={`iframe-${taskName}`}
          />
        </div>
      )}
    </Col>
  );
}

export default memo(IDE);
