import React from 'react'
import author from '../assets/img/author.png'
import { Link } from 'react-scroll'
//Animation
import Flip from 'react-reveal/Flip'
import { motion } from 'framer-motion'

const AboutMe = () => {
    return (
        <div id="about" className="container about-wrapper py-5">
            <div className="about-grey">

            </div>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="img-wrapper mb-5">
                        <img className="about-img" src={author} alt="author..."></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                <Flip left cascade>
                    <h3 className="header" id="about-header">ABOUT ME</h3>
                </Flip>
                    <div className="text-wrapper">

                        <h4 id="about-subHeader">Frontend Web Developer</h4>
                        <p className="about-p">Self-taught Developer with skills in JavaScript, HTML5, CSS3, ReactJS, Bootstrap5, SASS and NodeJS, tailored for Front End Development. Passionate and  hard-working, with a variety of skills built through the different jobs I've been in.</p>
                        <p className="about-p">Entry-level developer driven by a problem-solving mentality and a desire to learn and further improve on my Web Development skills, with a high bar for standard and discipline in my code.</p>

                    </div>
                    <div className="btn-bar mt-2">
                        <Link 
                        to="projects" className="px-btn theme" href="#">View Works</Link>
                        <motion.a 
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                        className="px-btn theme-t" href="https://drive.google.com/uc?export=donwload&id=1pvlG2tfWAEI5Ke1LFhcX4yw1X8vpnqaI">Download CV</motion.a>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default AboutMe
