import { ContactRound, Home } from "lucide-react";
import { useContext } from 'react';
import SachinImage from '../../assets/IMG_1931-modified.png';
import { FaGithub, FaLinkedin, FaStackOverflow, FaPaperPlane, FaPhone, FaFileCode, FaBlog } from "react-icons/fa";
import { MdAlternateEmail, MdDesignServices } from 'react-icons/md';
import useTypingEffect from '../hooks/useTypingEffact';
import { RoutingContext } from "../Context/Routing-context";
import HireMe from "../Buttons/HireMe";


const SidebarContent = ({ isSmallScreen, closeSideBarModal }) => {
  const phone = useTypingEffect("+91 7733069356", 100);
  const email = useTypingEffect("sachin@code-crush.dev", 100);
  const { activeLink, onClickRoutes } = useContext(RoutingContext);

  return (
    <div className={`flex top-0 left-0 ${isSmallScreen ? 'w-full' : 'w-72'} text-primary h-screen overflow-y-auto bg-[rgb(var(--color-sidebar))] shadow-lg transition-all duration-300`}>
      <div className="flex flex-col items-center py-6 px-4">
        
        {/* Profile Section */}
        <h2 className="text-center text-heading font-extrabold text-2xl mb-3">Sachin Kumar</h2>
        <img
          src={SachinImage}
          alt="Profile"
          className="rounded-full object-cover w-24 h-24 border-2 border-blue-500"
        />

        {/* Contact Details */}
        <ul className="mt-4 flex flex-col items-center space-y-2 text-sm">
          <li className="flex items-center space-x-2">
            <FaPhone className="text-blue-400 w-4 h-4" />
            <span>{phone}</span>
          </li>
          <li className="flex items-center space-x-2">
            <MdAlternateEmail className="text-blue-400 w-4 h-4" />
            <span>{email}</span>
          </li>
        </ul>

        {/* Bio Section */}
        <div className="mt-4 px-4 text-center text-sm">
          <p>Full-Stack Developer with 7+ years of experience in Node.js, JavaScript, Ruby on Rails, React.js, and PostgreSQL.</p>
        </div>

        {/* Social Links */}
        <ul className="mt-6 flex space-x-5 text-blue-400">
          <SocialLink href="https://github.com/ext-sachin-kumar" icon={<FaGithub className="w-5 h-5" />} />
          <SocialLink href="https://linkedin.com/in/sachinykumar" icon={<FaLinkedin className="w-5 h-5"/>} />
          <SocialLink href="https://stackoverflow.com/users/6902208/sachin-yadav" icon={<FaStackOverflow className="w-5 h-5"/>} />
        </ul>

        {/* Navigation */}
        <nav className="mt-6 w-full">
          <NavItem icon={<Home className="w-5 h-5" />} label="About me" onClickRoutes={onClickRoutes} closeSideBarModal={closeSideBarModal} isActive={activeLink === "About me"} />
          <NavItem icon={<FaFileCode className="w-5 h-5"/>} label="Portfolio" onClickRoutes={onClickRoutes} closeSideBarModal={closeSideBarModal} isActive={activeLink === "Portfolio"} />
          <NavItem icon={<MdDesignServices className="w-5 h-5"/>} label="Services" onClickRoutes={onClickRoutes} closeSideBarModal={closeSideBarModal} isActive={activeLink === "Services"} />
          <NavItem icon={<FaPaperPlane className="w-5 h-5"/>} label="Resume" onClickRoutes={onClickRoutes} closeSideBarModal={closeSideBarModal} isActive={activeLink === "Resume"} />
          <NavItem icon={<ContactRound className="w-5 h-5"/>} label="Contact" onClickRoutes={onClickRoutes} closeSideBarModal={closeSideBarModal} isActive={activeLink === "Contact"} />
          {/* <NavItem icon={<FaBlog className="w-5 h-5 ml-1"/>} label="Blog" onClickRoutes={onClickRoutes} closeSideBarModal={closeSideBarModal} isActive={activeLink === "Blog"} /> */}
        </nav>

        <HireMe/>

      </div>
    </div>
  );
};

const NavItem = ({ icon, label, isActive, onClickRoutes, closeSideBarModal }) => (
  <button
    onClick={() => {onClickRoutes(label); closeSideBarModal()}}
    className={`flex items-center text-md w-full px-6 cursor-pointer py-3 text-left transition-all duration-200 rounded-md ${isActive ? 'text-accent' : 'hover:bg-[rgb(var(--color-primary))] hover:text-primary'}`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </button>
);

const SocialLink = ({ href, icon }) => (
  <a target='_blank' href={href} className="hover:text-white transition-all duration-200">
    {icon}
  </a>
);

export default SidebarContent;
