import React from 'react'
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Animations
import {motion} from 'framer-motion'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <p>London</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:00447472272377">+447472272377</a>
                        </div>
                        <div className="d-flex">
                            <motion.button
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)"
                            }} 
                                className="clipboard-btn"
                                onClick={() => navigator.clipboard.writeText('codrincarpovici@gmail.com')}
                            >
                                codrincarpovici@gmail.com
                                <span class="tooltiptext"><FontAwesomeIcon className="clipboard-icon" icon={faClipboard} /></span>
                            </motion.button>

                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <Link to="home" className="footer-nav">Home</Link>
                                <br />
                                <Link to="about" offset={-196} className="footer-nav">About Me</Link>
                                <br />
                                <Link to="projects" offset={0} className="footer-nav">Projects</Link>
                            </div>
                            <div className="col">
                                <Link to="technologies" offset={-95} className="footer-nav">Technologies</Link>
                                <br />
                                <Link to="services" offset={-250} className="footer-nav">Services</Link>
                                <br />
                                <Link to="contacts" offset={-25} className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="social-icons row align-items-center">
                <div className="d-flex justify-content-center">
                    <SocialIcon
                        className="s-icon mx-1"
                        bgColor="black"
                        fgColor="white"
                        label="GitHub"
                        style={{ height: 42, width: 42 }}
                        url="https://github.com/CodrinCarpovici"
                    />
                    <SocialIcon
                        className="s-icon mx-1"
                        fgColor="white"
                        label="LinkedIn"
                        style={{ height: 40, width: 40 }}
                        url="https://www.linkedin.com/in/codrin-gabriel-c-31b4b899/"
                    />
                    <SocialIcon
                        className="s-icon mx-1"
                        fgColor="white"
                        label="Instagram"
                        style={{ height: 40, width: 40 }}
                        url="https://www.instagram.com/codrincarpovici/"
                    />
                    <SocialIcon
                        className="s-icon mx-1"
                        fgColor="white"
                        label="Facebook"
                        style={{ height: 40, width: 40 }}
                        url="https://www.facebook.com/gabriel.carpovici.1/"
                    />
                </div>
                <p className="pt-3 text-center">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp;Codrin Carpovici | All Rights Reserved
                </p>
            </div>

        </div >
    )
}

export default Footer
