import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    PokemonsDesc: "A simple react native application showcasing a card layout for different pokemon cards designed using react native + expo GO",
    PokemonsGithub: "https://github.com/SaiHarshaKanamarla/react-native-pokemon-card",

    KafkaDesc: "A simple messaging app to send location data from producer to consumer emulating a producer putting location information on the queue for a consumer to consume the information",
    KafkaGithub: "https://github.com/SaiHarshaKanamarla/kafka-messaging-sample-app",

    QuizAppDesc: "A react application which is a quiz app that allows users to answer a predefined set of questions, keeps track of score and returns the result of the quiz at the end. Hosted via AWS Amplify",
    QuizAppGithub: "https://github.com/SaiHarshaKanamarla/aws-amplify-quiz-app",

    ReminderAppDesc: "A node js application that runs a cron job once every 24 hours to and reminds the user of an event if present that day by sending an email via NodeMailer",
    ReminderAppGithub: "https://github.com/SaiHarshaKanamarla/birthday_reminder",

    BlogAppDesc: "A react application that allows users to view their blog posts, create new posts, edit and delete the blog posts. The blogs are served up from a backend node server and stored in a MongoDB database hosted over AWS",
    BlogAppGithub: "https://github.com/SaiHarshaKanamarla/personal-blog-react",

    BudgetingDesc: "A MEAN stack application that allows users to sign up, login and keep track of their budget expenses for each month. Integrated with libraries like Chart.js for visual representation and CRUD operations for budget management",
    BudgetingGithub: "https://github.com/SaiHarshaKanamarla/personal-budget-final-project",
  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        {/*<a href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a> */}
      </div>
    </div>
  )
}

export default ProjectBox