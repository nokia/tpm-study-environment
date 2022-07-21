import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";


import {
  Row,
  Col,
  Container,
} from "react-bootstrap";

export default function WelcomeText() {
  return (
    <Row>
      <Col sm="10">
     <h2> Welcome!</h2>
     <p>
     We are conducting research on the usability of popular Trusted Platform Module (TPM) libraries.
     Our goal is to understand the pain points of using TPM libraries for secure product development.
     Your participation will help us in developing suggestions for improving the TPM ecosystem with an emphasis on usable security.
     </p>


     <h4>Description:</h4>
     <p>
     In this study, you will perform <strong>simple tasks</strong> that revolve around common use cases of the TPM. 
     These technical tasks consist of <strong>required and optional steps</strong> that are clearly indicated (in bold highlighted text). 
     Optional steps are slightly more challenging than the required steps. 
     Nevertheless, we encourage you to try out all steps and tasks of this study, as they are designed to be simple for anyone with TPM knowledge. 
     </p>


     <p>
     There are also <strong>non-technical questionnaires</strong> to know more about your opinions and perceptions. 
     Questionnaires that are relevant to a specific task are presented after completing all the steps of that task. 
     More generic questionnaires, that are applicable to every task, are presented at the end of the study after finishing all the tasks. 
     We also ask for your basic demographic details.  
     </p>
     


     <h4>Study logistics:</h4>

     <p>
     All you need to take part in this study is a web browser; more specifically, just the current web page/ browser tab that you are reading right now. 
     Once you navigate to the next page, you will find the task description and a browser-integrated TPM environment. 
     This environment contains all necessary TPM libraries and supports multiple programming languages.  
     </p>

     <ul>
     <li>
         <p>
             Based on your response to the <a href="https://forms.office.com/Pages/DesignPage.aspx?origin=shell#FormId=URdHXXWWjUKRe3D0T5YwsFKG47MJmHpBvlZzNL854-tUOEQ3MEhMSDJHSk4wM0xaMzJES0FGV0JJWCQlQCN0PWcu">preliminary survey</a> that we conducted in September 2020, we have preassigned you to work with a specific library. Nevertheless, you are free to switch to any other library of your choice right from the beginning or during the tasks.
         </p>
     </li>

     <li>
     <p>The task environment contains an online IDE where you can write code to interact with a TPM using your assigned library (or any other available library, if you decided to switch libraries). The code you write will be run in a virtualized environment with a TPM, and the results will be shown in the online IDE. </p>
     </li>

     <li>
     <p>You can run and modify your code snippets as many times as you want. Similarly, you can change the answers to the questionnaire as many times as you want. </p>
     </li>
     <li>
     <p>
     No need to save anything; everything will be autosaved. The last version of your responses is considered the final version.
     </p>
     </li>
     
     </ul>


     <h4>Technical support:</h4>

     <p>Although we have tested that our environment works and all tasks are doable, you might face some technical glitches.
     Similarly, you may want clarification while doing the tasks. You can contact us via (form, email or chat). 
     </p>
     <h4 id="approximate-time-required-">Approximate time required:</h4>
     <p>Based on the pilot test, completing this entire study should take approximately 2-3 hours. Nevertheless, it might require even less time for a more experienced developer like you.
     </p>
     <p>How long will the study be open?</p>


     <h4>Privacy statement:</h4>
     <p>
     More on what is collected We take your privacy seriously and will use your data only for our study purposes.
     We will securely store your response and not share it only with those who are directly involved in this research.
     Also, we will immediately delete the data that is not used for our study. More ... privacy policy
     </p>
     </Col>
     </Row>
  );
}