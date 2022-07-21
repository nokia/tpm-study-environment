export var asymEncJson = {
  title: "Task 1: Asymmetric encryption",
  completedHtml: "Thank you for completing task 1!",
  pages: [
    {
      name: "Task Description",
      elements: [
        {
          type: "html",
          name: "AsymEncDesc",
          html:
            "<h3>Step 1a: Create key</h3>\n\
            <p>Your task is to create a secure asymmetric key of your choice for encryption purposes (e.g., for encrypting a file on your disk) using the TPM. </p>\n\
            <p>While creating the key, make sure that the following conditions are met: </p>\n\
            <ul>\n\
              <li><p>The key should be usable (exportable) on other devices </p></li>\n\
              <li><p>The key should be available even across reboots </p></li>\n\
            </ul>\n\
            <h3>Step 1b: Encrypt</h3>\n\
            <p>Use the key you created in step 1a to encrypt <code>./task_files/asym_encryption/file.txt</code>.</p>\n\
            <h3>Step 1c: Reboot and decrypt</h3>\n\
            <ul>\n\
              <li><p>First, reboot the environment by clicking the <strong>Reboot TPM</strong> button in the IDE.</p></li>\n\
              <li><p>Then, decrypt the file that you encrypted in step 1b.</p></li>\n\
            </ul><p>If you could not decrypt, please make a note of the errors.</p>",
        },
      ],
    },
    {
      name: "Questionnaire",
      elements: [
        {
          type: "panel",
          name: "AsymEncPerceptionPanel1",
          elements: [
            {
              type: "rating",
              name: "AsymEncFamiliarity",
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
              name: "AsymEncFrequency",
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
              name: "AsymEncDifficulty",
              title: "How difficult was this task?",
              isRequired: true,
              rateValues: [
                "Very Difficult",
                "Difficult",
                "Neutral",
                "Easy",
                "Very Easy",
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "AsymEncErrorPanel",
          elements: [
            {
              type: "radiogroup",
              name: "AsymEncErrors",
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
              name: "AsymEncStatement",
              visibleIf: "{AsymEncErrors} = 'Yes'",
              title:
                "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
              hideNumber: true,
            },
            {
              type: "rating",
              name: "AsymEncHelpfulErrors",
              visibleIf: "{AsymEncErrors} = 'Yes'",
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
              name: "AsymEncErrorSecure",
              visibleIf: "{AsymEncErrors} = 'Yes'",
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
          name: "AsymEncCompletionPanel",
          elements: [
            {
              type: "radiogroup",
              name: "AsymEncCompleted",
              title: "Did you manage to complete all the steps in this task?",
              isRequired: true,
              choices: ["Yes", "No"],
            },
            {
              type: "checkbox",
              name: "AsymEncReasonForNotCompleting",
              visibleIf: "{AsymEncCompleted} = 'No'",
              title:
                "Why do you think you could not complete the all the steps? Please check all that apply.",
              isRequired: true,
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
          isRequired: true,
        },
        {
          type: "panel",
          name: "AsymEncPerceptionPanel2",
          elements: [
            {
              type: "rating",
              name: "AsymEncCorrect",
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
              name: "AsymEncSecure",
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
          visibleIf: "{AsymEncCompleted} = 'Yes'",
          title:
            "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
        },
        {
          type: "panel",
          name: "AsymEncResourcePanel",
          elements: [
            {
              type: "expression",
              name: "AsymEncResourcesDesc",
              title:
                "Did you refer to any of the following resources while completing the task? Please check all that apply.",
            },
            {
              type: "checkbox",
              name: "AsymEncOfficialResources",
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
              name: "AsymEncAddtnResources",
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
                  text: "Personal notes",
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
            "{AsymEncCompleted} = 'Yes' or {AsymEncReasonForNotCompleting} anyof ['I did not know how to do it', 'I could not find suitable resources to help me complete the task']",
        },
        {
          type: "comment",
          name: "AsymEncOpenComment",
          visibleIf: "{AsymEncCompleted} = 'Yes'",
          title:
            "Did you observe anything interesting when completing the task? If yes, please describe it.",
        },
      ],
    },
  ],
  cookieName: "AsymmetricEncryptionTaskSection",
  showNavigationButtons: "both",
  showQuestionNumbers: "onPage",
  showProgressBar: "top",
  pagePrevText: "Previous",
  pageNextText: "Next",
  completeText: "Submit responses and go to next task",
  previewText: "Preview",
  editText: "Edit",
};
