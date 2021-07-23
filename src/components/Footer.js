import React from 'react'
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
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>London</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:00447472272377">+447472272377</a>
                        </div>
                        <div className="d-flex">
                            <p>codrincarpovici@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About Me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Technologies</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
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
                </div>
            </div>

        </div >
    )
}

export default Footer
