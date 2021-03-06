import Particles from 'react-particles-js';
import { Link } from 'react-scroll';
import headerBG from '../assets/img/headerBG.svg'

import {motion} from 'framer-motion'

const Header = () => {
  return (

    <div className="header-wrapper">
      <img className="headerBG" src={headerBG} alt="header-Background"></img>
      
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60
            },
            density: {
              enable: true,
              value_area: 900
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#7732e6"
              }
            }
          }
        }}
      />
      <div id="home" className="main-info">
      <div className="overlay d-flex justify-content-center"></div>
        <h1>Hi I'm a <br/>Web Developer,</h1>
        <Link to="about" offset={-196} className="px-btn theme" >About Me</Link>
        <Link 
        to="contacts" className="btn-main-offer">Contact Me</Link>
      </div>
    </div>
  )
}



export default Header
