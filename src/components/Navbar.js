import logo from '../assets/logo/logo_small.png';
import { Link } from 'react-scroll';
//REACT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar transparent navbar-expand-lg navbar-light fixed-top">
            <div className="container">

                <a className="navbar-brand" href="home"><img className='logo' src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="hamburger" icon={faBars} />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">

                            <Link to="home" offset={-95} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" offset={-95} className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" offset={-95} className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="services" offset={-95} className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="technologies" offset={-95} className="nav-link">Technologies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contacts" offset={-95} className="nav-link">Contacts</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
