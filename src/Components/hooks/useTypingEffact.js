import { useState, useEffect } from "react";

const useTypingEffect = (text, speed = 500) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") return; // Ensure valid input

    let index = 0;
    setDisplayText(""); // Reset text on every re-run

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1)); // Substring prevents undefined
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

export default useTypingEffect;
