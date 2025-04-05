import HeyjobsImage from '../../assets/heyjobs.png';
import NOZLImage from '../../assets/NOZL.jpeg'
import TrustSignalImage from '../../assets/Trustsignal.jpeg'
import LucentaSolutionsImage from '../../assets/lucentasolutions.png'
import RECOMMENDATIONS from './recommendations';

const CASE_STUDY_DATA = {
  HeyJobs: {
    image: HeyjobsImage,
    intro: "Hiring the right talent quickly can be challenging. HeyJobs addresses this by providing an AI-powered recruitment platform that streamlines the hiring process. By using data-driven job advertising and seamless ATS integrations, HeyJobs helps companies attract and engage top talent efficiently. The platform reduces time-to-hire while improving the quality of applications, making recruitment smarter and more effective for businesses of all sizes.",
    description: "HeyJobs is a recruitment platform that helps companies find and hire the best talent quickly and efficiently. By simplifying the hiring process, HeyJobs makes it easier for employers to attract and engage candidates while enhancing the overall candidate experience. With seamless integrations into existing systems, HeyJobs offers a user-friendly solution for businesses of all sizes to streamline their hiring workflows.",
    industry: "HR Tech (Human Resources Technology)",
    size: "400+",
    website: 'https://heyjobs.de',
    requirements: [
      "Customizable Hiring Workflows",
      "Data-Driven Job Advertising",
      "Platform Development and Architecture",
      "Integration with ATS",
      "Testing and Performance Optimization",
      "Continuous Improvement"
    ],
    overview: `HeyJobs is a comprehensive recruitment platform designed to simplify and optimize the hiring process for businesses of all sizes. The platform streamlines job posting, candidate engagement, and application management by providing an easy-to-use interface and powerful automation tools. By integrating seamlessly with existing Applicant Tracking Systems (ATS), HeyJobs allows employers to manage their entire recruitment process efficiently from one centralized platform.
      Key features of HeyJobs include data-driven job advertising, automated communication with candidates, and customizable hiring workflows that ensure a smooth experience for both employers and job seekers. The platform aims to reduce the time-to-hire and improve the quality of applicants, enabling businesses to build stronger teams faster.`,
    challenges: "During the development of HeyJobs, I encountered several technical challenges. One of the primary hurdles was seamlessly integrating with various Applicant Tracking Systems (ATS), as each system had its own unique API, data format, and workflows. Ensuring smooth synchronization across multiple ATS platforms required extensive testing and troubleshooting. Additionally, I led the effort to migrate the existing monolithic codebase to a microservices architecture, specifically separating the job ingestion logic from the other backend and API components. This migration was crucial for scalability and maintainability but posed significant complexities in terms of refactoring and ensuring that the microservices worked cohesively. Along with these structural challenges, there were inevitable bugs in the code, which required careful debugging and testing to ensure that the platform performed reliably. Lastly, implementing complex business logic for automating candidate engagement, job posting optimizations, and ATS workflows demanded precise handling to meet business requirements while maintaining system efficiency. These challenges required constant problem-solving and iteration to build a robust and scalable platform.",
    solutions: `To integrate with various ATS systems, I developed a flexible, modular integration framework, enabling seamless synchronization across platforms. I wrote integration tests to cover real-world scenarios and edge cases.

      For migrating the codebase to microservices, I decoupled the job ingestion logic, creating a dedicated service for scalability and maintainability. I also implemented unit and integration tests to ensure smooth service communication.

      To address bugs, particularly race conditions, I introduced stricter database transaction management and wrote end-to-end tests to cover the entire recruitment flow, ensuring data integrity.

      Finally, I tackled business logic complexity by breaking down rules into smaller tasks and writing custom validation tests to ensure smooth system operation across different user scenarios.
    `,
    results: [
      {
        title: "Efficiency",
        result: '66%',
        side: 'up',
        description: "Optimized candidate delivery, improving efficiency by 66% through streamlined application submissions to multiple ATS platforms."
      },
      {
        title: "Client Satisfaction",
        result: '20%',
        side: 'up',
        description: "With automated workflows and streamlined communication processes, we were able to improve client satisfaction by 20%."
      },
      {
        title: "Bug",
        result: '98%',
        side: 'down',
        description: "Increased test coverage, reducing software defects by 98% and improving system reliability."
      },
      {
        title: "speed",
        result: '30%',
        side: 'up',
        description: "Revamped job ingestion pipelines, increasing job processing speed by 30% and efficiently handling 100K+ job listingsper month."
      },
    ],
    testimonial: RECOMMENDATIONS
  },
  NOZL: {
    image: NOZLImage,
    intro: "NOZL simplifies fuel procurement by connecting operators directly with FBOs, offering real-time pricing, instant fuel requests, and peer-reviewed ratings. It streamlines trip planning, eliminates hidden costs, and ensures a seamless fuel management experience.",
    description: "NOZLapp is a platform that simplifies aviation fuel procurement. It allows operators to easily compare fuel prices from different FBOs and make quick reservations. The app streamlines the fuel purchasing process, offering better transparency, value, and service through user reviews and easy navigation.",
    industry: "Aviation",
    size: "10+",
    website: 'https://nozlapp.com',
    requirements: [
      "Developing superadmin, FBO and Operator/Pilot portal",
      "Complex business logics for tax, discount and services",
      "Platform Development and Architecture",
      "Testing and Performance Optimization",
      "Continuous Improvement"
    ],
    overview: `NOZL is a business aviation fuel platform designed to streamline fuel procurement and management. It includes dedicated portals for Superadmin, FBOs, and Operators, each tailored to their specific needs. The platform handles complex business logic, enabling seamless price requests, offer comparisons, and fuel reservations. By automating processes and improving transparency, NOZL optimizes fuel operations, reducing administrative overhead for aviation professionals.`,
    challenges: "Developing NOZL involved overcoming several technical and operational challenges. Implementing a seamless multi-portal system for Superadmin, FBOs, and Operators required careful design to ensure role-based access and secure data flow. The complex business logic for fuel pricing, offer management, and transaction handling demanded precision to maintain accuracy and efficiency. Integrating real-time fuel pricing data while ensuring system scalability and reliability added another layer of complexity. Additionally, optimizing performance to handle high-volume requests without delays was a critical challenge.",
    solutions: `To tackle these challenges, a well-structured approach was implemented. A multi-portal architecture was designed, ensuring smooth role-based access for Superadmin, FBOs, and Operators. Robust authentication and authorization mechanisms were integrated to maintain data security. The complex business logic for fuel pricing and transaction management was broken down into modular components, making it easier to maintain and extend.  

      Real-time fuel pricing integration was achieved using efficient APIs and caching mechanisms to ensure fast and accurate data retrieval. System performance was optimized by implementing background processing for heavy operations and database indexing to handle high-volume requests efficiently. Continuous testing and monitoring ensured stability, reducing potential downtime and improving overall user experience.`,
    results: [
      {
        title: "Efficiency",
        result: '40%',
        side: 'up',
        description: "Led full-stack development, enhancing API response time by 40% for enterprise applications."
      },
      {
        title: "Scalability",
        result: "38%",
        side: "down",
        description: "Refactored legacy code, reducing bugs by 38% and enhancing scalability and maintainability."
      },
      {
        title: "Automation",
        result: "CI/CD",
        side: "",
        description: "Configured and maintained CI/CD pipelines using GitHub Actions and Docker, automating deployment workflows."
      },
      {
        title: "Performance Optimization",
        result: "Bottlenecks",
        side: "down",
        description: "Optimized system performance by resolving bottlenecks, ensuring seamless user experience and scalability."
      }
    ],
    testimonial: [
      {
        name: "Trina Duke",
        role: "Co-founder, NOZL",
        text: `I can confidently say that Sachin is a thorough professional and his character shows in the value of work he outputs. Apart from his work skills, Sachin is a person of integrity and honesty. Sachin has superb communication and time management skills. Any company would be wise to employ him.`,
      }
    ]
  },
  DianApps: {
    image: TrustSignalImage,
    client: "TrustSignal",
    intro: "DianApps is a global digital product agency delivering high-performance mobile and web apps. With expertise in Flutter, React Native, and full-stack development, they help startups and enterprises bring ideas to life with scalable, user-centric solutions.",
    description: "TrustSignal.io is a comprehensive Communication Platform as a Service (CPaaS) provider, offering businesses a suite of messaging solutions including SMS, RCS, WhatsApp, Voice, and Email. By delivering reliable and scalable communication tools, TrustSignal enables organizations to effectively connect with their customers across multiple channels.",
    industry: "Communication",
    size: "30+",
    website: 'https://trustsignal.io',
    requirements: [
      "Optimizing backend processing for handling large number of records",
      "Query optimization & Enhancing database performance",
      "Developing an intuitive UI for RCS messaging",
      "Implementing scalable system architecture and automation"
    ],
    overview: `TrustSignal's platform is designed to streamline business-customer interactions through a unified interface that supports various communication channels. Key features include real-time reporting, personalized bulk messaging, inbound SMS management, and support for over 20 languages. The platform also offers advanced functionalities like URL shortening, custom sender IDs, and opt-out/opt-in paths, enhancing the efficiency and effectiveness of communication campaigns. `,
    challenges: `Scalability: Efficiently processing and managing over 10 million records daily requires a highly scalable backend infrastructure.​
              Performance Optimization: Enhancing database query efficiency to handle large volumes of data without compromising on speed or reliability.​
              Complex Business Logic: Collaborating with cross-functional teams to refine intricate business processes and system designs.​
              User Engagement: Developing intuitive user interfaces, particularly for Rich Communication Services (RCS) messaging, to improve user engagement and communication capabilities.​`,
    solutions: `To overcome these challenges, I optimized the backend using advanced processing techniques and scalable architectures, allowing TrustSignal to efficiently handle over 10 million records per day. I implemented indexing and query optimization strategies, improving database query efficiency by 40%. Working closely with cross-functional teams, I refined complex business logic to align system designs with organizational objectives and user needs. Additionally, I developed an intuitive UI for RCS messaging, enhancing user engagement and streamlining communication. These solutions significantly improved system performance, scalability, and overall user experience.`,
    results: [
      {
        title: "Backend Processing",
        result: "10M+ records/day",
        side: "up",
        description: "Optimized backend processing, handling 10M+ records per day."
      },
      {
        title: "Query Efficiency",
        result: "40% improvement",
        side: "up",
        description: "Enhanced database query efficiency by 40% through indexing and query optimization."
      },
      {
        title: "Collaboration",
        result: "Improved",
        side: "",
        description: "Collaborated with cross-functional teams to refine business logic and improve system design."
      },
      {
        title: "UI/UX Enhancement",
        result: "Increased",
        side: "",
        description: "Developed an intuitive UI for RCS messaging, improving user engagement and communication capabilities."
      }
    ],
    testimonial: [
      {
        "name": "Mohammad Imran Shaikh",
        "role": "Founder, TrustSignal",
        "text": "Working with Sachin has been wonderfull. His expertise in backend optimization and database efficiency significantly improved our system's performance. His collaborative approach and problem-solving skills made complex challenges feel effortless. Highly recommend him for any high-scale tech projects!"
      }
    ]
  },
  "Lucenta Solutions": {
    image: LucentaSolutionsImage,
    intro: "​Lucenta Solutions is a premier IT services provider specializing in web and mobile application development, CRM/ERP systems, and cutting-edge technologies like blockchain. With a commitment to delivering 100% client satisfaction, Lucenta Solutions offers tailored solutions to businesses of all sizes, ensuring that each project aligns with the client's specific requirements and business goals. ",
    description: "Lucenta Solutions offers a wide range of services, including web and mobile development using modern technologies such as PHP, Laravel, and Java. The company also provides CRM and ERP solutions, leveraging platforms like Salesforce and Podio to enhance business operations. Additionally, Lucenta Solutions develops on-demand applications for industries such as food delivery, real estate, travel, and fitness. With expertise in blockchain technology, they deliver secure and scalable solutions that meet the evolving needs of businesses.",
    industry: "Software",
    size: "10+",
    website: 'https://lucentasolutions.com',
    requirements: [
      "Developing scalable solutions for enterprise applications",
      "Revamping frontend with React.js for better performance",
      "Implementing microservices to enhance system architecture",
      "Automating data extraction and processing for analytics"
    ],
    overview: `Businesses today require innovative and efficient digital solutions to stay competitive. Lucenta Solutions bridges this gap by offering scalable and cost-effective software solutions that optimize workflows and improve customer experiences. Their expertise spans multiple industries, enabling them to deliver customized solutions that drive efficiency and growth.`,
    challenges: `While working at Lucenta Solutions, I contributed to projects like RealEstateInvestor.com and Karrieretutor.de, where scalability, performance optimization, and real-time data consistency were key challenges. RealEstateInvestor.com required handling vast real estate data efficiently, while Karrieretutor.de needed a seamless course management system with real-time updates and a smooth user experience.​`,
    solutions: `To address these challenges, I implemented a microservices architecture in Node.js for scalability, optimized React state management, and enhanced database queries for faster performance. I also integrated WebSockets for real-time updates and leveraged lazy loading to improve front-end performance, ensuring a seamless experience for users.`,
    results: [
      {
        title: "Frontend Revamp",
        result: "Improved Performance",
        side: "up",
        description: "Revamped frontend using React.js, significantly improving performance and user experience."
      },
      {
        title: "Performance",
        result: "23%",
        side: "up",
        description: "Redesigned system architecture by implementing microservices, boosting performance by 23%."
      },
      {
        title: "Code Modularity",
        result: "Enhanced",
        side: "",
        description: "Enhanced code modularity, scalability, and maintainability."
      },
      {
        title: "Deployment Optimization",
        result: "CI/CD",
        side: "",
        description: "Integrated CI/CD pipelines, reducing deployment time and improving release efficiency."
      }
    ],
    testimonial: [
      {
        "name": "Bajarang Agarwal",
        "role": "Founder, Lucenta Solutions",
        "text": "Working with Sachin was a great experience. Their expertise in backend optimization and scalable architecture made a real impact. Efficient, reliable, and always delivering results!"
      }
    ]
  }
}

export default CASE_STUDY_DATA