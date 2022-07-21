export function getExitJson(selectedLibrary) {
  return {
    title: "Final questions",
    completedHtml: "Thank you for completing our survey!",
    pages: [
      {
        name: "Generic",
        elements: [
          {
            type: "radiogroup",
            name: "AssignedLib",
            title: "What library was assigned to you?",
            isRequired: true,
            choices: ["tpm2-tools", "IBM TSS", "go-tpm", "WolfTPM"],
          },
          {
            type: "radiogroup",
            name: "AnyOtherLib",
            title: "Did you use any other library?",
            isRequired: true,
            choices: ["Yes", "No"],
          },
          {
            type: "panel",
            name: "OtherLibChosenPanel",
            elements: [
              {
                type: "radiogroup",
                name: "ChosenLib",
                title: "Which other library did you choose?",
                isRequired: true,
                choices: ["tpm2-tools", "IBM TSS", "go-tpm", "WolfTPM"],
                choicesVisibleIf: "{item}!={AssignedLib}",
              },
              {
                type: "checkbox",
                name: "WhyUsedMoreLib",
                visibleIf: "{ChosenLib} notempty and {AssignedLib} notempty",
                title: "What made you use libraries other than {AssignedLib}?",
                description:
                  "Please select all reasons that are applicable for using other libraries or switching from {AssignedLib} to {ChosenLib}",
                isRequired: true,
                choices: [
                  {
                    value: "ComfortableWithOtherLib",
                    text:
                      "I am more comfortable (or proficient) with {ChosenLib} than {AssignedLib}",
                  },
                  {
                    value: "DidntKnowHowToDo ",
                    text: "I did not know how to do some of the tasks using {AssignedLib}",
                  },
                  {
                    value: "NoFunctionAssignedLib ",
                    text:
                      "{AssignedLib} did not support the functionality required by some of the tasks",
                  },
                ],
                hasOther: true,
                otherText: "Other (please describe)",
              },
            ],
            visibleIf: "{AnyOtherLib} = 'Yes'",
          },
          {
            type: "radiogroup",
            name: "ReferencesUsed",
            title:
              "In general, which of the following do you refer to for your regular TPM-related activities?",
            description:
              "Official resources (TCG standards, official library documentation);\n\
              Additional resources (mailing lists, forums, blogs, workshop materials, personal notes, others)",
            isRequired: true,
            choices: [
              "Official resources only",
              "Additional resources only ",
              "Mostly official resources, but sometimes additional resources ",
              "Mostly additional resources, but sometimes official resources",
            ],
          },
        ],
      },
      {
        name: "SA6Page",
        elements: [
          {
            type: "panel",
            name: "SA6Panel",
            elements: [
              {
                type: "matrix",
                name: "SA6Questions",
                title:
                  'In each case, make your choice in terms of how you feel "right now", not what you have felt in the past or would like to feel.',
                description:
                  "Please indicate the degree to which you agree or disagree with each statement. There are no wrong answers",
                hideNumber: true,
                isRequired: true,
                columns: [
                  "Strongly disagree",
                  "Disagree ",
                  "Neutral",
                  "Agree ",
                  "Strongly agree",
                ],
                rows: [
                  {
                    value: "SA1",
                    text:
                      "I seek out opportunities to learn about security measures that are relevant to me.",
                  },
                  {
                    value: "SA2",
                    text:
                      "I often am interested in articles about security threats.",
                  },
                  {
                    value: "SA3",
                    text:
                      "Generally, I diligently follow a routine about security practices.",
                  },
                  {
                    value: "SA4",
                    text:
                      "I am extremely motivated to take all the steps needed to keep my online data and accounts safe.",
                  },
                  {
                    value: "SA5",
                    text:
                      "I am extremely knowledgeable about all the steps needed to keep my online data and accounts safe.",
                  },
                  {
                    value: "SA6",
                    text:
                      "I always pay attention to experts’ advice about the steps I need to take to keep my online data and accounts safe.",
                  },
                ],
                isAllRowRequired: true,
              },
            ],
            title: "Tell us more about your security routines",
            description:
              "Each statement below describes how a person might feel about the use of security measures. Examples of security measures are laptop or tablet passwords, spam email reporting tools, software updates, secure web browsers, fingerprint ID and anti-virus software.",
          },
        ],
      },
      {
        name: "AssignedLibQuestions",
        elements: [
          {
            type: "expression",
            name: "AssignedLibHeading",
            title: "Tell us more about your experience with {AssignedLib}",
            hideNumber: true,
          },
          {
            type: "radiogroup",
            name: "DidYouUseAssignedLib",
            visibleIf: "{AnyOtherLib} = 'Yes'",
            title:
              "Did you use {AssignedLib} for attempting some (or all) the tasks in this study?",
            description:
              '(Please select "No" if you have not used {AssignedLib} at all)',
            isRequired: true,
            choices: ["Yes", "No"],
          },
          {
            type: "panel",
            name: "AssignedLibUsedPanel",
            elements: [
              {
                type: "matrix",
                name: "SUS",
                title:
                  "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
                isRequired: true,
                columns: [
                  "Strongly disagree",
                  "Disagree",
                  "Neutral",
                  "Agree",
                  "Strongly agree",
                ],
                rows: [
                  {
                    value: "SUS1 ",
                    text:
                      " I think that I would like to use {AssignedLib} frequently",
                  },
                  {
                    value: "SUS2 ",
                    text: " I found {AssignedLib} unnecessarily complex",
                  },
                  {
                    value: "SUS3 ",
                    text: " I thought {AssignedLib} was easy to use",
                  },
                  {
                    value: "SUS4 ",
                    text:
                      " I think that I would need the support of a technical person to be able to use {AssignedLib}",
                  },
                  {
                    value: "SUS5 ",
                    text:
                      " I found the various functions in {AssignedLib} were well-integrated",
                  },
                  {
                    value: "SUS6 ",
                    text:
                      " I thought there was too much inconsistency in {AssignedLib}",
                  },
                  {
                    value: "SUS7 ",
                    text:
                      " I would imagine that most people would learn to use {AssignedLib} very quickly",
                  },
                  {
                    value: "SUS8 ",
                    text:
                      " I found {AssignedLib} very cumbersome (awkward) to use",
                  },
                  {
                    value: "SUS9 ",
                    text: " I felt very confident using {AssignedLib}",
                  },
                  {
                    value: "SUS10 ",
                    text:
                      "I needed to learn a lot of things before I could get going with {AssignedLib}",
                  },
                ],
              },
              {
                type: "rating",
                name: "LibFriendliness",
                title:
                  "Overall, I would rate the user-friendliness of {AssignedLib} as",
                isRequired: true,
                rateValues: [
                  "Worst imaginable",
                  "Awful",
                  "Poor",
                  "Fair",
                  "Good",
                  "Excellent",
                  "Best imaginable",
                ],
              },
              {
                type: "rating",
                name: "LibDocSatisfaction",
                title:
                  "How satisfied are you with the {AssignedLib} library documentation?",
                isRequired: true,
                rateValues: [
                  "Not at all satisfied",
                  "Slightly satisfied",
                  "Moderately satisfied",
                  "Very satisfied",
                  "Extremely satisfied",
                ],
              },
              {
                type: "rating",
                name: "LibDocQuality",
                title:
                  "How do you rate the quality of the {AssignedLib} library documentation?",
                isRequired: true,
                rateValues: [
                  "Very poor",
                  "Poor",
                  "Acceptable",
                  "Good",
                  "Very good",
                ],
              },
              {
                type: "rating",
                name: "FrequencyOfAdditionalResources",
                title: "How frequently do you refer to additional resources?",
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
                type: "checkbox",
                name: "AssignedLibOfficialResourceLacks",
                title:
                  "If you refer to additional resources, what do you think is the reason? Please check all that apply.",
                isRequired: true,
                choices: [
                  {
                    value: "ALDocNotClear",
                    text: "{AssignedLib} library documentation is not clear",
                  },
                  {
                    value: "ALDocNotComplete",
                    text:
                      "{AssignedLib} library documentation is incomplete/work-in-progress",
                  },
                  {
                    value: "ALDocIsStandard",
                    text:
                      "{AssignedLib} library documentation does not add much beyond what is already there in the standards",
                  },
                  {
                    value: "ALDocNoSnippets",
                    text:
                      "There are no examples (code snippets or pseudo-code) of common use cases",
                  },
                  {
                    value: "ALDocNoBackground",
                    text:
                      "Background information (e.g., TPM or programming concepts) is missing",
                  },
                ],
              },
              {
                type: "comment",
                name: "AssignedLibOpenComments",
                title:
                  "Is there anything else you want to tell us about {AssignedLib}?",
              },
            ],
            visibleIf: "{DidYouUseAssignedLib} = 'Yes' or {AnyOtherLib} = 'No'",
            isRequired: true,
          },
        ],
      },
      {
        name: "ChosenLibQuestions",
        elements: [
          {
            type: "expression",
            name: "OtherLibQuestions",
            title: "Tell us more about your experience with {ChosenLib}",
            hideNumber: true,
          },
          {
            type: "panel",
            name: "panel1",
            elements: [
              {
                type: "matrix",
                name: "CLSUS",
                title:
                  "Please rate your agreement with the following questions on a scale from ‘strongly disagree’ to ‘strongly agree’.",
                isRequired: true,
                columns: [
                  "Strongly disagree",
                  "Disagree",
                  "Neutral",
                  "Agree",
                  "Strongly agree",
                ],
                rows: [
                  {
                    value: "CLSUS1 ",
                    text:
                      " I think that I would like to use {ChosenLib} frequently",
                  },
                  {
                    value: "CLSUS2 ",
                    text: " I found {ChosenLib} unnecessarily complex",
                  },
                  {
                    value: "CLSUS3 ",
                    text: " I thought {ChosenLib} was easy to use",
                  },
                  {
                    value: "CLSUS4 ",
                    text:
                      " I think that I would need the support of a technical person to be able to use {ChosenLib}",
                  },
                  {
                    value: "CLSUS5 ",
                    text:
                      " I found the various functions in {ChosenLib} were well-integrated",
                  },
                  {
                    value: "CLSUS6 ",
                    text:
                      " I thought there was too much inconsistency in {ChosenLib}",
                  },
                  {
                    value: "CLSUS7 ",
                    text:
                      " I would imagine that most people would learn to use {ChosenLib} very quickly",
                  },
                  {
                    value: "CLSUS8 ",
                    text:
                      " I found {ChosenLib} very cumbersome (awkward) to use",
                  },
                  {
                    value: "CLSUS9 ",
                    text: " I felt very confident using {ChosenLib}",
                  },
                  {
                    value: "CLSUS10 ",
                    text:
                      "I needed to learn a lot of things before I could get going with {ChosenLib}",
                  },
                ],
              },
              {
                type: "rating",
                name: "ChosenLibFriendliness",
                title:
                  "Overall, I would rate the user-friendliness of {ChosenLib} as",
                isRequired: true,
                rateValues: [
                  "Worst imaginable",
                  "Awful",
                  "Poor",
                  "Fair",
                  "Good",
                  "Excellent",
                  "Best imaginable",
                ],
              },
              {
                type: "rating",
                name: "ChosenLibDocSatisfaction",
                title:
                  "How satisfied are you with the {ChosenLib} library documentation?",
                isRequired: true,
                rateValues: [
                  "Not at all satisfied",
                  "Slightly satisfied",
                  "Moderately satisfied",
                  "Very satisfied",
                  "Extremely satisfied",
                ],
              },
              {
                type: "rating",
                name: "ChosenLibDocQuality",
                title:
                  "How do you rate the quality of the {ChosenLib} library documentation?",
                isRequired: true,
                rateValues: [
                  "Very poor",
                  "Poor",
                  "Acceptable",
                  "Good",
                  "Very good",
                ],
              },
              {
                type: "rating",
                name: "ChosenLibFrequencyOfAdditionalResources",
                title: "How frequently do you refer to additional resources?",
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
                type: "checkbox",
                name: "ChosenLibOfficialResourceLacks",
                title:
                  "If you refer to additional resources, what do you think is the reason? Please check all that apply.",
                isRequired: true,
                choices: [
                  {
                    value: "CLDocNotClear",
                    text: "{ChosenLib} library documentation is not clear",
                  },
                  {
                    value: "CLDocNotComplete",
                    text:
                      "{ChosenLib} library documentation is incomplete/work-in-progress",
                  },
                  {
                    value: "CLDocIsStandard",
                    text:
                      "{ChosenLib} library documentation does not add much beyond what is already there in the standards",
                  },
                  {
                    value: "CLDocNoSnippets",
                    text:
                      "There are no examples (code snippets or pseudo-code) of common use cases",
                  },
                  {
                    value: "CLDocNoBackground",
                    text:
                      "Background information (e.g., TPM or programming concepts) is missing",
                  },
                ],
              },
              {
                type: "comment",
                name: "ChosenLibOpenComments",
                title:
                  "Is there anything else you want to tell us about {ChosenLib}?",
              },
            ],
          },
        ],
        visibleIf: "{AnyOtherLib} = 'Yes'",
      },
    ],
    cookieName: "ExitSection",
    showNavigationButtons: "both",
    showQuestionNumbers: "onPage",
    showProgressBar: "top",
    pagePrevText: "Previous",
    pageNextText: "Next",
    completeText: "Submit responses",
    previewText: "Preview",
    editText: "Edit",
  };
}
