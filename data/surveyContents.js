import { welcomeSurveyJson } from "./welcomeSurveyJson";
import { demographicsJson } from "./demographicsJson";
import { asymEncJson } from "./asymEncJson";
import { secureSecretJson } from "./secureSecretJson";
import { symEncJson } from "./symEncJson";
import { storeMeasurementJson } from "./storeMeasurementJson";
import { remoteAttestationJson } from "./remoteAttestationJson";
import { getExitJson } from "./exitJson";

const { NEXT_PUBLIC_SURVEY_TYPE } = process.env;

const asymEncTask = {
  key: "asymEnc",
  sectionTitle: "Task 1",
  jsonFile: asymEncJson,
  taskName: "asymEncTask",
  ideEnabled: true,
  navigationDisabled: true,
};

const symEncTask = {
  key: "symEnc",
  sectionTitle: "Task 1",
  jsonFile: symEncJson,
  taskName: "symEncTask",
  ideEnabled: true,
  navigationDisabled: true,
};

var encryptionTask = asymEncTask;
if (NEXT_PUBLIC_SURVEY_TYPE == "asymmetric") {
  encryptionTask = asymEncTask;
} else if (NEXT_PUBLIC_SURVEY_TYPE == "symmetric") {
  encryptionTask = symEncTask;
}

export function getSurveyContents(selectedLibrary) {
  return [
    {
      key: "welcome",
      sectionTitle: "Welcome!",
      jsonFile: welcomeSurveyJson,
      taskName: "welcomeTask",
      ideEnabled: false,
      navigationDisabled: false,
    },
    {
      key: "demographics",
      sectionTitle: "Demographics",
      jsonFile: demographicsJson,
      taskName: "demographicsTask",
      ideEnabled: false,
      navigationDisabled: true,
    },
    encryptionTask,
    {
      key: "storeMeasurement",
      sectionTitle: "Task 2",
      jsonFile: storeMeasurementJson,
      taskName: "storeMeasurementTask",
      ideEnabled: true,
      navigationDisabled: true,
    },
    {
      key: "secureSecret",
      sectionTitle: "Task 3",
      jsonFile: secureSecretJson,
      taskName: "secureSecretTask",
      ideEnabled: true,
      navigationDisabled: true,
    },
    {
      key: "remoteAttestation",
      sectionTitle: "Task 4",
      jsonFile: remoteAttestationJson,
      taskName: "remoteAttestationTask",
      ideEnabled: true,
      navigationDisabled: true,
    },
    {
      key: "exit",
      sectionTitle: "Final Questions",
      jsonFile: getExitJson(selectedLibrary),
      taskName: "exitTask",
      ideEnabled: false,
      navigationDisabled: true,
    },
  ];
}
