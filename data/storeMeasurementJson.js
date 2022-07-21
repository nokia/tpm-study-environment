export var storeMeasurementJson = {
  title: "Task 2: Storing Measurements",
  completedHtml: "Thank you for completing task 2!",
  pages: [
    {
      name: "Task Description",
      elements: [
        {
          type: "panel",
          name: "panel4",
          elements: [
            {
              type: "html",
              name: "StoreMeasurementDesc",
              html:
                "<h3> Step 2a: Measure and store in PCRs</h3>\n\
                <p>Your task is to measure the file <code>./task_files/store_measurements/config.json</code> and store the measurements using suitable PCRs.</p>\n\
                <p>The measurements stored in the PCRs are used in remote attestation to validate that the host machine has the correct configuration (based on <code>config.json</code>).  </p>\n\
                <p>When storing the measurements, keep in mind the following: </p>\n\
                <ul>\n\
                  <li>The attestation server may request the measurements from any PCR bank.  </li>\n\
                </ul>\n\
                <h3>Step 2b: Read measurements</h3>\n\
                <p>Read the contents of the PCRs (extended in step 2a). </p>\n\
                <p>This is done to ensure that the measurements are recorded correctly. </p>\n\
                <p>Please make a note if you encounter any error(s). </p>",
            },
          ],
        },
      ],
    },
    {
      name: "Questionnaire",
      elements: [
        {
          type: "panel",
          name: "StoreMeasurementPerceptionPanel1",
          elements: [
            {
              type: "rating",
              name: "StoreMeasurementFamiliarity",
              title:
                "How familiar are you with the task that you have just attempted?",
              isRequired: true,
              rateValues: [
                "Not at all familiar",
                "Slightly familiar",
                "Somewhat familiar",
                "Moderately familiar",
                "Extremely familiar",
              ],
            },
            {
              type: "rating",
              name: "StoreMeasurementFrequency",
              title: "How frequently have you done tasks like this one?",
              isRequired: true,
              rateValues: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Frequently",
              ],
            },
            {
              type: "rating",
              name: "StoreMeasurementDifficulty",
              title: "How difficult was this task?",
              isRequired: true,
              rateValues: [
                {
                  value: "Very difficult",
                  text: "Very difficult",
                },
                {
                  value: "Difficult",
                  text: "Difficult",
                },
                {
                  value: "Neutral",
                  text: "Neutral",
                },
                {
                  value: "Easy",
                  text: "Easy",
                },
                {
                  value: "Very easy",
                  text: "Very easy",
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "StoreMeasurementErrorPanel",
          elements: [
            {
              type: "radiogroup",
              name: "StoreMeasurementErrors",
              title: "Did you encounter any error or warning messages?",
              isRequired: true,
              choices: [
                {
                  value: "Yes",
                  text: "Yes",
                },
                {
                  value: "No",
                  text: "No",
                },
              ],
            },
            {
              type: "expression",
              name: "StoreMeasurementStatement",
              visibleIf: "{StoreMeasurementErrors} = 'Yes'",
              title:
                "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
              hideNumber: true,
            },
            {
              type: "rating",
              name: "StoreMeasurementHelpfulErrors",
              visibleIf: "{StoreMeasurementErrors} = 'Yes'",
              title:
                "The error or warning messages were helpful in improving my answers",
              isRequired: true,
              rateValues: [
                "Strongly disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly agree",
              ],
            },
            {
              type: "rating",
              name: "StoreMeasurementErrorSecure",
              visibleIf: "{StoreMeasurementErrors} = 'Yes'",
              title:
                "The error or warning messages were helpful in making secure choices, e.g., while selecting parameters for specific library functions.",
              isRequired: true,
              rateValues: [
                "Strongly disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly agree",
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "StoreMeasurementCompletionPanel",
          elements: [
            {
              type: "radiogroup",
              name: "StoreMeasurementCompleted",
              title: "Did you manage to complete all the steps in this task?",
              isRequired: true,
              choices: ["Yes", "No"],
            },
            {
              type: "checkbox",
              name: "StoreMeasurementReasonForNotCompleting",
              visibleIf: "{StoreMeasurementCompleted} = 'No'",
              title:
                "Why do you think you could not complete the all the steps? Please check all that apply.",
              choices: [
                "I did not know how to do it",
                "I could not find suitable resources to help me complete the task",
                "I tried and gave up midway because the steps were too difficult or time-consuming",
                "The description was not understandable",
                "The task did not interest me",
              ],
              hasOther: true,
              otherText: "Other (please describe)",
            },
          ],
        },
        {
          type: "panel",
          name: "StoreMeasurementPerceptionPanel2",
          elements: [
            {
              type: "rating",
              name: "StoreMeasurementCorrect",
              title: "I think my code snippet for this task is correct.",
              isRequired: true,
              rateValues: [
                "Strongly disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly agree",
              ],
            },
            {
              type: "rating",
              name: "StoreMeasurementSecure",
              title: "I think my code snippet for this task is secure",
              isRequired: true,
              rateValues: [
                "Strongly disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly agree",
              ],
            },
          ],
          visibleIf: "{StoreMeasurementCompleted} = 'Yes'",
          title:
            "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
        },
        {
          type: "panel",
          name: "StoreMeasurementResourcePanel",
          elements: [
            {
              type: "expression",
              name: "StoreMeasurementResourcesDesc",
              title:
                "Did you refer to any of the following resources while completing the task? Please check all that apply.",
            },
            {
              type: "checkbox",
              name: "StoreMeasurementOfficialResources",
              title: "Official resources",
              hideNumber: true,
              isRequired: true,
              choices: [
                {
                  value: "Library",
                  text: "Official library documentation",
                },
                {
                  value: "Standard",
                  text: "TCG Technical standards",
                },
                {
                  value: "NoOfficialResource",
                  text: "I did not use official resources",
                },
              ],
            },
            {
              type: "checkbox",
              name: "StoreMeasurementAddtnResources",
              title: "Additional resources",
              hideNumber: true,
              isRequired: true,
              choices: [
                {
                  value: "OfficialMailingList",
                  text:
                    "Mailing lists or community forums of the library that you used",
                },
                {
                  value: "TPForums",
                  text:
                    "Third-party/generic TPM forums (e.g., stack overflow, social media groups)",
                },
                {
                  value: "Blogs",
                  text: "Blogs, walk-through and hands-on guides",
                },
                {
                  value: "Training",
                  text: "Training and workshop materials",
                },
                {
                  value: "FieldNote",
                  text: "Personal notes ",
                },
                {
                  value: "NoAddtnSource",
                  text: "I did not use additional resources",
                },
              ],
              hasOther: true,
              otherText: "Others (please specify)",
            },
          ],
          visibleIf:
            "{StoreMeasurementCompleted} = 'Yes' or {StoreMeasurementReasonForNotCompleting} anyof ['I did not know how to do it', 'I could not find suitable resources to help me complete the task']",
        },
        {
          type: "comment",
          name: "StoreMeasurementOpenComment",
          visibleIf: "{StoreMeasurementCompleted} = 'Yes'",
          title:
            "Did you observe anything interesting when completing the task? If yes, please describe it.",
        },
      ],
    },
  ],
  cookieName: "StoringMeasurementsTaskSection",
  showNavigationButtons: "both",
  showQuestionNumbers: "onPage",
  showProgressBar: "top",
  pagePrevText: "Previous",
  pageNextText: "Next",
  completeText: "Submit responses and go to next task",
  previewText: "Preview",
  editText: "Edit",
};
