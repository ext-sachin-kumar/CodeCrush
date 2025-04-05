import React, { useCallback, useMemo, memo } from "react";
import { FaDownload } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail, MdPhone } from "react-icons/md";
import EXPERIENCE from "../data/experience";
import { FaFilePdf } from "react-icons/fa";

const Resume = memo(({ isSmallScreen }) => {
  // Use useCallback to prevent function re-creation on re-renders
  const downloadExperienceData = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/sachin-kumar-resume.pdf"; // Ensure correct path in the public folder
    link.download = "sachin-kumar-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-10'} p-10`}>

        {/* Download Button */}
        <div className="flex justify-center items-center mb-10">
          <button
            type="button"
            onClick={downloadExperienceData}
            className="flex items-center text-primary cursor-pointer gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
            aria-label="Download Resume"
          >
            Download Resume
            <FaDownload className="text-lg text-primary w-4 h-4" />
          </button>
        </div>

        {/* Resume Content */}
        <div className="w-full bg-[rgb(var(--color-secondary))] p-8 rounded-lg shadow-lg">

          {/* Header */}
          <div className="mb-5 lg:flex lg:flex-row md:flex-col justify-between items-start">
            <div>
              <h1 className="text-3xl text-heading font-bold">Sachin Kumar</h1>
              <p className="mt-2 text-primary">Full Stack Developer</p>
            </div>
            <div className="flex flex-col">
              <ContactInfo icon={MdEmail} text="sachin@code-crush.dev" />
              <ContactInfo icon={MdPhone} text="+91-7733069356" />
              <ContactInfo icon={LiaLinkedinIn} text="linkedin.com/in/sachin-codecrush" />
            </div>
          </div>

          {/* Summary */}
          <SectionTitle title="Summary" />
          <p className="mb-5 text-primary text-sm leading-relaxed">
            Experienced Full Stack Developer with over 7 years of expertise in designing and
            optimizing scalable web applications. Skilled in developing high-performance APIs,
            building dynamic user interfaces, and implementing real-time functionalities.
            Proficient in multiple backend and frontend technologies, relational and NoSQL databases,
            cloud services, and containerized environments. Passionate about writing clean,
            maintainable code and leveraging modern development practices to enhance efficiency,
            security, and scalability.
          </p>

          <Divider />

          {/* Skills Section */}
          <SkillsList />

          <Divider />

          {/* Experience Section */}
          <SectionTitle title="Experience" />

          <div className="relative border-l-2 border-gray-500 pl-6">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>

          <Divider />

          {/* Key Achievements */}
          <SectionTitle title="Key Achievements" />
          <ul className="mb-5 list-disc list-inside text-primary text-sm space-y-2">
            <AchievementItem
              title="Pipeline Optimization Success:"
              description="Optimized job processing speed by 30%, handling over 100K job listings monthly."
            />
            <AchievementItem
              title="Record Processing Milestone:"
              description="Achieved 10M+ records processed per day in backend system."
            />
            <AchievementItem
              title="API Performance Boost:"
              description="Improved API response time by 40% for enterprise applications."
            />
            <AchievementItem
              title="Quality Assurance Excellence:"
              description="Reduced software defects by 98%, increasing product reliability."
            />
          </ul>

          <Divider />

          {/* Education Section */}
          <SectionTitle title="Education" />
          <p className="text-sm text-primary">Bachelor of Technology in Computer Science | 2014 - 2018</p>
        </div>
      </div>
      {window.innerWidth <= 600 ? <div className="h-10"></div> : null}
    </div>
  );
});

// Reusable Components

const ContactInfo = ({ icon: Icon, text }) => (
  <p className="text-md text-primary mt-2 flex items-center gap-2">
    <Icon className="text-lg" />
    {text}
  </p>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-lg font-semibold text-heading pb-2">{title}</h2>
);

const Divider = () => <div className="border-b border-gray-800 mb-5"></div>;

const ExperienceItem = ({ exp }) => (
  <div className="relative mb-8 text-sm">
    <span className="absolute -left-[1.95rem] top-1 w-3 h-3 bg-gray-400 rounded-full"></span>
    <p className="text-primary">{exp.duration}</p>
    <h4 className="font-bold text-primary">{exp.role}</h4>
    <h5 className="font-semibold text-muted">{exp.company}</h5>
    <ul className="list-disc pl-5 text-primary mt-2 space-y-1">
      {exp.responsibilities.map((task, idx) => (
        <li key={idx}>
          <span className="font-bold text-heading">{task.highlight}</span> {task.description}
        </li>
      ))}
    </ul>
  </div>
);

const AchievementItem = ({ title, description }) => (
  <li>
    <span className="text-heading">{title}</span> {description}
  </li>
);

// Memoized Skills Data for Better Performance
const SkillsList = () => {
  const skills = useMemo(() => ({
    Backend: ['Node.js', 'PostgreSQL', 'Typescript', 'Ruby on Rails', 'Python', 'Jest', 'Mocha', 'Rspec'],
    Frontend: ['React.js', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
    Tools: ['AWS', 'Digital Ocean', 'CircleCI', 'Git', 'Docker', 'Datadog', 'Sentry'],
  }), []);

  return (
    <div>
      {Object.entries(skills).map(([title, skills]) => (
        <SkillSection key={title} title={title} skills={skills} />
      ))}
    </div>
  );
};

const SkillSection = ({ title, skills }) => (
  <div className="mb-5">
    <SectionTitle title={title} />
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span key={index} className="bg-[rgb(var(--color-sidebar))] text-primary px-4 py-2 rounded-md text-sm font-semibold">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Resume;
