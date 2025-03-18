import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Anika Academy | Best Tuition for Classes 1-12</title>
        <meta name="description" content="Join Anika Academy for expert tuition classes for CBSE & ICSE students from Class 1-12." />
      </Helmet>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>Expert Tuition for Classes 1-12</h1>
        <p>Personalized Learning | Qualified Teachers | Proven Results</p>
        <motion.a
          href="#courses"
          className="cta-btn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore Courses
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
