import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/ryan-moe-b2863b55/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ryanmoedev" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <ImFacebook2 />
      </a> */}
    </div>
  );
};

export default Socials;
