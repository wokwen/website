import React from "react";
import './Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
    return (
        <div id="home">
            <p>Wisdom Okwen</p>
            <p>Machine Learning | Full stack </p>
            <div id="icon">
                <GitHubIcon id="github"/>
                <InstagramIcon id="instagram"/>
                <FacebookIcon id="facebook"/>
                <LinkedInIcon id="linkedin"/>
                <YouTubeIcon id="youtube"/>
            </div>
        </div>
    );
}
export default Home;