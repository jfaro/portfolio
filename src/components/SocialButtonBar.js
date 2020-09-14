import React from 'react'
import Button from "@material-ui/core/Button"
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

function SocialButtonBar() {
    return (
        <div className="button-bar">
            <Button
                style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#000000' }}
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/julienfaro/"
                target="_blank"
                aria-label="instagram">
                Instagram
            </Button>

            <div className="h-pad" />

            <Button
                style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#000000' }}
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/julien-faro-b5b856177/"
                target="_blank"
                aria-label="linkedin">
                LinkedIn
            </Button>

            <div className="h-pad" />

            <Button
                style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#000000' }}
                startIcon={<GitHubIcon />}
                href="https://github.com/jfaro"
                target="_blank"
                aria-label="github">
                GitHub
            </Button>
        </div>
    )
}

export default SocialButtonBar
