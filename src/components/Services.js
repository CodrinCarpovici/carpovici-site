import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode, faMobile } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5"> My Services </h1>
            <div className="container">
                <div className="row  justify-content-md-center">
                    <div className="col-md">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon"icon={faFileCode} size="2x" />
                            </div>
                            <h3>Web Development</h3>
                            <p>Building Web applications with proven technologies at the latest standard</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon"icon={faDesktop} size="2x" />
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>Creating responsive designs &#38; meeting users' needs</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon"icon={faMobile} size="2x" />
                            </div>
                            <h3>Mobile-Friendly</h3>
                            <p>Responsive applications for all different devices, with a mobile-first approach</p>
                        </div>
                    </div>
                    {/* - */}
                </div>
            </div>
        </div>
    )
}

export default Services
