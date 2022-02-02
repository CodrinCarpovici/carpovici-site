import React from "react";

//Images
import underConstruction from "../assets/img/underConstruction.jpg";
import eurokit from "../assets/img/eurokit.png";
import faqCard from "../assets/img/faqCard.png";
import taskTracker from "../assets/img/taskTracker.png";
import projectsBg from "../assets/img/projectsBG.svg";
//Animations
import Flip from "react-reveal/Flip";
import { motion } from "framer-motion";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  // FAQ Accordion Card
  const openPopupboxFAQCard = () => {
    const content = (
      <>
        <img
          className="projects-img-popupbox"
          src={faqCard}
          alt="FAQ Accordion Card"
        />
        <p>
          This is a solution to the FAQ accordion card challenge on Frontend
          Mentor. Built using Vanilla JavaScript, semantic HTML5 markup and CSS
          custom properties.
        </p>
        <div className="pop-link">
          <b>GitHub:</b>{" "}
          <a
            className="hyper-link"
            href="https://github.com/CodrinCarpovici/FrontEnd-Projects/tree/main/faq-accordion-card-main"
            onClick={() =>
              window.open(
                "https://github.com/CodrinCarpovici/FrontEnd-Projects/tree/main/faq-accordion-card-main"
              )
            }
          >
            https://github.com/CodrinCarpovici/FrontEnd-Projects/tree/main/faq-accordion-card-main
          </a>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "FAQ Accordion Card",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const popupboxConfigFAQCard = {
    titleBar: {
      enable: true,
      text: "FAQ Accordion Card",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // React Task Tracker
  const openPopupboxTaskTracker = () => {
    const content = (
      <>
        <img
          className="projects-img-popupbox"
          src={taskTracker}
          alt="React Task Tracker"
        />
        <p>
          A fully functional Task Tracker built in React, using hooks, props,
          react-router and reusable components.{" "}
        </p>
        <div className="pop-link">
          <b>GitHub:</b>{" "}
          <a
            className="hyper-link"
            href="https://github.com/CodrinCarpovici/ReactJS-Practice/tree/main/react-task-tracker"
            onClick={() =>
              window.open(
                "https://github.com/CodrinCarpovici/ReactJS-Practice/tree/main/react-task-tracker"
              )
            }
          >
            https://github.com/CodrinCarpovici/ReactJS-Practice/tree/main/react-task-tracker
          </a>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "React Task Tracker",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const popupboxConfigTaskTracker = {
    titleBar: {
      enable: true,
      text: "React Task Tracker",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Eurokit Hidraulica
  const openPopupboxEurokit = () => {
    const content = (
      <>
        <img
          className="projects-img-popupbox"
          src={eurokit}
          alt="Eurokit Hidraulica..."
        />
        <p>Website built for a Hydraulics company based in Romania.</p>
        <p>
          In collaboration with a backend developer we had to make a full
          presentational website for <br />
          hydraulic products. The end result is a fully scalable website,
          mobile-friendly and easy to navigate.
        </p>
        <p>
          The tech stack is: ReactJS, Bootstrap and Custom SASS styling for the
          frontend, with a MySQL <br />
          and Symphony backend.
        </p>

        <div className="pop-link">
          <b>GitHub:</b>{" "}
          <a
            className="hyper-link"
            href="https://github.com/CodrinCarpovici/eurokit-hidraulica"
            onClick={() =>
              window.open(
                "https://github.com/CodrinCarpovici/eurokit-hidraulica"
              )
            }
          >
            https://github.com/CodrinCarpovici/eurokit-hidraulica
          </a>
        </div>
        <div className="pop-link">
          <b>Live Site:</b>{" "}
          <a
            className="hyper-link"
            href="https://eurokit.org/"
            onClick={() => window.open("https://eurokit.org/")}
          >
            https://eurokit.org/
          </a>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Eurokit Hidraulica",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const popupboxConfigEurokit = {
    titleBar: {
      enable: true,
      text: "Eurokit Hidraulica",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // UNDER CONSTRUCTION 4
  const openPopupboxUnderC4 = () => {
    const content = (
      <>
        <img
          className="projects-img-popupbox"
          src={underConstruction}
          alt="Under Construction..."
        />
        <p>Stay tuned for future projects! </p>
        <div className="pop-link">
          <b></b>{" "}
          <a className="hyper-link" href="#" onClick={() => window.open()}></a>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Coming Soon...",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  const popupboxConfigUnderC4 = {
    titleBar: {
      enable: true,
      text: "Coming Soon...",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="projects-wrapper">
      <div className="container">
        <div className="d-flex justify-content-center my-5">
          <Flip left cascade>
            <h1 className="text-uppercase text-center header">Projects</h1>
          </Flip>
        </div>
        <div className="img-box-wrapper row justify-content-center">
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col projects-img-box d-flex justify-content-center"
            onClick={openPopupboxEurokit}
          >
            <img
              className="projects-img"
              src={eurokit}
              alt="Eurokit Hidraulica..."
            ></img>
            <div className="overflow">
              <h3 className="hover-text-c text-center">Eurokit Hidraulica</h3>
            </div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </motion.div>
          {/* - */}
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col projects-img-box d-flex justify-content-center "
            onClick={openPopupboxFAQCard}
          >
            <img
              className="projects-img"
              src={faqCard}
              alt="FAQ Accordion Card"
            ></img>
            <div className="overflow">
              <h3 className="hover-text text-center">FAQ Card</h3>
            </div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </motion.div>

          {/* - */}
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col projects-img-box d-flex justify-content-center"
            onClick={openPopupboxTaskTracker}
          >
            <img
              className="projects-img"
              src={taskTracker}
              alt="React Task Tracker"
            ></img>
            <div className="overflow">
              <h3 className="hover-text-b text-center">Task Tracker</h3>
            </div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </motion.div>
          {/* - */}

          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col projects-img-box d-flex justify-content-center"
            onClick={openPopupboxUnderC4}
          >
            <img
              className="projects-img"
              src={underConstruction}
              alt="Under Construction..."
            ></img>
            <div className="overflow">
              <h3 className="hover-text-c text-center">Coming Soon...</h3>
            </div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </motion.div>
          {/* - */}
        </div>
        <PopupboxContainer {...popupboxConfigFAQCard} />
        <PopupboxContainer {...popupboxConfigTaskTracker} />
        <PopupboxContainer {...popupboxConfigEurokit} />
        <PopupboxContainer {...popupboxConfigUnderC4} />
      </div>
      <div className="img-wrapper">
        <img
          className="projects-bg-img"
          src={projectsBg}
          alt="projectsBG"
        ></img>
      </div>
    </div>
  );
};

export default Projects;
