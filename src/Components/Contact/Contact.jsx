import { PlaneTakeoff } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm({ isSmallScreen }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const [status, setStatus] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    document.body.appendChild(script);
  }, []);

  const sendEmail = async (e) => {
    
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        to: "sachin@code-crush.dev",
        subject: "New Contact Message",
        html: `<p><strong>Name:</strong> ${formData.name}</p>
               <p><strong>Email:</strong> ${formData.email}</p>
               <p><strong>Message:</strong> ${formData.message}</p>`,
      });
  
      if (response.data.success) {
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              onChange={handleChange}
              required
              className="w-full p-2 border rounded text-black bg-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
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
            className="w-full p-2 h-50 border text-black bg-white rounded"
          ></textarea>

          <div className="flex justify-center items-center mb-10">
            <button
              type="submit"
              className="flex items-center text-primary cursor-pointer gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"} <PlaneTakeoff className="text-lg text-primary w-4 h-4"/>
            </button>
            {status && <p className="mt-4 text-green">{status}</p>}
          </div>
        </form>
      </div>
      {window.innerWidth <= 600 ? <div className="h-10"></div> : null}
    </div>
  );
}
