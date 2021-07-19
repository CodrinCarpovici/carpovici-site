import React from 'react'
import author from '../assets/img/author.png'

const About = () => {
    return (
            <div className="container py-5" id="about">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="img-wrapper mb-5">
                            <img className="about-img" src={author} alt="author..."></img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                            <h3 id="about-header">ABOUT ME</h3>
                            <h4 id="about-subHeader">Frontend Web Developer</h4>
                            <p className="about-p">Self-taught Developer with skills in JavaScript, HTML5, CSS3, ReactJS, Bootstrap5, SASS and NodeJS, tailored for Front End Development. Passionate and  hard-working, with a variety of skills built through the different jobs I've been in.</p>
                            <p className="about-p">Entry-level developer driven by a problem-solving mentality and a desire to learn and further improve on my Web Development skills, with a high bar for standard and discipline in my code.</p>
                            <div className="btn-bar">
                                <a className="px-btn theme" href="#">View Works</a>
                                <a className="px-btn theme-t" href="#">Download CV</a>
                        </div>
                    </div>

                </div>
            </div>
    )
}


export default About
