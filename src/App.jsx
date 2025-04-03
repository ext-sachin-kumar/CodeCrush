import { useState, useEffect, useContext } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import RoutingContextProvider, { RoutingContext } from './Components/Context/Routing-context';
import Portfolio from './Components/Portfolio/Portfolio';
import Project from './Components/Project/Project';
import Services from './Components/Services/Services';
import ResumeViewer from './Components/Resume/Resume';
import ContactForm from './Components/Contact/Contact';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <RoutingContextProvider>
      <div className="flex flex-row h-screen">
        <Sidebar isSmallScreen={isSmallScreen} ></Sidebar>
        <Content isSmallScreen={isSmallScreen} />
      </div>
    </RoutingContextProvider>
  )
}


function Content({ isSmallScreen }) {
  const { activeLink } = useContext(RoutingContext);  // Now inside provider
  const project = (activeLink.split("-"))[1]
  return (
    <>
      {activeLink === 'About me' && <Home isSmallScreen={isSmallScreen} />}
      {activeLink === 'Portfolio' && <Portfolio isSmallScreen={isSmallScreen} />}
      {activeLink.includes('Case study') && <Project isSmallScreen={isSmallScreen} project={project} />}
      {activeLink === 'Services' && <Services isSmallScreen={isSmallScreen} />}
      {activeLink === 'Resume' && <ResumeViewer isSmallScreen={isSmallScreen}/> }
      {activeLink === 'Contact' && <ContactForm isSmallScreen={isSmallScreen}/> }
    </>
  );
}


export default App
