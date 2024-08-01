import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sai Harsha Kanamarlapudi</h4>
      <h4>Copyright &copy; 2023 SHK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SaiHarshaKanamarla" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sai-harsha-kanamarlapudi-81802013b/" target='_blank'><FaLinkedin /></a>
        <a href='mailTo:saiharshakanamarlapudi@gmail.com' target='_blank'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer