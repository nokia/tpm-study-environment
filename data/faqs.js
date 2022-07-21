export var faqs = [
  {
    question: "How much time should I reserve for completing this study?",
    answer:
      'Based on the pilot test, completing this entire study should take approximately 2-3 hours.',
  },
  {
    question: 'I do not see a "Save" button. Do I have to save my code?',
    answer:
      'Don\'t wory! There is no need for you to save anything.\n\nWe save all the code you execute (i.e., when you click the "Run" button). The last version of your code or responses is considered the final version.',
  },
  {
    question: "Do I have to save/submit my code somewhere?",
    answer:
      'Not really! Our study is designed in a way that it requires minimal effort from you. Just follow the instructions and be assured that everything will be saved/submitted.\n\nAs mentioned before, we save the code that you execute in the IDE. Responses to the questionnaires are also saved when you click the "Next" or "Submit responses and go to next task" buttons.',
  },
  {
    question: "My task indicates I should use a file. Where can I find it?",
    answer:
      'All task files are under the directory <code>./task_files/</code> in your IDE environment. Inside <code>./task_files/</code> there will be a directory for each task. The directories are as follows:\
        <table class="table table-striped table-bordered table-sm" style="width: auto;">\n\
        <thead>\n\
          <tr>\n\
            <th>Task Name</th>\n\
            <th>Directory path</th>\n\
          </tr>\n\
        </thead>\n\
        <tbody>\n\
          <tr>\n\
            <td>Task 1</td>\n\
            <td><code>./task_files/asym_encryption</code></td>\n\
          </tr>\n\
          <tr>\n\
            <td>Task 2</td>\n\
            <td><code>./task_files/store_measurements</code></td>\n\
          </tr>\n\
          <tr>\n\
            <td>Task 3</td>\n\
            <td><code>./task_files/securing_secrets</code></td>\n\
          </tr>\n\
          <tr>\n\
            <td>Task 4</td>\n\
            <td><code>./task_files/remote_attestation</code></td>\n\
          </tr>\n\
        </tbody>\n\
      </table>',
  },
  {
    question: "Can I pause or take a break?",
    answer:
      "Of course, you can! But only if you promise to come back and finish the study till the end ;)",
  },
  {
    question:
      "Accidentally I closed my browser window/tab? Should I redo everything?",
    answer:
      'Don\'t worry! Everything will still be there unless you have cleared cookies.\n\nYour responses will be saved locally and sent to your server when you run the code or press the "Next" or "Submit responses and go to next task" buttons.\n\nAlso, you will see a checkmark next to the tasks that you have completed. In any case, you will be expected to complete the tasks only once.',
  },
  {
    question: "Can I complete the tasks in the order of my preference?",
    answer:
      "Unfortunately no!\n\nWe have some logic for the order of the tasks and you are requested to complete them in the same order. The next task will be enabled only after the completion of the task you are in.",
  },
  {
    question: "Do I have to complete all steps and tasks?",
    answer:
      "We would appreciate if you could. However, if you are unable to complete it, please answer all the questions that are asked to you at the end of each task and help us understand why you could not complete it.\n\nAlso, don't forget that we are compensating for your time and efforts (~100 EUR) if you have genuinely attempted.",
  },
  {
    question: "Which TPM libraries are available?",
    answer:
      "There are four available TPM libraries:\n\
    <ul>\n\
    <li>tpm2-tools v5.0 / tpm2-tss v3.0.1</li>\n\
    <li>IBM TSS v1.5.0</li>\n\
    <li>go-tpm v0.3.2 / go-tpm-tools v0.2.1</li>\n\
    <li>WolfTPM v2.0.0</li>\n\
    </ul>",
  },
  {
    question:
      "My assigned library has both Bash command line tools and C libraries. Do I have to use a specific one to complete the task?",
    answer:
      'No, you can use whichever one you prefer to complete the task.\n\
    When selecting a language in the IDE dropdown menu, it indicates what language is used with that selection, e.g Bash or C.\n\
    You can select the one you prefer from the dropdown menu and start writing code.<br>\n\
    <img src="/dropdownLanguageSelection.gif" width="100%"/>',
  },
  {
    question:
      "Can I refer to resources (e.g. standards, library docs, StackOverflow, etc.)?",
    answer:
      "Of course! By all means!\n\nWe have some questions at the end of each task to know what kind of resources you had to refer to complete the task. Don't forget to report all the resources that you referred to.",
  },
  {
    question: "What data will you collect about me and how will you handle it?",
    answer:
      "We will collect and analyze the code snippets you will execute in the online IDE and responses to the questionnaire of this study. \
      We also have some basic demographic questions like in any participatory studies.\n\n\
      Please note that any of your personally identifiable information (e.g., email and names) will not be disclosed anywhere. \
      We do not include them in our analysis. \
      They are collected purely for contacting you and will be discarded immediately by the end of this study.",
  },
  {
    question: "How about GDPR?",
    answer:
      'Everything we collect will be handled carefully under the European Union General Data Protection Regulation (GDPR) mandate. Refer to our <a href="/terms" target="_blank">terms and policies</a> for more detail.',
  },
  {
    question: 'The task instruction says "Reboot TPM". How can I do it?',
    answer:
      'Just click the "Reboot TPM" button as shown below. (Add what it does)',
  },
  {
    question:
      "I want to change the library that is assigned (pre-selected) to me. How can I do it?",
    answer:
      "You can change it by selecting the library of your choice from the dropdown in the IDE.\n\nThe currently selected library is always displayed on the top right corner of your page",
  },
  {
    question:
      "I think I messed up the TPM internal states and I need to reset my TPM to its initial state. How can I do it?",
    answer:
      'Just click the "Reset TPM to initial state" button as shown below. This will start a new TPM simulator with the stame state as given to you at the beginning of the survey.',
  },
  {
    question: "Where I do see standard errors?",
    answer:
      'You can see the standard errors by clicking STDERR on the right top corner of the IDE.\n\n\
      If you wish, you can also change the behavior display standard errors to be part of the standard output.<br>\n\
      <img src="/stderr.gif" width="100%"/>',
  },
  {
    question: "How do I pass command-line arguments?",
    answer:
      'You pass command-line arguments by entering them in the specific box.<br>\n\
      <img src="/cmdline_args.gif" width="100%"/>',
  },
  {
    question: "Do the files I create in the IDE disappear?",
    answer:
      'Any files that you create under the <code>./task_files</code> directory in the sandbox will be preserved across code executions. However, any files that you create elsewhere will be wiped the next time you execute your code by pressing "Run" in the IDE.',
  },
  {
    question: "I still have some doubts, where can I seek help?",
    answer:
      'If you need technical support (e.g. if your study site is frozen) you can reach out to us via email or chat.\n\nThe chat service we use requires no login and you can pick a nickname of your choice. However, please do not communicate anything sensitive as that is a public chat. For sensitive information, kindly use email.\n\nEmail: Sid (<code>siddharth.rao@aalto.fi</code>); Gaby (<code>gabriela.limonta@nokia-bell-labs.com</code>)\n\nThe contact information is also available in the <a href="/contact">Contact us</a> page.',
  },
  {
    question: "I have some comments for you. How can I provide them to you?",
    answer:
      "We wholeheartedly welcome your comments/critics/suggestions/bug report/collaboration ideas or anything that you want to share with us. Just drop us an email.",
  },
  {
    question: "Will you update me with the results of the study?",
    answer:
      'Yes! We will reach out to all participants individually and update them with the final results of our study.\n\nAs mentioned before, we save the codes that you execute in the IDE. Responses to the questionnaires are also saved when you click the "Next" or "Submit responses and go to next task" buttons.',
  },
];
