import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode, faMobile } from '@fortawesome/free-solid-svg-icons'
import servicesBG from '../assets/img/servicesBG.svg'

const Services = () => {
    return (
        <div id="services" className="services">
             <div className="d-flex justify-content-center my-5">
            <h1 className="header"> My Services </h1>
             </div>
             <div className="services-bg-wrapper row flex-row justify-content-center mb-5">
                 <img className="services-bg" src={servicesBG} alt="servicesBG"></img>
             </div>
            <div className="container">
                <div className="row  justify-content-md-center">
                    <div className="col-md">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon"icon={faFileCode} size="2x" />
                            </div>
                            <h3>Web Development</h3>
                            <p>Building Web applications using proven technologies at the latest standard</p>
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
