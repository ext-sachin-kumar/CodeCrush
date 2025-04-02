import { useState } from "react";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa6";
import RECOMMENDATIONS from "../data/recommendations";

const color = "blue";

const RecommendationList = ({ isSmallScreen }) => {
  return (
    <ul
      className={`mt-5 grid ${
        isSmallScreen ? "grid-cols-1 gap-6" : "grid-cols-4 gap-4"
      }`}
    >
      {RECOMMENDATIONS.map((rec, index) => (
        <RecommendationItem key={index} rec={rec} />
      ))}
    </ul>
  );
};

const RecommendationItem = ({ rec }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 150; // Max visible characters before truncation

  return (
    <li
      style={{
        border: "1px solid rgba(0,0,0,0.025)",
        zIndex: 1,
      }}
      className="p-6 rounded-lg shadow-lg bg-[#151e29] relative"
    >
      <div
        className={`absolute top-0 left-0 w-10 h-10 bg-${color}-400`}
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)", zIndex: 0 }}
      >
        <FaQuoteLeft className="absolute top-1 left-1 text-black" />
      </div>

      {/* Expandable Text */}
      <p className="text-md text-primary whitespace-pre-line">
        {isExpanded ? rec.text : rec.text.slice(0, MAX_LENGTH) + "..."}
      </p>

      {/* Toggle Read More / Read Less for Individual Items */}
      {rec.text.length > MAX_LENGTH && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-blue-400 hover:underline mt-2 text-accent text-sm"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}

      {/* Author Details */}
      <div className="mt-3 flex flex-row text-sm text-accent">
        <p className="text-muted">{rec.name}</p>
        <a className="p-1 w-4 h-4 text-muted" href={rec.linkedin}>
          <FaLinkedin />
        </a>
      </div>
      <div className="text-sm text-muted">{rec.role}</div>
    </li>
  );
};


export default RecommendationList;