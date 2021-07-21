import React from 'react'
import underConstruction from '../assets/img/underConstruction.jpg'
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupManager, PopupboxContainer, PopupboxManager } from 'react-popupbox'

import "react-popupbox/dist/react-popupbox.css"



const Projects = () => {

    // UNDER CONSTRUCTION
    const openPopupboxUnderC = () => {

        const content = (
            <>
                <img className="projects-img-popupbox" src={underConstruction} alt="Under Construction..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quis eros nibh. Nulla purus ligula, suscipit lacinia odio volutpat,
                    tristique condimentum sapien. </p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("http://localhost:3000")}>http://localhost:3000</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigUnderC = {
        titleBar: {
            enable: true,
            text: "Under Construction..."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // UNDER CONSTRUCTION 2
    const openPopupboxUnderC2 = () => {

        const content = (
            <>
                <img className="projects-img-popupbox" src={underConstruction} alt="Under Construction..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quis eros nibh. Nulla purus ligula, suscipit lacinia odio volutpat,
                    tristique condimentum sapien. </p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("http://localhost:3000")}>http://localhost:3000</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigUnderC2 = {
        titleBar: {
            enable: true,
            text: "Under Construction..."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // UNDER CONSTRUCTION 3
    const openPopupboxUnderC3 = () => {

        const content = (
            <>
                <img className="projects-img-popupbox" src={underConstruction} alt="Under Construction..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quis eros nibh. Nulla purus ligula, suscipit lacinia odio volutpat,
                    tristique condimentum sapien. </p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("http://localhost:3000")}>http://localhost:3000</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigUnderC3 = {
        titleBar: {
            enable: true,
            text: "Under Construction..."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // UNDER CONSTRUCTION 4
    const openPopupboxUnderC4 = () => {

        const content = (
            <>
                <img className="projects-img-popupbox" src={underConstruction} alt="Under Construction..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quis eros nibh. Nulla purus ligula, suscipit lacinia odio volutpat,
                    tristique condimentum sapien. </p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("http://localhost:3000")}>http://localhost:3000</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigUnderC4 = {
        titleBar: {
            enable: true,
            text: "Under Construction..."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    return (
        <div className="projects-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="img-box-wrapper row justify-content-center">
                    <div className="col projects-img-box" onClick={openPopupboxUnderC}>
                        <img className="projects-img" src={underConstruction} alt="Under Construction...">
                        </img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="projects-icon" icon={faSearchPlus}></FontAwesomeIcon>
                    </div>

                    {/* - */}
                    <div className="col projects-img-box" onClick={openPopupboxUnderC2}>
                        <img className="projects-img" src={underConstruction} alt="Under Construction...">
                        </img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="projects-icon" icon={faSearchPlus}></FontAwesomeIcon>
                    </div>
                    {/* - */}
                    <div className="col projects-img-box" onClick={openPopupboxUnderC3}>
                        <img className="projects-img" src={underConstruction} alt="Under Construction...">
                        </img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="projects-icon" icon={faSearchPlus}></FontAwesomeIcon>
                    </div>
                    {/* - */}
                    <div className="col projects-img-box" onClick={openPopupboxUnderC4}>
                        <img className="projects-img" src={underConstruction} alt="Under Construction...">
                        </img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="projects-icon" icon={faSearchPlus}></FontAwesomeIcon>
                    </div>
                    {/* - */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigUnderC} />
            <PopupboxContainer {...popupboxConfigUnderC2} />
            <PopupboxContainer {...popupboxConfigUnderC3} />
            <PopupboxContainer {...popupboxConfigUnderC4} />
        </div>
    )
}

export default Projects

