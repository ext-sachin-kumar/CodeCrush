import { FaCode, FaMobileAlt, FaCloud, FaDatabase, FaCogs, FaSalesforce } from "react-icons/fa";
import { motion } from "framer-motion";
import MotionDiv from "../Motion/MotionDiv";

const services = [
  { name: "Web Development", icon: <FaCode className="text-blue-400 text-4xl" />, description: "Building scalable and high-performance web applications using modern frameworks." },
  { name: "Mobile Development", icon: <FaMobileAlt className="text-green-400 text-4xl" />, description: "Creating responsive and user-friendly mobile applications for iOS and Android." },
  { name: "Cloud Services", icon: <FaCloud className="text-indigo-400 text-4xl" />, description: "Deploying and managing applications on cloud platforms like AWS, GCP, and Azure." },
  { name: "Database Management", icon: <FaDatabase className="text-purple-400 text-4xl" />, description: "Designing and optimizing databases for efficiency and scalability." },
  { name: "DevOps & Automation", icon: <FaCogs className="text-yellow-400 text-4xl" />, description: "Implementing CI/CD pipelines, automation, and infrastructure as code." },
  { name: "Salesforce Integration", description: "Seamless CRM solutions and automation.", icon: <FaSalesforce className="text-blue-500 text-3xl" /> }
];

const Services = ({ isSmallScreen }) => {
  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>

        <div className="mb-10 text-center">
          <h1 className="text-2xl text-heading">Services</h1>
          <p className="mt-5 text-primary">
            I have 7+ years of development experience building software for the web and mobile devices.
            Check out my <span className="text-accent underline cursor-pointer" onClick={() => { onClickRoutes('Portfolio') }} >Portfolio</span> and <a href="https://linkedin.com/in/sachin-codecrush" className="text-accent underline"> Linkedin </a>
            to learn more about my work and experiences.
          </p>
          <p className="mt-4 text-primary">
            I offer freelance software development services. Get in touch for a custom quote tailored to your needs.
          </p>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        <div className="mb-10">
          <div className={`mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6`}>
            {services.map((service, index) => (
              <MotionDiv key={index} index={index} classes={`bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center`} >
                {service.icon}
                <h2 className="text-xl font-semibold text-white mt-4">{service.name}</h2>
                <p className="text-gray-400 mt-2">{service.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
      {window.innerWidth <= 600 ? <div className="h-5"></div> : null}
    </div>
  );
};

export default Services;
