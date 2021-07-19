import Typed from 'react-typed';

const Header = (props) => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                    <h1>{props.title}</h1>
                    <Typed 
                        className="typed-string"
                        strings={["Web Design", "Frontend Development", "UI &#38; UX Design", "Web Development"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop    
                    />
                    <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'FrontEnd Web Development'
}

export default Header
