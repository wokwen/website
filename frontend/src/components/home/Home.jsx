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
            <div className="name">
                <p>Wisdom Okwen</p>
            </div>
            <div className="interests">
            <p>Machine Learning | Deep Learning | Fullstack Development | Data Science | Optimization</p>
            </div>
            <div className="socials">
                <a href="https://github.com/wokwen"><GitHubIcon id="github"/></a>
                <a href="https://www.instagram.com/owska_salvation/"><InstagramIcon id="instagram"/></a>
                <a href="https://www.facebook.com/profile.php?id=100087329172175"><FacebookIcon id="facebook"/></a>
                <a href="https://www.linkedin.com/in/wisdom-okwen-05b09a184/"><LinkedInIcon id="linkedin"/></a>
                <a href="https://www.youtube.com/channel/UC2JKlaNuQQKmPVlgxpoVCbA"><YouTubeIcon id="youtube"/></a>
            </div>
        </div>
    );
}
export default Home;