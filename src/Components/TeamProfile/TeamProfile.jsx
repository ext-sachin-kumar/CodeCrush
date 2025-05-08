import { motion } from "framer-motion";
import RecommendationList from "../Recommendations/Recommendations";
import MotionDiv from "../Motion/MotionDiv";
import { useState, useContext, useEffect } from "react";
import { RoutingContext } from "../Context/Routing-context";

const teamMembers = [
  { 
    name: "Sachin Kumar",
    Skills: [

    ],
		image: "/public/chintu.jpg",
    link: "About me"
  },
  { 
    name: "Chintu Yadav",
    Skills: [

    ],
		image: "/public/chintu.jpg",
    link: "chintu"
  },
  { 
    name: "Vikki Don",
    Skills: [

    ],
		image: "/public/chintu.jpg",
    link: "Vikki"
  }
];

const TeamProfile = ({ isSmallScreen }) => {
  const { onClickRoutes } = useContext(RoutingContext);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>
        {/* Introduction Section */}
        <div className="mb-10">
          <p className="text-md mt-5 text-pretty text-primary">
          We are a strong, dedicated team of full-stack developers committed to building scalable, secure, and user-focused digital solutions. With a shared passion for clean architecture, modern technologies, and seamless user experiences, we collaborate closely to deliver high-quality software that meets real-world needs. Our approach is grounded in agile principles, continuous improvement, and a culture of innovation and accountability.
          </p>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        {/* Skills Section */}
        <div className="mb-10 flex flex-wrap gap-4">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="flex-1 min-w-[200px] bg-gray-700 hover:bg-gray-800 text-white rounded-lg p-4 transition-colors duration-300"
              onClick={() => onClickRoutes(member.link)}
						>
							<div className="flex items-start gap-4">
								<img
									src={member.image}
									alt={member.name}
									className="w-25 h-25 rounded-full object-cover"
								/>

                <div className="flex flex-col ml-10 justify-end">
                  <span className="text-lg font-semibold">{member.name}</span>
                  {/* You can add more info here if needed */}
                </div>

								
							</div>
						</div>
					))}
				</div>

        <div className="border-b border-gray-800 mb-10"></div>

      </div>
      {window.innerWidth <= 600 ? <div className="h-5"></div> : null}
    </div>
  );
};

export default TeamProfile;