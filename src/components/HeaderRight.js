import React from "react";
import "./HeaderRight.css";

import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon'
import soundcloudIcon from '../assets/icons/soundcloud-vector-logo.svg'


class HeaderRight extends React.Component {
  render() {

    return (
      <div className="header-right">
        <IconButton
          href="https://www.instagram.com/julienfaro/"
          target="_blank"
          aria-label="instagram"
        >
          <InstagramIcon color="primary" fontSize="large" />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/julien-faro-b5b856177/"
          target="_blank"
          aria-label="linkedin"
        >
          <LinkedInIcon color="primary" fontSize="large" />
        </IconButton>

        <IconButton
          href="https://github.com/jfaro"
          target="_blank"
          aria-label="github"
        >
          <GitHubIcon color="primary" fontSize="large" />
        </IconButton>

      </div>
    );

  }


}

export default HeaderRight;
