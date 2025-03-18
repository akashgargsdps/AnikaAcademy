import React from "react";
import { motion } from "framer-motion";
//import "./Testimonials.css";

const Testimonials = () => {
  return (
    <motion.section
      className="testimonials"
      id="testimonials"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>What Our Students Say</h2>
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        "Anika Academy helped me score 95% in my CBSE board exams!" - Ayesha, Class 10
      </motion.p>
    </motion.section>
  );
};

export default Testimonials;
