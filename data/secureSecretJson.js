export var secureSecretJson = {
  title: "Task 3: Securing Secrets",
  completedHtml: "Thank you for completing task 3!",
  pages: [
    {
      name: "Task Description",
      elements: [
        {
          type: "html",
          name: "SecureSecretDesc",
          html:
            '<h3>Step 3a: Store secret in the TPM</h3>\n\
             <p>Your task is to store the secret string <code>"workingWithTPMisAwesome"</code> securely in the TPM.</p>\n\
             <p>The PCR allocation is as follows: </p>\n\
             <table class="table table-striped table-bordered table-sm" style="width: auto;">\n\
               <thead>\n\
                 <tr>\n\
                   <th>PCR</th>\n\
                   <th>Meaning</th>\n\
                 </tr>\n\
               </thead>\n\
               <tbody>\n\
                 <tr>\n\
                   <td>PCR 0</td>\n\
                   <td>Core Root of Trust for Measurement</td>\n\
                 </tr>\n\
                 <tr>\n\
                   <td>PCR 1</td>\n\
                   <td>Firmware</td>\n\
                 </tr>\n\
                 <tr>\n\
                   <td>PCR 2</td>\n\
                   <td>Kernel</td>\n\
                 </tr>\n\
                 <tr>\n\
                   <td>PCR 3</td>\n\
                   <td>Config</td>\n\
                 </tr>\n\
                 <tr>\n\
                   <td>PCR 4-23</td>\n\
                   <td>Unused</td>\n\
                 </tr>\n\
               </tbody>\n\
             </table>\n\
             <p>While storing in the TPM, make sure that the following conditions are met:  </p>\n\
             <ul>\n\
               <li>The secret should only be readable when the firmware has not been modified  </li>\n\
               <li>The secret should not be modifiable after it has been written into the TPM </li>\n\
             </ul>\n\
             <h3>Step 3b: Read secret</h3>\n\
             <p>Read the secret (stored in step 3a) from the TPM. </p>\n\
             <p>This is done to ensure the secret is stored correctly. </p>\n\
             <p>Please make a note if you encounter any error(s). </p>',
        },
      ],
    },
    {
      name: "Questionnaire",
      elements: [
        {
          type: "panel",
          name: "SecureSecretPerceptionPanel1",
          elements: [
            {
              type: "rating",
              name: "SecureSecretFamiliarity",
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
              name: "SecureSecretFrequency",
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
              name: "SecureSecretDifficulty",
              title: "How difficult was this task?",
              isRequired: true,
              rateValues: [
                "Very difficult",
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
          name: "SecureSecretErrorPanel",
          elements: [
            {
              type: "radiogroup",
              name: "SecureSecretErrors",
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
              name: "SecureSecretStatement",
              visibleIf: "{SecureSecretErrors} = 'Yes'",
              title:
                "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
              hideNumber: true,
            },
            {
              type: "rating",
              name: "SecureSecretHelpfulErrors",
              visibleIf: "{SecureSecretErrors} = 'Yes'",
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
              name: "SecureSecretErrorSecure",
              visibleIf: "{SecureSecretErrors} = 'Yes'",
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
          name: "SecureSecretCompletionPanel",
          elements: [
            {
              type: "radiogroup",
              name: "SecureSecretCompleted",
              title: "Did you manage to complete all the steps in this task?",
              isRequired: true,
              choices: ["Yes", "No"],
            },
            {
              type: "checkbox",
              name: "SecureSecretReasonForNotCompleting",
              visibleIf: "{SecureSecretCompleted} = 'No'",
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
        },
        {
          type: "panel",
          name: "SecureSecretPerceptionPanel2",
          elements: [
            {
              type: "rating",
              name: "SecureSecretCorrect",
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
              name: "SecureSecretSecure",
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
          visibleIf: "{SecureSecretCompleted} = 'Yes'",
          title:
            "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
        },
        {
          type: "panel",
          name: "SecureSecretResourcePanel",
          elements: [
            {
              type: "expression",
              name: "SecureSecretResourcesDesc",
              title:
                "Did you refer to any of the following resources while completing the task? Please check all that apply.",
            },
            {
              type: "checkbox",
              name: "SecureSecretOfficialResources",
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
              name: "SecureSecretAddtnResources",
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
            "{SecureSecretCompleted} = 'Yes' or {SecureSecretReasonForNotCompleting} anyof ['I did not know how to do it', 'I could not find suitable resources to help me complete the task']",
        },
        {
          type: "comment",
          name: "SecureSecretOpenComment",
          visibleIf: "{SecureSecretCompleted} = 'Yes'",
          title:
            "Did you observe anything interesting when completing the task? If yes, please describe it.",
        },
      ],
    },
  ],
  cookieName: "SecuringSecretsTaskSection",
  showNavigationButtons: "both",
  showQuestionNumbers: "onPage",
  showProgressBar: "top",
  pagePrevText: "Previous",
  pageNextText: "Next",
  completeText: "Submit responses and go to next task",
  previewText: "Preview",
  editText: "Edit",
};
