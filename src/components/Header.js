import React from "react";
import header_image from '../assets/header_1920.png'
import SocialButtonBar from "./SocialButtonBar";
import NavigationTabs from './NavigationTabs'


function Header(props) {

  return (
    <div className="header-container">
      <div className="header-image-container">
        <img className="header-image" src={header_image} />
      </div>
      <SocialButtonBar />
      <hr />
      <NavigationTabs />
    </div>
  );
}

export default Header;
