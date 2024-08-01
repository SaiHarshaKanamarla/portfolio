import React from 'react';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaAngular, FaJava, FaAws, FaDocker } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiSpringboot, SiTerraform } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    GraphQL: <GrGraphQl />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Python: <FaPython />,
    Npm: <FaNpm />,
    Java: <FaJava />,
    SpringBoot: <SiSpringboot />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Angular: <FaAngular />,
    AWS: <FaAws />,
    Docker: <FaDocker />,
    Terraform: <SiTerraform />
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
