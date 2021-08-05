import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
//Animations
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <>
      
        <Navbar />

        <Fade>
        <Header />  
        <AboutMe />
        </Fade>

        <Projects />
        <Fade>
        <Technologies />
        <Services />
        <Contacts />
        </Fade>
        
        <Footer />
        
      </>
    </div>
  );
}

export default App;
