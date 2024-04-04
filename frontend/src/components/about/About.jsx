import React from 'react';
import profile_picture from '../../images/profile_picture.png';
import './About.css';

function About() {
    return (
        <div className='about'>
            <div className='left'>
                <img src={ profile_picture } alt="profile" />
            </div>
            <div className="right">
                <p>Hey there, my name is wisdom</p>
            </div>
        </div>
    );
}

export default About;