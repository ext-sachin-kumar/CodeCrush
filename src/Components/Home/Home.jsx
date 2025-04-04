import { motion } from "framer-motion";
import RecommendationList from "../Recommendations/Recommendations";
import MotionDiv from "../Motion/MotionDiv";

const skills = [
  { name: "Node.js", level: 95 },
  { name: "JavaScript", level: 95 },
  { name: "Typescript", level: 90 },
  { name: "ReactJS", level: 85 },
  { name: "Python", level: 80 },
  { name: "Ruby on Rails", level: 85 },
  { name: "CI/CD", level: 80 },
  { name: "AWS", level: 86 },
  { name: "Docker", level: 85 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 86 },
  { name: "HTML & CSS", level: 95 },
];

const Home = ({ isSmallScreen }) => {
  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>
        {/* Introduction Section */}
        <div className="mb-10">
          <h1 className="text-2xl text-heading font-bold border-l-6 pl-4 border-blue-400">Hello, I am</h1>
          <p className="text-md mt-5 text-pretty text-primary">
Experienced Full-Stack Developer with 7+ years of expertise in designing, developing, and optimizing scalable web applications, APIs, and real-time systems. Proficient in cloud computing, microservices, DevOps, and CI/CD pipelines, with hands-on experience in containerization, automation, and infrastructure management. Skilled in building high-performance, secure, and user-centric solutions while leveraging modern development practices, agile methodologies, and best coding standards. Passionate about innovation, performance optimization, and delivering seamless digital experiences.
          </p>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        {/* Skills Section */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-heading border-l-6 border-blue-400 pl-4">Skills</h1>
          <ul className={`mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6`}>
            {skills.map((skill, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold mb-2 text-primary">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <MotionDiv index={index} key={index} classes={`bg-blue-400 h-1.5 rounded-full`} initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}></MotionDiv>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        {/* Testimonials Section */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-heading border-l-6 border-blue-400 pl-4">Testimonials</h1>
          <RecommendationList isSmallScreen={isSmallScreen} />
        </div>
      </div>
      {window.innerWidth <= 600 ? <div className="h-5"></div> : null}
    </div>
  );
};

export default Home;