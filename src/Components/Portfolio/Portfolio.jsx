import { useState, useContext, useEffect } from "react";
import HeyjobsImage from '../../assets/heyjobs.png';
import NOZLImage from '../../assets/NOZL.jpeg'
import DianAppsImage from '../../assets/DianApps.png'
import LucentaSolutionsImage from '../../assets/lucentasolutions.png'
import { FaEye } from "react-icons/fa";
import { RoutingContext } from "../Context/Routing-context";
import MotionDiv from "../Motion/MotionDiv";

const PROJECTS = [
  { date: "April 2023 - Feb 2025", link: 'https://heyjobs.de', title: "HeyJobs", image: HeyjobsImage, description: "HeyJobs is a recruitment platform that helps companies find and hire the best talent quickly and efficiently. By simplifying the hiring process, HeyJobs makes it easier for employers to attract and engage candidates while enhancing the overall candidate experience. With seamless integrations into existing systems, HeyJobs offers a user-friendly solution for businesses of all sizes to streamline their hiring workflows." },
  { title: "NOZL", image: NOZLImage, link: "https://nozlapp.com", date: "June 2022 - Feb 2023", description: "NOZLapp is a platform that simplifies aviation fuel procurement. It allows operators to easily compare fuel prices from different FBOs and make quick reservations. The app streamlines the fuel purchasing process, offering better transparency, value, and service through user reviews and easy navigation." },
  { title: "DianApps", link: 'https://dianapps.com', date: 'Aug 2021 - June 2022', image: DianAppsImage, description: "DianApps is a leading web and mobile app development company, delivering innovative digital solutions to startups and enterprises worldwide." },
  { title: "Lucenta Solutions", link: 'https://lucentasolutions.com', date: 'Jan 2018 - Aug 2021', image: LucentaSolutionsImage, description: "**Lucenta Solutions** is a web and mobile app development company offering services like CRM/ERP solutions, web and mobile development, and blockchain technology. With expertise in technologies like Salesforce, Node.js, and Java, they deliver innovative solutions across industries such as real estate, finance, and education, ensuring client satisfaction through professional and tailored services." },
];

export default function Portfolio({ isSmallScreen }) {
  const { onClickRoutes } = useContext(RoutingContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <StyleSheet />
      <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
        <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-5 sm:p-10`}>
          <div className="mb-10 text-center">
            <h1 className="text-2xl text-heading">Portfolio</h1>
            <p className="text-md mt-5 text-pretty text-primary">
              Turning Ideas into Scalable, High-Performance Solutions.<br />
              Welcome to my portfolio! Here, you'll find a collection of projects that showcase my expertise in software development, backend architecture, and seamless integrations. From building robust APIs to optimizing system performance, I take pride in crafting solutions that are efficient, scalable, and user-friendly.
              Let’s build something amazing together! 🚀
            </p>
          </div>

          <div className="relative">
            {/* Timeline central line - hidden on small screens */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 h-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} ${isSmallScreen ? 'hidden' : ''}`}
              style={{ transformOrigin: 'top' }}
            ></div>

            <div className="relative space-y-12">
              {PROJECTS.map((project, index) => (
                <MotionDiv
                  key={index}
                  index={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {isSmallScreen ? (
                    <div className="flex flex-col items-center">
                      <div
                        className="text-muted text-sm mb-2 animate-slide-in-up"
                        style={{
                          animation: 'slideInUp 0.8s ease-out forwards',
                          animationDelay: `${index * 0.3}s`
                        }}
                      >
                        {project.date}
                      </div>
                      <div
                        className="w-full max-w-md animate-slide-in-up"
                        style={{
                          animation: 'slideInUp 0.8s ease-out forwards',
                          animationDelay: `${index * 0.3 + 0.1}s`
                        }}
                      >
                        <TimelineCard
                          image={project.image}
                          title={project.title}
                          description={project.description}
                          onClickRoutes={onClickRoutes}
                          link={project.link}
                          isSmallScreen={isSmallScreen}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center relative">
                      {index % 2 === 0 ? (
                        <>
                          <div
                            className="w-1/2 pr-8 animate-slide-in-left"
                            style={{
                              animation: 'slideInLeft 0.8s ease-out forwards',
                              animationDelay: `${index * 0.3}s`
                            }}
                          >
                            <TimelineCard
                              image={project.image}
                              title={project.title}
                              description={project.description}
                              onClickRoutes={onClickRoutes}
                              link={project.link}
                              isSmallScreen={isSmallScreen}
                            />
                          </div>
                          <div
                            className="w-1/2 pl-8 text-left animate-slide-in-right"
                            style={{
                              animation: 'slideInRight 0.8s ease-out forwards',
                              animationDelay: `${index * 0.3}s`
                            }}
                          >
                            <p className="text-muted text-sm">{project.date}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="w-1/2 pr-8 text-right animate-slide-in-left"
                            style={{
                              animation: 'slideInLeft 0.8s ease-out forwards',
                              animationDelay: `${index * 0.3}s`
                            }}
                          >
                            <p className="text-muted text-sm">{project.date}</p>
                          </div>
                          <div
                            className="w-1/2 pl-8 animate-slide-in-right"
                            style={{
                              animation: 'slideInRight 0.8s ease-out forwards',
                              animationDelay: `${index * 0.3}s`
                            }}
                          >
                            <TimelineCard
                              image={project.image}
                              title={project.title}
                              description={project.description}
                              onClickRoutes={onClickRoutes}
                              link={project.link}
                              isSmallScreen={isSmallScreen}
                            />
                          </div>
                        </>
                      )}
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgb(var(--color-sidebar))] rounded-full z-10 border-2 border-gray-800 animate-grow"
                        style={{
                          animation: 'grow 0.5s ease-out forwards',
                          animationDelay: `${index * 0.3 + 0.2}s`
                        }}
                      ></div>
                    </div>
                  )}
                </MotionDiv>
              ))}
            </div>
          </div>
          <div className="mt-20 text-center">
            <h2 className="text-xl text-heading font-bold tracking-tight">✨ The Next Big Thing?</h2>
            <p className="text-lg text-primary mt-3">Let's make your vision the next highlight on this journey.</p>
            <button
              onClick={() => onClickRoutes('Contact')}
              className="mt-5 px-6 py-3 rounded-full bg-[rgb(var(--color-sidebar))] hover:bg-opacity-80 transition text-heading text-sm font-semibold"
            >
              Start Your Project 🚀
            </button>
          </div>
        </div>
        {window.innerWidth <= 600 ? <div className="h-10"></div> : null}
      </div>
    </>
  );
}

const TimelineCard = ({ image, title, description, onClickRoutes, link, isSmallScreen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full bg-[rgb(var(--color-secondary))] overflow-hidden relative rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} className="w-full h-40 object-cover" alt={title} />
      <div className="p-4">
        <h2
          className="text-lg text-heading font-semibold underline cursor-pointer"
          onClick={() => { onClickRoutes(`Case study - ${title}`) }}
        >
          {title}
        </h2>
        <p className="mt-5 text-gray-400 text-sm">{description}</p>
      </div>

      {isHovered && !isSmallScreen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="flex space-x-4">
            <button
              onClick={() => { onClickRoutes(`Case study - ${title}`) }}
              className="relative text-sm text-heading flex items-center bg-[rgb(var(--color-sidebar))] hover:bg-opacity-80 focus:ring-2 focus:ring-white rounded-lg px-4 py-2.5 transition-all duration-300 animate"
            >
              <FaEye className="mr-2" /> View Case Study
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm text-heading flex items-center bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-white rounded-lg px-4 py-2.5 transition-all duration-300 animate"
            >
              🌐 Live Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// Updated CSS keyframes
const styles = `
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    80% {
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    80% {
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes grow {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }

  .animate-slide-in-up {
    animation: slideInUp 0.8s ease-out forwards;
  }

  .animate-grow {
    animation: grow 0.5s ease-out forwards;
  }

  .animate-bounce-in {
    animation: bounceIn 0.5s ease-out forwards;
  }
`;

const StyleSheet = () => <style>{styles}</style>;

// Add <StyleSheet /> to your render if using CSS-in-JS