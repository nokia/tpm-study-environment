var { NEXT_PUBLIC_ASSIGNED_LIB } = process.env;

export var demographicsJson = {
  title: "Demographics",
  completedHtml: "Thank you for completing this section!",
  pages: [
    {
      name: "Demographics",
      elements: [
        {
          type: "radiogroup",
          name: "CodingExp",
          title: "How long have you been programming?",
          isRequired: true,
          choices: [
            {
              value: "LT1",
              text: "Less than a year",
            },
            {
              value: "1to2",
              text: "1-2 years",
            },
            {
              value: "2to5",
              text: "2-5 years",
            },
            {
              value: "MT5",
              text: "More than 5 years",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "TpmExp",
          title: "How long have you been programming with TPMs?",
          isRequired: true,
          choices: [
            {
              value: "LT1",
              text: "Less than a year",
            },
            {
              value: "1to2",
              text: "1-2 years",
            },
            {
              value: "2to5",
              text: "2-5 years",
            },
            {
              value: "MT5",
              text: "More than 5 years",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "TpmUsageVenue",
          title: "In which context do you usually deal with TPM related topics?",
          isRequired: true,
          choices: [
            {
              value: "BigComp",
              text: "Big company (> 250 employees)",
            },
            {
              value: "SME",
              text: "Small and medium enterprise (including startups)",
            },
            {
              value: "Academia",
              text: "Academic institution",
            },
            {
              value: "Hobbyist",
              text: "On my own free time after work",
            },
          ],
          hasOther: true,
          otherText: "Other (Please specify)",
        },
        {
          type: "text",
          name: "Occupation",
          title: "What is your occupation?",
        },
        {
          type: "checkbox",
          name: "RelationshipWithLibrary",
          title: `Are you associated with ${NEXT_PUBLIC_ASSIGNED_LIB} in any of the following capacities? Check all that apply.`,
          isRequired: true,
          choices: [
            {
              value: "Creator",
              text: "Creator",
            },
            {
              value: "Maintainer",
              text: "Maintainer",
            },
            {
              value: "RegContributor",
              text: "Regular contributor",
            },
            {
              value: "NotRegContributor",
              text: "I might have contributed something minor",
            },
            {
              value: "EndUser",
              text: "End user",
            },
          ],
          hasOther: true,
          otherText: "Other (Please specify)",
        },
        {
          type: "radiogroup",
          name: "SecurityBackground",
          title: "Do you have a computer security background?",
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
          type: "comment",
          name: "SecurityBackgroundDesc",
          visibleIf: "{SecurityBackground} = 'Yes'",
          title: "Please describe your security background",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "education",
          title: "What is your highest level of education?",
          isRequired: true,
          choices: [
            {
              value: "NoEducation",
              text: "No formal education",
            },
            {
              value: "SomeHighSchool",
              text: "Some high school",
            },
            {
              value: "HighSchool",
              text: "High School or equivalent",
            },
            {
              value: "Certification",
              text: "Technical or occupational certification",
            },
            {
              value: "SomeCollege",
              text: "Some college course work completed/ Associate degree",
            },
            {
              value: "Bachelor",
              text: "Bachelor's (or undergraduate) degree",
            },
            {
              value: "Masters",
              text: "Master's degree",
            },
            {
              value: "Doctors",
              text: "Doctorate degree",
            },
          ],
          otherText: "Doctorate degree",
        },
        {
          type: "radiogroup",
          name: "Gender",
          title: "Please tell us your gender",
          isRequired: true,
          choices: [
            {
              value: "Female",
              text: "Female",
            },
            {
              value: "Male",
              text: "Male",
            },
            {
              value: "Undisclosed",
              text: "I prefer not to say",
            },
          ],
          hasOther: true,
          otherText: "Other (Please specify)",
        },
        {
          type: "dropdown",
          name: "Country",
          title: "Where are you from?",
          isRequired: true,
          choices: [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua & Deps",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia",
            "Bosnia Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burkina",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Central African Rep",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Congo {Democratic Rep}",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "East Timor",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Grenada",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland {Republic}",
            "Israel",
            "Italy",
            "Ivory Coast",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Korea North",
            "Korea South",
            "Kosovo",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Myanmar, {Burma}",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "St Kitts & Nevis",
            "St Lucia",
            "Saint Vincent & the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome & Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Togo",
            "Tonga",
            "Trinidad & Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Vatican City",
            "Venezuela",
            "Vietnam",
            "Yemen",
            "Zambia",
            "Zimbabwe",
          ],
        },
        {
          type: "radiogroup",
          name: "Age",
          title: "What is your age (in years)?",
          isRequired: true,
          choices: [
            {
              value: "LT18",
              text: "< 18",
            },
            {
              value: "18to29",
              text: "18-29",
            },
            {
              value: "30to39",
              text: "30-39",
            },
            {
              value: "40to49",
              text: "40-49",
            },
            {
              value: "50to59",
              text: "50-59",
            },
            {
              value: "MT60",
              text: "> 60",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "CompensationChoice",
          title:
            "We will compensate you for completing the study. Please opt for one of the following compensations",
          isRequired: true,
          choices: [
            {
              value: "Amazon",
              text: "Amazon gift card worth 100 EUR",
            },
            {
              value: "NoStarch",
              text: "Gift Card from No Starch Press worth 100 EUR",
            },
            {
              value: "Donation",
              text: "Donation to a non-profit worth 100 EUR",
            },
            {
              value: "OptOut",
              text: "No! I do not want anything.",
            },
          ],
        },
        {
          type: "text",
          name: "Email",
          visibleIf: "{CompensationChoice} <> 'OptOut'",
          title:
            "We will contact you again with respect to compensation once the survey is over. Please leave your email address below",
          isRequired: true,
          inputType: "email",
        },
      ],
    },
  ],
  cookieName: "DemographicsSection",
  showQuestionNumbers: "onPage",
  completeText: "Submit responses and go to task 1",
};
