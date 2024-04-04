import React from 'react';
import profile_picture from '../../images/profile_picture.png';
import './About.css';

function About() {
    return (
        <div className='about'>
            <a href="linkedin.com/wisdom-okwen"></a>
            <img src={ profile_picture } alt="profile" />
        </div>
    )
}

export default About;