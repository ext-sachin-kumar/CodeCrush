import { FaPaperPlane } from "react-icons/fa";



const HireMe = () => {
  return (
    <button
      type="button"
      className="mt-6 flex items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
    >
      <span>Hire Me</span>
      <FaPaperPlane className="w-4 h-4 ml-2" />
    </button>
  )
}

export default HireMe;