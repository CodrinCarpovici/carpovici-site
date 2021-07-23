import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
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
        <Navbar />
        <Header />
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Contacts />
        <Footer />
      </>
    </div>
  );
}

export default App;
