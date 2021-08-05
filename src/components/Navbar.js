import logo from '../assets/img/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';
//REACT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const hideMenu = document.getElementById("navbarSupportedContent");
        hideMenu.classList.remove("show");
        const handleToggler = document.getElementById("toggler");
        handleToggler.classList.add("collapsed");
    }

    const handleState = (e) => {
        e.preventDefault();
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <nav className="navbar transparent navbar-expand-lg navbar-light fixed-top">
            <div className="container">

                <a className="navbar-brand" href="home"><img className='logo' src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" id="toggler" onClick={handleState} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="hamburger" icon={faBars} />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto nav-links">
                        <li className="nav-item active" >

                            <Link onClick={handleClick} to="home" offset={-95} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={handleClick} to="about" offset={-196} className="nav-link" >About Me</Link>
                        </li>
                        <li className="nav-item" >
                            <Link onClick={handleClick} to="projects" offset={0} className="nav-link" >Projects</Link>
                        </li>
                        <li className="nav-item" >
                            <Link onClick={handleClick} to="technologies" offset={-95} className="nav-link" >Technologies</Link>
                        </li>
                        <li className="nav-item" >
                            <Link onClick={handleClick} to="services" offset={-250} className="nav-link" >Services</Link>
                        </li>
                        <li className="nav-item" >
                            <Link onClick={handleClick} to="contacts" offset={-15} className="nav-link" >Contacts</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
