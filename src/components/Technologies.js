import React from 'react'
import technologiesBG from '../assets/img/technologiesBG.svg'

const Technologies = () => {
    return (
        <div id="technologies" className="technologies">
            <div className="technologies-bg-wrapper row flex-row">
                <img className="technologies-bg rounded float-left" src={technologiesBG} alt="technologiesBG"></img>
            </div>
            <div className="overlay"></div>
            <div className="d-flex justify-content-center my-5">
                <h1 className="header">Technologies</h1>
            </div>
            <div className="container technologies-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3 className="header">JS, HTML, CSS</h3>
                        <div className="timeline-txt">
                            <p>Using online resources I've gone through everything from the basics of these core tools to more advanced features they provide.</p>
                            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/CodrinCarpovici/JS-HTML-CSS-Learning")}>https://github.com/CodrinCarpovici/JS-HTML-CSS-Learning</a>
                        </div>
                    </div>
                </div>

                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3 className="header">ReactJS</h3>
                        <div className="timeline-txt">
                            <p>Knowledge of reusable components, react hooks, props and the rest of its functionalities.</p>
                            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/CodrinCarpovici/FrontEnd-Projects")}>https://github.com/CodrinCarpovici/FrontEnd-Projects</a>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3 className="header">Bootstrap</h3>
                        <div className="timeline-txt">
                            <p>Knowledge of Boostrap's grid system and the variety of useful components that come with the framework.</p>
                            <p>This website was largely structured using boostrap's grid system.</p>
                            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/CodrinCarpovici/carpovici-site")}>https://github.com/CodrinCarpovici/carpovici-site</a>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3 className="header">NodeJS</h3>
                        <div className="timeline-txt">
                        <p>Good understanding of file systems, streams and setting up a server using NodeJS.</p>
                        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/CodrinCarpovici/JS-HTML-CSS-Learning/tree/master/NodeJS")}>https://github.com/CodrinCarpovici/JS-HTML-CSS-Learning/tree/master/NodeJS</a>                           
                        </div>
                    </div>
                </div>
                {/* - */}
            </div>
        </div >
    )
}

export default Technologies
