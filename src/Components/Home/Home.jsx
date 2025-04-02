import { motion } from "framer-motion";
import RecommendationList from "../Recommendations/Recommendations";

const skills = [
  { name: "Node.js", level: 95 },
  { name: "JavaScript", level: 95 },
  { name: "ReactJS", level: 85 },
  { name: "Python", level: 80 },
  { name: "MongoDB", level: 86 },
  { name: "Ruby on Rails", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "HTML & CSS", level: 95 },
];

const Home = ({ isSmallScreen }) => {
  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto" style={{ backgroundColor: "#111821" }}>
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>
        {/* Introduction Section */}
        <div className="mb-10">
          <h1 className="text-2xl text-heading font-bold border-l-6 pl-4 border-blue-400">Hello, I am</h1>
          <p className="text-md mt-5 text-pretty text-primary">
            Experienced Full Stack Developer with over 7 years of expertise in designing and optimizing scalable web applications. Proficient in
            Node.js, Ruby on Rails, React.js, AWS, and PostgreSQL. Passionate about creating high-performance APIs, implementing real-time applications,
            and delivering robust frontend and backend solutions. Adept at CI/CD pipelines, Docker, AWS, and modern development methodologies.
            Committed to innovation, efficiency, and quality assurance.
          </p>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        {/* Skills Section */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-heading border-l-6 border-blue-400 pl-4">Skills</h1>
          <ul className={`mt-5 grid ${isSmallScreen ? 'grid-cols-2 gap-6' : 'grid-cols-4 gap-4'}`}>
            {skills.map((skill, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold mb-2 text-primary">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-blue-400 h-1.5 rounded-full"
                  ></motion.div>
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
      { window.innerWidth <= 600 ? <div className="h-10"></div> : null }
    </div>
  );
};

export default Home;