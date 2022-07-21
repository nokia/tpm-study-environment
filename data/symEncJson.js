export var symEncJson = {
  title: "Task 1: Symmetric Encryption",
  completedHtml: "Thank you for completing task 1!",
  pages: [
    {
      name: "Task Description",
      elements: [
        {
          type: "html",
          name: "SymEncDesc",
          html:
            '<h3>Step 1a: Create key</h3>\n\
             <p>Your task is to create a password-protected symmetric key of your choice using the TPM.</p>\n\
             <p>While creating the key, keep in mind the following:</p>\n\
             <ul>\n\
               <li>You may have to repeatedly use this key for encryption and decryption</li>\n\
             </ul>\n\
             <h3>Step 1b: Encrypt</h3>\n\
             <p>Use the key you generated in step 1a to encrypt the following:</p>\n\
             <ul>\n\
               <li>The string <strong>"<em>TPMDevelopmentMakesMeFeelGreat</em>"</strong></li>\n\
               <li><code>./task_files/sym_encryption/file2.txt</code></li>\n\
             </ul>\n\
             <h3>Step 1c: Decrypt</h3>\n\
             <p>Now, using the same key, decrypt the string <enc.string> from step 1b.</p>\n\
             <p>Also, decrypt the file <enc.file>.</p>\n\
             <h3>Step 1d: Cleaning the environment <b style="color:red">(Optional step)</b></h3>\n\
             <p>Other users may be using this environment in the future.</p>\n\
             <p>If there is any cleanup code you would like to add, you can do so now.</p>',
        },
      ],
    },
    {
      name: "Questionnaire",
      elements: [
        {
          type: "panel",
          name: "SymEncPerceptionPanel1",
          elements: [
            {
              type: "rating",
              name: "SymEncFamiliarity",
              title:
                "How familiar are you with the task that you have just attempted",
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
              name: "SymEncFrequency",
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
              name: "SymEncDifficulty",
              title: "How difficult was this task?",
              isRequired: true,
              rateValues: [
                "Very difficult",
                "Difficult",
                "Neutral",
                "Easy",
                "Very easy",
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "SymEncErrorPanel",
          elements: [
            {
              type: "radiogroup",
              name: "SymEncErrors",
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
              name: "SymEncStatement",
              visibleIf: "{SymEncErrors} = 'Yes'",
              title:
                "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
              hideNumber: true,
            },
            {
              type: "rating",
              name: "SymEncHelpfulErrors",
              visibleIf: "{SymEncErrors} = 'Yes'",
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
              name: "SymEncErrorSecure",
              visibleIf: "{SymEncErrors} = 'Yes'",
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
          name: "SymEncCompletionPanel",
          elements: [
            {
              type: "radiogroup",
              name: "SymEncCompleted",
              title: "Did you manage to complete all the steps in this task?",
              isRequired: true,
              choices: ["Yes", "No"],
            },
            {
              type: "checkbox",
              name: "SymEncReasonForNotCompleting",
              visibleIf: "{SymEncCompleted} = 'No'",
              title:
                "Why do you think you could not complete the all the steps? Please check all that apply.",
              isRequired: true,
              choices: [
                "I did not know how to do it",
                "I could not find suitable resources to help me complete the task",
                "I tried and gave up midway because the steps were too difficult or time-consuming",
                "The description was not understandable",
                "The task did not interest me ",
              ],
              hasOther: true,
              otherText: "Other (please describe)",
            },
          ],
        },
        {
          type: "panel",
          name: "SymEncPerceptionPanel2",
          elements: [
            {
              type: "rating",
              name: "SymEncCorrect",
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
              name: "SymEncSecure",
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
          visibleIf: "{SymEncCompleted} = 'Yes'",
          title:
            "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
        },
        {
          type: "panel",
          name: "SymEncResourcePanel",
          elements: [
            {
              type: "expression",
              name: "SymEncResourcesDesc",
              title:
                "Did you refer to any of the following resources while completing the task? Please check all that apply.",
            },
            {
              type: "checkbox",
              name: "SymEncOfficialResources",
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
              name: "SymEncAddtnResources",
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
            "{SymEncCompleted} = 'Yes' or {SymEncReasonForNotCompleting} anyof ['I did not know how to do it', 'I could not find suitable resources to help me complete the task']",
        },
        {
          type: "comment",
          name: "SymEncOpenComment",
          visibleIf: "{SymEncCompleted} = 'Yes'",
          title:
            "Did you observe anything interesting when completing the task? If yes, please describe it.",
        },
      ],
    },
  ],
  cookieName: "SymmetricEncryptionTaskSection",
  showNavigationButtons: "both",
  showQuestionNumbers: "onPage",
  showProgressBar: "top",
  pagePrevText: "Previous",
  pageNextText: "Next",
  completeText: "Submit responses and go to next task",
  previewText: "Preview",
  editText: "Edit",
};
