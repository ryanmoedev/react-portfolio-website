import React from "react";
import "./header.css";
import Actions from "./Actions";
import Socials from "./Socials";
import LargeIcon from "./LargeIcon";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello There, I'm</h5>
        <h1>Ryan Moe</h1>
        <h5 className="text-light">Software Engineer - Fullstack</h5>
        <Actions />
        <Socials />
        {/* <LargeIcon /> */}
      </div>
    </header>
  );
};

export default Header;
