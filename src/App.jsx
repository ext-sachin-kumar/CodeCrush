import { useState, useEffect, useContext } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import RoutingContextProvider, { RoutingContext } from './Components/Context/Routing-context';
import Portfolio from './Components/Portfolio/Portfolio';
import Project from './Components/Project/Project';
import Services from './Components/Services/Services';
import ResumeViewer from './Components/Resume/Resume';
import ContactForm from './Components/Contact/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "🧠 Complex is easy. Simple is hard.",
  "🎯 Code like nobody’s watching. Test like everyone is.",
  "🌀 Move fast, but don’t trip.",
  "🕶️ Smart devs write dumb-proof code.",
  "⚡ The cleanest code writes itself — after the 10th refactor.",
  "🔐 Trust your gut. Git your changes.",
  "🎭 Code is drama, version control is therapy.",
  "🧩 Every bug is a plot twist.",
  "🧊 Chill code > clever code.",
];


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth <= 800);
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);

    // Show a random quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 second quote splash
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <RoutingContextProvider>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="quote-screen"
            className="fixed inset-0 flex items-center justify-center bg-[rgb(var(--color-primary))] text-white text-2xl font-semibold px-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {quote}
          </motion.div>
        ) : (
          <div className="flex flex-row h-screen">
            <Sidebar isSmallScreen={isSmallScreen} />
            <Content isSmallScreen={isSmallScreen} />
          </div>
        )}
      </AnimatePresence>
    </RoutingContextProvider>
  );
}

function Content({ isSmallScreen }) {
  const { activeLink } = useContext(RoutingContext);
  const [showTransition, setShowTransition] = useState(false);
  const [prevLink, setPrevLink] = useState(activeLink);

  const quotes = [
    "🔄 Loading the next chapter...",
    "📂 Fetching your selection...",
    "🧭 Navigating to new territory...",
    "📸 Snapping to the next view...",
    "🎬 Scene change in progress...",
    "📡 Switching context...",
    "🧱 Building your next block...",
    "🚧 Reassembling the interface...",
    "🎛️ Tuning the layout...",
    "🚀 Jumping to the next module...",
  ];
  
  const [quote, setQuote] = useState("");

  useEffect(() => {
    if (activeLink !== prevLink) {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setShowTransition(true);
      const timeout = setTimeout(() => {
        setShowTransition(false);
        setPrevLink(activeLink);
      }, 500); // Show quote for 500ms
      return () => clearTimeout(timeout);
    }
  }, [activeLink]);

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const renderComponent = () => {
    const project = activeLink.split("-")[1];
    switch (activeLink) {
      case 'About me':
        return <Home isSmallScreen={isSmallScreen} />;
      case 'Portfolio':
        return <Portfolio isSmallScreen={isSmallScreen} />;
      case 'Services':
        return <Services isSmallScreen={isSmallScreen} />;
      case 'Resume':
        return <ResumeViewer isSmallScreen={isSmallScreen} />;
      case 'Contact':
        return <ContactForm isSmallScreen={isSmallScreen} />;
      default:
        if (activeLink.includes('Case study')) {
          return <Project isSmallScreen={isSmallScreen} project={project} />;
        }
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-auto relative bg-[rgb(var(--color-primary))]">
      <AnimatePresence mode="wait">
        {showTransition ? (
          <motion.div
            key="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-20 text-xl text-white backdrop-blur-sm bg-[rgb(var(--color-primary))]"
          >
            {quote}
          </motion.div>
        ) : (
          <motion.div
            key={activeLink}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 bg-[rgb(var(--color-primary))]"
          >
            {renderComponent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default App;
