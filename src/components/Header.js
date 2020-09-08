import React from "react";
import "./Header.css";

import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';


function Header() {
  return (

    <header>
      <h1>Julien Faro</h1>

      <div className="header-buttons">
        {/* <IconButton
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
          <GitHubIcon style={{ color: '#000000' }} fontSize="larger" />
        </IconButton> */}
        <Button
          style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#000000' }}
          startIcon={<InstagramIcon />}
          href="https://www.instagram.com/julienfaro/"
          target="_blank"
          aria-label="instagram">
          Instagram
          </Button>

        <Button
          style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#000000' }}
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/julien-faro-b5b856177/"
          target="_blank"
          aria-label="linkedin">
          LinkedIn
          </Button>

        <Button
          style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#000000' }}
          startIcon={<GitHubIcon />}
          href="https://github.com/jfaro"
          target="_blank"
          aria-label="github">
          GitHub
          </Button>
      </div>
    </header>
  );
}

export default Header;
