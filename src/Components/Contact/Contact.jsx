import { PlaneTakeoff, X } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ContactForm({ isSmallScreen }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://codecrush-server-t3ki.onrender.com/send-email", {
        to: "sachin@code-crush.dev",
        subject: "New Contact Message",
        html: `<p><strong>Name:</strong> ${formData.name}</p>
               <p><strong>Email:</strong> ${formData.email}</p>
               <p><strong>Message:</strong> ${formData.message}</p>`,
      });

      if (response.data.success) {
        setModalOpen(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex-1 flex-col h-screen overflow-y-auto bg-[rgb(var(--color-primary))]">
      <div className={`flex-1 ${isSmallScreen ? 'pt-20' : 'pt-8'} p-10`}>
        <div className="mb-10 text-center">
          <h1 className="text-2xl text-heading">Contact Me</h1>
          <p className="text-md mt-5 text-pretty text-primary">
            Let's build something amazing together—drop me a message! 🚀
          </p>
        </div>
        <div className="border-b border-gray-800 mb-10"></div>
        <form onSubmit={sendEmail} className="space-y-5">
          <div className={`mb-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6`}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-2 border rounded text-black bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-2 border rounded text-black bg-white"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-2 h-80 border text-black bg-white rounded"
          ></textarea>
          <div className="flex justify-center items-center mb-10">
            <button
              type="submit"
              className="flex items-center text-primary cursor-pointer gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"} <PlaneTakeoff className="text-lg text-primary w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {modalOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="bg-[rgb(var(--color-secondary))] p-6 rounded-lg shadow-lg w-80 relative">
            <button 
              className="absolute top-2 right-2 text-heading" 
              onClick={() => setModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl text-heading font-semibold text-center">Success! 🎉</h2>
            <p className="text-gray-700 text-center mt-2 text-primary">Your message has been sent successfully.</p>
            <div className="flex justify-center mt-4">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}