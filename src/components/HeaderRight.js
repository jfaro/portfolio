import React from "react";
import "./HeaderRight.css";

import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HeaderRight() {
  return (
    <div className="header-right">
      <IconButton
        href="https://www.instagram.com/julienfaro/"
        target="_blank"
        aria-label="instagram"
      >
        <InstagramIcon color="secondary" fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/julien-faro-b5b856177/"
        target="_blank"
        aria-label="linkedin"
      >
        <LinkedInIcon color="secondary" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default HeaderRight;
