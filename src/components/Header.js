import React from "react";
import "./Header.css";

import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';


function Header() {
  return (

    <header>
      <h1>Julien Faro</h1>

      <div className="icon-button-links">
        <IconButton
          href="https://www.instagram.com/julienfaro/"
          target="_blank"
          aria-label="instagram"
        >
          <InstagramIcon style={{ color: '#000000' }} fontSize="large" />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/julien-faro-b5b856177/"
          target="_blank"
          aria-label="linkedin"
        >
          <LinkedInIcon style={{ color: '#000000' }} fontSize="large" />
        </IconButton>

        <IconButton
          href="https://github.com/jfaro"
          target="_blank"
          aria-label="github"
        >
          <GitHubIcon style={{ color: '#000000' }} fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
