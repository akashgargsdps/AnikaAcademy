// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// //import "./Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/send-email", formData);
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setStatus("Failed to send message.");
//     }
//   };

//   return (
//     <motion.section
//       className="contact"
//       id="contact"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <h2>Contact Us</h2>
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
//         <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
//         <textarea name="message" placeholder="Your Message" required onChange={handleChange} value={formData.message} />
//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           Send Message
//         </motion.button>
//       </motion.form>
//       {status && <p>{status}</p>}
//     </motion.section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData, {
        headers: { "Content-Type": "application/json" }
      });

      setSuccess("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.form 
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contact Us
        </motion.h2>

        {error && (
          <motion.div 
            className="text-red-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div 
            className="text-green-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {success}
          </motion.div>
        )}

        <div>
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full p-3 mt-4 text-white rounded-xl transition-colors ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
