import React from 'react'
import { Link } from 'react-scroll'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

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
                            <button
                                className="clipboard-btn"
                                onClick={() => navigator.clipboard.writeText('codrincarpovici@gmail.com')}
                            >
                                codrincarpovici@gmail.com
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <Link to="home" className="footer-nav">Home</Link>
                                <br />
                                <Link to="about" className="footer-nav">About Me</Link>
                                <br />
                                <Link to="portfolio" className="footer-nav">Portfolio</Link>
                            </div>
                            <div className="col">
                                <Link to="services" className="footer-nav">Services</Link>
                                <br />
                                <Link to="technologies" className="footer-nav">Technologies</Link>
                                <br />
                                <Link to="contacts" className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="row align-items-center">
                <div className="d-flex justify-content-center">
                    <FacebookShareButton
                        url={"https://www.youtube.com/channel/UCj4YRR8sRqBzt1L8sRFcwmQ"}
                        quote={"FrontEnd Developer based in London, with skills in ReactJS, Bootstrap5, JS, HTML, CSS, SASS and NodeJS at the latest standard. Building responsive UI/UX Designs with a mobile-friendly mentality."}
                        hastag="#javascript #reactjs #webdevelopment"
                    >

                        <FacebookIcon className="mx-3" size={36} />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={"https://www.youtube.com/channel/UCj4YRR8sRqBzt1L8sRFcwmQ"}
                        quote={"FrontEnd Developer based in London, with skills in ReactJS, Bootstrap5, JS, HTML, CSS, SASS and NodeJS at the latest standard. Building responsive UI/UX Designs with a mobile-friendly mentality."}
                        hastag="#javascript #reactjs #webdevelopment"
                    >

                        <TwitterIcon className="mx-3" size={36} />
                    </TwitterShareButton>
                    <RedditShareButton
                        url={"https://www.youtube.com/channel/UCj4YRR8sRqBzt1L8sRFcwmQ"}
                        quote={"FrontEnd Developer based in London, with skills in ReactJS, Bootstrap5, JS, HTML, CSS, SASS and NodeJS at the latest standard. Building responsive UI/UX Designs with a mobile-friendly mentality."}
                        hastag="#javascript #reactjs #webdevelopment"
                    >

                        <RedditIcon className="mx-3" size={36} />
                    </RedditShareButton>
                    <LinkedinShareButton
                        url={"https://www.youtube.com/channel/UCj4YRR8sRqBzt1L8sRFcwmQ"}
                        quote={"FrontEnd Developer based in London, with skills in ReactJS, Bootstrap5, JS, HTML, CSS, SASS and NodeJS at the latest standard. Building responsive UI/UX Designs with a mobile-friendly mentality."}
                        hastag="#javascript #reactjs #webdevelopment"
                    >

                        <LinkedinIcon className="mx-3" size={36} />
                    </LinkedinShareButton>
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
