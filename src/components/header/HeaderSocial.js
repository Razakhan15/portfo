import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

function HeaderSocial() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/raza-khan-503ab4225/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Razakhan15" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocial;
