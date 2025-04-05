import { useContext } from 'react';
import { FaIndustry, FaUsers, FaLink, FaQuoteLeft } from "react-icons/fa";


import CASE_STUDY_DATA from '../data/case-study.js'
import HireMe from '../Buttons/HireMe.jsx';

const Project = ({ isSmallScreen, project }) => {

  const { client = '', intro, description, industry, image, website, challenges, size, requirements, overview, solutions, results, testimonial } = CASE_STUDY_DATA[project.trim()];
  const randomNumber = Math.floor(Math.random() * (testimonial.length))
  const filteredTestimonial = testimonial[randomNumber]
  console.log(filteredTestimonial)
  console.log(randomNumber)

  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>
        {/* Introduction Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl text-heading font-bold">{project}</h1>
          <p className="text-md mt-5 text-pretty text-primary">
            {intro}
          </p>
        </div>

        <div className="border-b border-gray-800 mb-10"></div>

        <div className="mb-10">
          <div className="mt-5 bg-[rgb(var(--color-secondary))] text-white rounded-lg shadow-lg p-6 lg:flex lg:flex-row md:flex-col">
            {/* Image Container */}
            <div className="md:w-full lg:w-2/5 flex justify-center md:justify-around items-center">
              <img src={image} className="h-auto md:w-1/2 lg:w-full object-cover" />
            </div>

            {/* Content Container */}
            <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
              {client ? <h2 className="text-xl font-semibold">Client: {client}</h2> : <h2 className="text-xl font-semibold">{project}</h2>}
              <div className="mt-5 space-y-1">
                <p className="flex items-center text-md text-primary">
                  <FaIndustry className="mr-2" />
                  <p className="pr-1">Industry: <span>{industry}</span></p>
                </p>
                <p className="flex items-center text-md text-primary">
                  <FaUsers className="mr-2" />
                  <p className="pr-1">Size: {size}</p>
                </p>
                <p className="flex items-center text-md text-primary">
                  <FaLink className="mr-2" />
                  <p className="">Website: <a href={website} className="underline ml-1">
                    {website}
                  </a></p>
                </p>
              </div>

              <p className="mt-4 text-primary">{description}</p>

              <div className="mt-5">
                <h3 className="text-md font-semibold">Project Requirements</h3>
                <ul className="list-disc list-inside mt-5">
                  {requirements.map((req, index) => (
                    <li className="text-primary text-md" key={index}>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="mb-10">
          <h3 className="mb-5 text-heading text-2xl">Project Overview</h3>
          <div>
            <span className='text-primary whitespace-pre-line text-sm'>{overview}</span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-5 text-heading text-2xl">Challenges</h3>
          <div>
            <span className='text-primary whitespace-pre-line text-sm'>{challenges}</span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-5 text-heading text-2xl">The Approach & Solution</h3>
          <div>
            <span className='text-primary whitespace-pre-line text-sm'>{solutions}</span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-5 text-heading text-2xl">Results</h3>
          <div className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6`}>
            {
              results.map((ele, index) => (
                <Card key={index} title={ele.title} result={ele.result} side={ele.side} description={ele.description} />
              ))
            }
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-5 text-heading text-2xl">Client Testimonial</h3>
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.025)",
              zIndex: 1,
            }}
            className="p-6 rounded-lg shadow-lg bg-[rgb(var(--color-secondary))] relative"
          >
            <div
              className={`absolute top-0 left-0 w-10 h-10 bg-blue-400`}
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)", zIndex: 0 }}
            >
              <FaQuoteLeft className="absolute top-1 left-1 text-black" />
            </div>

            {/* Expandable Text */}
            <p className="text-md text-primary whitespace-pre-line">
              {filteredTestimonial.text}
            </p>

            {/* Author Details */}
            <div className="mt-3 flex flex-row text-sm text-accent">
              <p className="text-muted">{filteredTestimonial.name}</p>
            </div>
            <div className="text-sm text-muted">{filteredTestimonial.role}</div>
          </div>
        </div>

        <div className="mb-10">
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.025)",
              zIndex: 1,
            }}
            className="p-6 flex flex-col rounded-lg text-center items-center shadow-lg bg-[rgb(var(--color-secondary))] relative"
          >
            <h3 className="mb-5 text-heading text-xl">Looking for a reliable developer to bring your project to life? Let's collaborate and turn your ideas into reality—get in touch today! 🚀</h3>
            <HireMe />
          </div>
        </div>
      </div>

      {window.innerWidth <= 600 ? <div className="h-10"></div> : null}
    </div>
  )
}

const Card = ({ title, result, description, side }) => {
  return (
    <div
      className="mt-2 bg-[rgb(var(--color-secondary))] overflow-hidden relative rounded-lg"
    >
      <div className="p-4">
        <p className='text-semibold text-accent'>{title}</p>
        <h2 className="text-lg text-heading">{result} <sub className='text-muted'>{side}</sub></h2>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default Project
