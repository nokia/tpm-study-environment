var { NEXT_PUBLIC_ASSIGNED_LIB } = process.env;

export var welcomeSurveyJson = {
  title: "Welcome!",
  pages: [
    {
      name: "Welcome",
      elements: [
        {
          type: "html",
          name: "WelcomeText",
          html: `<h2> Welcome!</h2>\n\
            <p>\
            We are conducting research on the usability of popular Trusted Platform Module (TPM) libraries. \
            Our goal is to study the usage of TPM libraries from a developer's perspective. \
            Your participation will help us understand the TPM ecosystem better.\
            </p>\n\n\
            <h4>Description:</h4>\n\
            <p>\
            In this study, you will perform <strong>simple technical tasks</strong> that revolve \
            around common use cases of the TPM, as well as <strong>non-technical questionnaires</strong> \
            to know about your opinions and perceptions. \
            </p>\n\n\
            <p>\
            There are two kinds of questionnaires: task-specific and generic.\
            Task-specific questions are presented after completing each task, whereas generic questions are presented at the end of the study. \
            We also ask for your basic demographic details.  \
            </p>\n<hr>\n\n\
            <h4>Study logistics:</h4>\n\
            <p>Based on the pilot test, completing this entire study should take approximately 2-3 hours.</p>\n\
            <p>\
            All you need to take part in this study is a web browser. \
            Once you navigate through the study, you will find task descriptions and a browser-integrated IDE. \
            This environment contains all necessary TPM libraries and supports multiple programming languages.  \
            </p>\n\
            <ul>\n\
            <li><p>Based on your response to the <a href="https://forms.office.com/Pages/DesignPage.aspx?origin=shell#FormId=URdHXXWWjUKRe3D0T5YwsFKG47MJmHpBvlZzNL854-tUOEQ3MEhMSDJHSk4wM0xaMzJES0FGV0JJWCQlQCN0PWcu" target="_blank">preliminary survey</a> that we conducted in September 2020, we have preassigned a specific library for you to work with. Nevertheless, you are free to switch to any other available library at any point during the study.</p>\n</li>\n\
            <li><p>Your assigned library for this study is <code>${NEXT_PUBLIC_ASSIGNED_LIB}</code></p></li>\n\
            <li><p>For each task you will be provided with an IDE where you can write code. Your code will run in a virtualized environment with a TPM.</p></li>\n\
            <li><p>You can run and modify your code as many times as you want. </p>\n</li>\n\
            <li><p>There is no need to save anything; we save all the code you execute. The last version of your code is considered the final version. </p>\n</li>\n\
            </ul>\n\n<hr>\n\n\
            <h5><strong>Please watch the following video for detailed instructions:</strong></h5>
            <p align="left">\n\
            <iframe width="900" height="506" src="https://www.youtube-nocookie.com/embed/R8lud0Wa9vE" \
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; \
            picture-in-picture" allowfullscreen></iframe>\n\
            </p>\n\
            <h4>Technical support:</h4>\n\
            If you need technical support (e.g. if your study site is frozen) you can reach out to us via chat or email. You can find more information in our <a href="/contact">Contact Us</a> page.\
            </p>\n\
            <h4>Terms and policies:</h4>\n\
            <p>By clicking the "Start" button on this page, you accept the <a href="/terms" target="_blank">terms and policies</a> of this survey and agree to provide us with your participation data.`,
        },
      ],
      // "title": "Welcome to our study"
    },
  ],
  showQuestionNumbers: "onPage",
  completeText: "Start",
};
