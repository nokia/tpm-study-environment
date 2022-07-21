# TPM Study Environment

## Survey App
Contains survey questionnaire that stores the results in a local MongoDB `surveydb` when the survey is completed.
The application is wrapped as a Next.js app.
* The survey code is under [./pages/survey.js](./pages/survey.js).
* The database connection logic is under [./util/mongodb.js](./util/mongodb.js).
* The API to create and list submissions from the database is under [./pages/api/submissions/](./pages/api/submissions/).

Accessible over http://localhost:3000/survey.


To run the develoment server:
```bash
npm run dev
```
This one will be updated live as the code is modified.


Environment variables that need to be set in `.env.local`:
* `MONGODB_URI`: URI for the mongo DB
* `MONGODB_DB`: Mongo database name
* `SURVEY_TYPE`: Indicates whether we use symmetric or asymmetric encryption as the first task (values: `asymmetric` or `symmetric`)
* `NEXT_PUBLIC_SERVER_NAME`: Name of the server for this survey. This is the unique identifier for each participant in the survey, which is used as the tlk.io server name and part of the survey URL
* `NEXT_PUBLIC_ASSIGNED_LIB`: Name of the library we assign the participant by default (possible values: [`"tpm2-tools v5.0"`, `"tpm2-tss v3.0.1"`, `"IBM TSS v1.5.0"`, `"go-tpm v0.3.2"`, `"wolfTPM v2.0.0"`])
* `SSL_CRT_FILE`: Absolute path to the SSL cert
* `SSL_KEY_FILE`: Absolute path to the key

## TPM manager
Additionally, we have a TPM manager that needs to be run in the background to control the TPM.
* The code is under [./tpm-manager](./tpm-manager).

## Installation instructions
The [./docs/](./docs/) directory includes a script and documentation on installing this survey app and dependencies for the study.