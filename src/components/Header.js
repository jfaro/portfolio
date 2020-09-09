import React from "react";
import "./Header.css";

import Button from "@material-ui/core/Button"
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';


function Header() {
  return (

    <div>
      <h1 className="header-title">Julien Faro</h1>

      <div className="button-bar">
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
    </div>
  );
}

export default Header;
