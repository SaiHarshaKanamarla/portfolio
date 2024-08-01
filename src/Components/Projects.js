import React from 'react';
import ProjectBox from './ProjectBox';
import RogfreeImage from '../images/RogfreeImage.png';
import NodeImage from '../images/node.png';
import KafkaImage from "../images/kafka.png";
import ReactNative from "../images/react-native.png";
import BlogImage from "../images/blog.png";
import BudgetImage from "../images/budget.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ReactNative} projectName="Pokemons" />
        <ProjectBox projectPhoto={KafkaImage} projectName="Kafka" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="QuizApp" />
        <ProjectBox projectPhoto={NodeImage} projectName="ReminderApp" />
        <ProjectBox projectPhoto={BlogImage} projectName="BlogApp" />
        <ProjectBox projectPhoto={BudgetImage} projectName="Budgeting" />
      </div>
      <div className='githeading'>
        <h2>For all the personal projects, head onto my Github here  <a href={"https://github.com/SaiHarshaKanamarla"} target='_blank'>
          <button className='githubDisplay'><FaGithub />  Github</button>
        </a></h2>
      </div>
    </div>
  )
}

export default Projects