import { useState, useContext } from "react";
import HeyjobsImage from '../../assets/heyjobs.png';
import NOZLImage from '../../assets/NOZL.jpeg'
import TrustSignalImage from '../../assets/Trustsignal.jpeg'
import LucentaSolutionsImage from '../../assets/lucentasolutions.png'
import { FaEye } from "react-icons/fa";
import { RoutingContext } from "../Context/Routing-context";
import MotionDiv from "../Motion/MotionDiv";

const PROJECTS = [
  { date: "April 2023 - Feb 2025", link:'https://heyjobs.de', title: "HeyJobs", image: HeyjobsImage, description: "HeyJobs is a recruitment platform that helps companies find and hire the best talent quickly and efficiently. By simplifying the hiring process, HeyJobs makes it easier for employers to attract and engage candidates while enhancing the overall candidate experience. With seamless integrations into existing systems, HeyJobs offers a user-friendly solution for businesses of all sizes to streamline their hiring workflows." },
  { title: "NOZL", image: NOZLImage, link:"https://nozlapp.com", date: "June 2022 - Feb 2023", description: "NOZLapp is a platform that simplifies aviation fuel procurement. It allows operators to easily compare fuel prices from different FBOs and make quick reservations. The app streamlines the fuel purchasing process, offering better transparency, value, and service through user reviews and easy navigation." },
  { title: "Trustsignal", link: 'https://trustsignal.io', date: 'Aug 2021 - June 2022', image: TrustSignalImage, description: "TrustSignal.io is a platform that helps businesses engage with customers through multiple communication channels, including SMS, email, WhatsApp, and voice calls. It offers easy API integrations, customizable solutions, and reliable global delivery, making it ideal for businesses of all sizes. TrustSignal enables seamless, multi-channel communication, helping companies build stronger relationships with customers and improve their overall engagement strategies." },
  { title: "Lucenta Solutions", link:'https://lucentasolutions.com', date: 'Jan 2018 - Aug 2021', image: LucentaSolutionsImage, description: "**Lucenta Solutions** is a web and mobile app development company offering services like CRM/ERP solutions, web and mobile development, and blockchain technology. With expertise in technologies like Salesforce, Node.js, and Java, they deliver innovative solutions across industries such as real estate, finance, and education, ensuring client satisfaction through professional and tailored services." },
];

export default function Portfolio({ isSmallScreen }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { onClickRoutes } = useContext(RoutingContext)

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>
        <div className="mb-10 text-center">
          <h1 className="text-2xl text-heading">Portfolio</h1>
          <p className="text-md mt-5 text-pretty text-primary">
            Turning Ideas into Scalable, High-Performance Solutions.<br />
            Welcome to my portfolio! Here, you'll find a collection of projects that showcase my expertise in software development, backend architecture, and seamless integrations. From building robust APIs to optimizing system performance, I take pride in crafting solutions that are efficient, scalable, and user-friendly.
            Let’s build something amazing together! 🚀
          </p>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        <div className={`mb-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6`}>
          {
            filteredProjects.map((ele, index) => (
              <MotionDiv
              index={index}
            >
              <Card key={index}
                onClickRoutes={onClickRoutes}
                isSmallScreen={isSmallScreen}
                title={ele.title}
                link={ele.link}
                description={ele.description}
                client={ele.client}
                image={ele.image}
                date={ele.date}
              />
              </MotionDiv>
            ))
          }
        </div>
      </div>
      {window.innerWidth <= 600 ? <div className="h-10"></div> : null}
    </div>
  );
}

const Card = ({ image, title, description, onClickRoutes, date, isSmallScreen, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mt-2 h-full bg-[rgb(var(--color-secondary))] overflow-hidden relative rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
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
        <p className="mt-5 text-gray-400">{description}</p>
        <div className="mt-4 text-sm">
          <p className="text-muted">{date}</p>
        </div>
      </div>

      {isHovered && !isSmallScreen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="flex space-x-4">
            <button
              onClick={() => { onClickRoutes(`Case study - ${title}`) }}
              className="relative text-sm text-heading flex items-center bg-[rgb(var(--color-sidebar))] hover:bg-opacity-80 focus:ring-2 focus:ring-white rounded-lg px-4 py-2.5 transition-all duration-300"
            >
              <FaEye className="mr-2" /> View Case Study
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm text-heading flex items-center bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-white rounded-lg px-4 py-2.5 transition-all duration-300"
            >
               🌐 Live Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};