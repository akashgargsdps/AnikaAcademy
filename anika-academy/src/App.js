import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const TRACKING_ID = "G-376VFRVSE5"; // Replace with your GA ID

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
