# Whisker-wisdom

## Introduction
  Whisker Wisdom is an engaging and educational quiz application designed to test and enhance your knowledge about our feline friends. Dive into a variety of topics, including cat behaviors and fun facts.

- ### Key Features
    - #### Interactive Quizzes:
      Test your knowledge with a range of questions covering various aspects of cat lore.
    - #### Educational Content:
      Learn interesting trivia and deepen your understanding of the wonderful world of cats.
    - #### User-Friendly Interface:
      Enjoy a seamless and intuitive user experience designed for all age groups.
    - #### Variety of Topics:
      Explore questions related to cat behaviors, fun facts, and more.
    
- ### Purpose
  Whether you're a seasoned cat lover or just curious about these fascinating creatures, Whisker Wisdom offers a purr-fect way to learn and have fun. Discover interesting trivia and expand your understanding of the wonderful world of cats through this interactive and enjoyable quiz experience.

- ## User Stories

| User Story                                                                                                                                      | Acceptance Criteria                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| As a user, I want to test my knowledge about cats, so that I can see how much I know and learn new facts.                                       | When I start the quiz, I am presented with a series of multiple-choice questions about cats. I can select an answer and see if I was correct. |
| As a user, I want to see my score after completing the quiz, so that I can gauge my knowledge and see how well I did.                           | After completing all the questions, I am shown my total score out of 10 and whether I passed or failed based on the score.                    |
| As a user, I want to have the option to retake the quiz, so that I can improve my knowledge and try to achieve a better score.                  | On the result page, there is a button that allows me to retake the quiz from the beginning.                                                   |
| As a user, I want to navigate back to the home page from the quiz or result pages, so that I can start the quiz again or explore other options. | There is a button on the result page that takes me back to the home page.                                                                     |
| As a user, I want to see visual feedback when I select an answer, so that I can immediately know if I selected the correct or incorrect option. | When I select an answer, the correct answer is highlighted in green and the incorrect answers in red.                                         |
| As a user, I want to learn new facts about cats regardless of my quiz performance, so that I can gain knowledge and enjoy the quiz experience.  | Each question provides an explanation or fun fact after the answer is revealed, regardless of whether my answer was correct or incorrect.     |
| As a user, I want the app to be visually appealing and user-friendly, so that I can have an enjoyable and seamless experience.                  | The app features a clean and intuitive design with engaging graphics and easy navigation.                                                     |
| As an admin, I want to add, edit, and delete quiz questions, so that I can keep the content up-to-date and interesting for users.               | There is an admin interface where I can manage quiz questions, including adding new ones, updating existing ones, and removing outdated ones. |


- ### Wireframe
    - Landing Page Wireframe 
    | Balsamiq                                                                                          | Figma                                                                                             |
    |---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
    | ![landing-bq](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/landing-bq-page.png) | ![landing-fm](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/landing-fm-page.png) |
    
    - Intro Page Wireframe 
    ![intro-fm](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/intro-fm-page.png)

    - Quiz Page Wireframe 
    | Balsamiq                                                                                    | Figma                                                                                       |
    |---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
    | ![quiz-bq](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/quiz-bq-page.png) | ![quiz-fm](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/quiz-fm-page.png) |

    - Pass Page Wireframe 
    | Balsamiq                                                                                    | Figma                                                                                       |
    |---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
    | ![pass-bq](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/pass-bq-page.png) | ![pass-fm](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/pass-fm-page.png) |

    - Fail Page Wireframe 
    | Balsamiq                                                                                    | Figma                                                                                       |
    |---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
    | ![fail-bq](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/fail-bq-page.png) | ![fail-fm](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/fail-fm-page.png) |

- ## Features
  - ### Landing page
    1. **Heading on the Landing Page: "Whisker Wisdom"**
      - The main heading of the landing page prominently displays the text "Whisker Wisdom". This serves as the title of the application, clearly indicating that the quiz is focused on cat knowledge.
      - ![header](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/header.png)

    2. **Engaging Picture**
      - The landing page features an attractive picture related to cats. This visual element helps to capture the user's attention and provides an appealing introduction to the quiz.
      - ![landing-pic](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/landpic.png)

    3. **"Let's Start" Button**
      - A "Let's Start" button is prominently displayed on the landing page. When clicked, this button navigates the user to the introduction page (Intro). This button acts as a call to action, encouraging users to begin their quiz journey.
      - ![start-btn](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/startbtn.png)

  - ### Intro page
    1. **"Welcome to Whisker Wisdom!" Greeting**
      - The Intro page features a welcoming greeting at the top, "Welcome to Whisker Wisdom!". This greeting sets a friendly and inviting tone for the quiz.
      - ![greeting](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/greeting.png)

    2. **Introducing Text**
      - An introductory text on the page reads, "Think you know everything about cats? Prove it! Our quiz features 10 fun multiple-choice questions with four possible answers each."
      - This text explains the purpose of the quiz and encourages users to test their knowledge about cats while informing them about the quiz format.
      - ![introduction](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/introduction-text.png)

    3. **Engaging Picture**
      - The Intro page displays an attractive picture related to cats. This visual element enhances the page's appeal and engages users.
      - ![intro-picture](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/intro-pic.png)

    4. **"Let's Start" Button**
      - A "Let's Start" button is prominently displayed on the Intro page. When clicked, this button navigates the user to the quiz page, allowing them to begin their quiz journey.
      - ![start-btn](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/start-int.png)

  - ### Quiz page
    1. **"Question X" Heading**
      - The Quiz page features a dynamic heading displaying the current question number, such as "Question 1," "Question 2," etc.
      - ![question-index](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/question-index.png)

    2. **Question Display Heading**
      - A heading displays the actual question that the user needs to answer.
      - ![question-heading](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/questions.png)

    3. **Multiple-Choice Answers**
      - Four multiple-choice answers are presented for each question, allowing users to choose the correct one.
      - ![mutiple-choice](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/ans.png)

    4. **Highlight Correct Answer (Green)**
      - If the user's answer is correct, it will be highlighted in green, providing visual feedback on their choice.
      - ![correct-answer](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/corr-ans.png)

    5. **Highlight Incorrect Answer (Red) and Display Correct Answer (Green)**
      - If the user's answer is incorrect, their chosen answer will be highlighted in red, and the correct answer will be highlighted in green.
      - ![wrong-answer](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/wrong-ans.png)

    6. **"Next Question" Button**
      - A button labeled "Next Question" allows users to proceed to the next question after answering the current one.
      - ![next-button](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/next-btn.png)

    7. **Question Progress Display**
      - A display shows the current question number out of the total number of questions, keeping users informed about their progress in the quiz.
      - ![progress](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/total-que.png)

  - ### Pass Page:

    1. **Pass Heading**
      - A heading displaying "Good Job!" to congratulate the user for passing the quiz.
      - ![pass-heading](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/pass-text.png)

    2. **Pass Picture**
      - A picture displayed on the Pass page, enhancing the visual appeal of the page.
      - ![pass-picture](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/pass-pic.png)

    3. **Show Quiz Score**
      - The Pass page displays the user's quiz score out of the total possible score.
      - ![pass-score](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/pass-score.png)

    4. **"Back to Home Page" Button**
      - A button labeled "Back to Home Page" allows users to navigate back to the home page.
      - ![home-button](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/bk-to-home.png)

    5. **"Take the Quiz Again" Button**
      - A button labeled "Take the Quiz Again" enables users to start the quiz again from the beginning.
      - ![take-again-button](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/take-aga.png)

  - ### Fail Page:

    1. **Fail Heading**
      - A heading displaying "Fur-get About It!" to humorously inform the user of their quiz failure.
      - ![fail-heading](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/fail-text.png)

    2. **Fail Picture**
      - A picture displayed on the Fail page, enhancing the visual appeal of the page.
      - ![fail-picture](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/fail-pic.png)

    3. **Show Quiz Score**
      - The Fail page displays the user's quiz score out of the total possible score.
      - ![fail-score](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/fail-score.png)

    4. **"Back to Home Page" Button**
      - A button labeled "Back to Home Page" allows users to navigate back to the home page.
      - ![home-button](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/bk-to-home.png)

    5. **"Take the Quiz Again" Button**
      - A button labeled "Take the Quiz Again" enables users to start the quiz again from the beginning.
      - ![take-again-button](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/take-aga.png)

- ## Technologies Used
  - HTML5
  - CSS3
  - JavaScript


- ### Frameworks, Libraries & Programs Used
    1. [Balsamiq](https://balsamiq.com/)
        - Wireframes for the design process were crafted using Balsamiq.
    2. [Figma](https://figma.com/)
        - High-fidelity prototypes and detailed design elements were created and refined using Figma, ensuring a cohesive and visually appealing user interface.
    3. [Git](https://git-scm.com/)
        - The version control for the project was managed using Git, with Gitpod terminal being utilized for commits to Git and pushes to GitHub.
    4. [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
        - Bootstrap played a role in facilitating the responsiveness and styling of the website.
    5. [Google Fonts](https://fonts.google.com/)
        - Google Fonts were utilized to import the font into the style.css file, ensuring consistency across all pages throughout the project.
    6. [GitHub](https://github.com/)
        - The project code is stored on GitHub after being pushed from Git.
    7. [React](https://reactjs.org/)
        - The project was built using React, a JavaScript library for building user interfaces, to create dynamic and interactive components.
    8. [React Router](https://reactrouter.com/)
        - Navigation within the application was implemented using React Router, enabling seamless transitions between different views and maintaining a single-page application experience.
    9. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
        - Unit and integration tests were conducted using React Testing Library, ensuring the reliability and correctness of components and user interactions.

- ## Testing
  - This project uses the built-in React testing library to ensure the components and functionality work as expected. Below are the details of how the tests are structured and how to run them.

  - ### Testing Library
  - The tests are written using the `@testing-library/react` package, which provides utilities to test React components in a way that resembles how users interact with the application.

  - ### Test Files
    - Each component has a corresponding test file that includes various test cases to verify the component's behavior. For example:

    - `LandingPage.test.js`
    - `Intro.test.js`
    - `Quiz.test.js`
    - `Pass.test.js`
    - `Fail.test.js`

- ### Validator Testing
  
    - #### HTML
      - 

    - #### CSS
      -

- ### Google Developer Tools Lighthouse
   - Lighthouse audits were conducted to assess and enhance the following aspects of the project: performance, accessibility, adherence to best practices, and SEO optimization.
    - #### Landing Page
      - ![Landing Page Lighthouse](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/landing-lighthse.png)
    - #### Intro Page
      - ![Intro Page Lighthouse](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/intro-lighthse.png)
    - #### Quiz Page
      - ![Quiz Page Lighthouse](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/quiz-lighthse.png)
    - #### Pass Page
      - ![Pass Page Lighthouse](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/pass-lighthse.png)
    - #### Fail Page
      - ![Fail Page Lighthouse](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/fail-lighthse.png)


- ### Responsiveness

- ## Manual Testing
    
  - The manual testing conducted on the "Whisker Wisdom" app includes the following aspects:

  - ### Cross-browser Compatibility
    - Verify the functionality and appearance of the app across different web browsers.
      |Browser tested|Intended appearance|Intended resposienss|
      | --- | --- | --- |
      |Chrome|good|good|
      |Firefox|good|good|
      |Safari|good|good|
  - ### Responsiveness and Device Compatibility
    - Ensure the app displays correctly and functions appropriately across various device sizes.
      |Device tested|Site responsive >= 700px|Site responsive <600px|Renders as expected|
      | --- | --- | --- | --- |
      |Smartphones |N/A|Good|Good|
      |Tablets|Good|N/A|Good|
      |Laptops|Good|N/A|Good|
      |Desktops|Good|N/A|Good|
  - ### Link Validation
    - Verify all internal and external links to ensure they direct users to the intended destinations.
  - ### Text and Font Readability
    - Ensure all text content and fonts used in the app are legible, clear, and easy to understand.
  - ### Acceptance Test
    - Confirm the application meets the specified user stories and acceptance criteria.
  - ### Summary
    - The manual testing confirms that the "Whisker Wisdom" app operates smoothly across multiple browsers, adapts well to different devices, ensures accurate link navigation, and maintains clear readability for users interacting with the content. The app successfully meets the specified user stories and acceptance criteria, ensuring a high-quality user experience.


- ### Bugs Discovered

  - During the deployment process, it was observed that only the README.md file was displayed, and the project itself was not visible.

  - #### Solution:

    | Before Deployment                                                                                          | After Deployment      |
    |------------------------------------------------------------------------------------------------------------|-----------------------|
    | ![Before Deployment](/workspace/Milestone-Project-2/whisker-wisdom/src/assets/media/before-deployment.png) | ![After Deployment]() |

    In the "Before Deployment" image, only the README.md file is visible, while in the "After Deployment" image, both the README.md and the project are visible.

- ## UI Improvements
  - The only change made was switching the <h3> element to <h2> for the Lighthouse testing.

- ## Credit
   
    - ### Content
      - The content has been generated using [ChatGPT](https://chat.openai.com/).

    - ### Media
      - [Pinterest](https://www.pinterest.co.uk/)

    - ### Useful Links
      - [React Tutorial](https://www.w3schools.com/react/)
      - [How To Build A Quiz App With JavaScript for Beginners](https://hackr.io/blog/how-to-build-a-javascript-quiz-app)
      - I've learned coding from [Codecademy](https://www.codecademy.com/) and incorporated my skills into this project.

- ## Deployment
    - ### Cloning and Forking
     
      - #### Fork
        1. Visit the repository located at [PROJECT2]() on GitHub.com.
        2. Select the "Fork" button situated at the top-right corner of the page.
        3. The default naming convention for forks mirrors that of their parent repositories. However, you have the option to customize the fork's name to enhance its distinctiveness.
        4. Add a description to your fork.
        5. After selecting "Create fork," you will be redirected to your newly created forked repository.
      
      - #### Clone
        1. Above the list of files, click on the button labeled 'Code'.
        2. Copy the URL for the repository.
        3. Open Terminal and navigate to the directory where you want to clone the repository.
        4. Type `git clone`, followed by the URL of the repository you want to clone, and press Enter.
        
- #### How to run this project locally
    1. Sign up to [Gitpod](https://gitpod.io/).
    2. Download the browser extension of Gitpod.
    3. On GitHub.com, go to the [PROJECT2]()repository.
    4. Click on the "GitPod" button located above the list of files in the repository on GitHub. This will open the GitPod workspace using the repository.

- #### How to run this project remotely
   
    - The website has been deployed to GitHub Pages. If you have forked or cloned the repository, follow these steps to deploy:
   
      1. Navigate to your repository on GitHub.
      2. Access the "Settings" tab located at the top of your repository's page.
      3. On the left sidebar, select the "Pages" tab.
      4. Under the "Build and Deployment" section, choose "main" from the source drop-down menu, then click "Save".
      5. After completing the previous step, you will see a green success message with a link to your deployed website. This message confirms that your site is now published at the specified URL.
    
    You can access the live link here: [PROJECT2-DEPLOYED]()
