import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Sai Harsha Kanamarlapudi</b> and I am originally from Hyderabad, India currently living in Charlotte, North Carolina.
            I'm a <b>Full Stack Developer</b> with a Masters Degree in <b>Computer Science</b>.  <br /><br />
            I work as a Full Stack Engineer at <b>Federated Wireless</b> and previously worked at <b>University of North Carolina at Charlotte</b>, <b>Kony Labs</b> and <b>Robotries</b>.<br /><br />
            I love coding in JavaScript and Python and I am always looking for ways to improve myself and learn more. I love tech and always keep myself updated with various advancements in technology. I can go on about tech for hours on end and would not get bored.
            <br /><br />
            The journey to reach where I currently am has not been easy and I don't expect the future to be easy as well, because, where's the challenge in it, right? . I look forward to various opportunities in the future and keep myself motivated for anything that comes ahead.<br /><br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div >

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Angular' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill="GraphQL" />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Python' />
        <Skills skill='Java' />
        <Skills skill='SpringBoot' />
        <Skills skill='AWS' />
        <Skills skill='Docker' />
        <Skills skill='Terraform' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default About