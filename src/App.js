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
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <AboutMe />
        <Projects />
        <Services />
        <Technologies />
        <Contacts />
        <Footer />
      </>
    </div>
  );
}

export default App;
