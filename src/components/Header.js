import Typed from 'react-typed';
import Particles from 'react-particles-js';
import { Link } from 'react-scroll';

const Header = (props) => {
    return (
        
        <div className="header-wrapper">
            <Particles
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: 30
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
                    <h1>{props.title}</h1>
                    <Typed 
                        className="typed-string"
                        strings={["Web Design", "Frontend Development", "UI &#38; UX Design", "Web Development"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop    
                    />
                    <Link to="contacts" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'FrontEnd Web Development'
}

export default Header
