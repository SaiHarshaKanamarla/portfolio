import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SAI HARSHA KANAMARLAPUDI</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am a Full Stack Developer by trade and writing code keeps me ticking. <br></br>
            I always look for tasks that challenge me and I love learning new things <br /><br />
            I am skilled in <b>JavaScript</b>, <b>Python</b> and love working with <b>React</b>, <b>React Native</b>, <b>Node.js</b>
            I plan to learn <b>Next.js</b>, <b>Three.js</b> in the near future. <br /><br />

            PS - I am a <b>coffee</b> addict! <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home