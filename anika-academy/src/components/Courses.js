import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaChalkboardTeacher, FaFlask } from "react-icons/fa";
import "./Courses.css";

const Courses = () => {
  return (
    <motion.section
      className="courses"
      id="courses"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Our Courses</h2>
      <div className="course-list">
        <motion.div
          className="course"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaBook size={40} />
          <h3>Math & Science</h3>
          <img src="https://media.istockphoto.com/id/183773966/photo/cheerful-indian-girl-student-erasing-mathematics-problems-from-greenboard-blackboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=fzhxR-cZcYLhOnh0y4GSfKqA4ebydkR5t4eT9aJA0ac=" alt="Math & Science" />
        </motion.div>
        <motion.div
          className="course"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaChalkboardTeacher size={40} />
          <h3>English & French</h3>
          <img src="https://media.istockphoto.com/id/469969748/photo/a-french-flag-language-book-with-french-themed-items-at-top.webp?a=1&b=1&s=612x612&w=0&k=20&c=EB9c7teeC3SfdH4gnrpTHrbdgqIcwtmfvNn6dsevX_Y=" alt="English & French" />
        </motion.div>
        <motion.div
          className="course"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaFlask size={40} />
          <h3>Commerce & Economics</h3>
          <img src="https://media.istockphoto.com/id/1205581593/photo/businessman-hugs-indian-rupee-money-bags-granting-financing-business-project-or-education.webp?a=1&b=1&s=612x612&w=0&k=20&c=HLU4WYmxVaIM3-f1OVm6gpV2sQkknDsOisGKHJMpVYE=" alt="Commerce & Economics" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Courses;



// import React from "react";
// import { FaBook, FaChalkboardTeacher, FaFlask } from "react-icons/fa";
// import "./Courses.css";

// const Courses = () => {
//   return (
//     <section className="courses" id="courses">
//       <h2>Our Courses</h2>
//       <div className="course-list">
//         <div className="course">
//           <FaBook size={40} />
//           <h3>Math & Science</h3>
//           <img src="https://media.istockphoto.com/id/183773966/photo/cheerful-indian-girl-student-erasing-mathematics-problems-from-greenboard-blackboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=fzhxR-cZcYLhOnh0y4GSfKqA4ebydkR5t4eT9aJA0ac=" alt="Math & Science" />
//         </div>
//         <div className="course">
//           <FaChalkboardTeacher size={40} />
//           <h3>English & French</h3>
//           <img src="https://media.istockphoto.com/id/469969748/photo/a-french-flag-language-book-with-french-themed-items-at-top.webp?a=1&b=1&s=612x612&w=0&k=20&c=EB9c7teeC3SfdH4gnrpTHrbdgqIcwtmfvNn6dsevX_Y=" alt="English & French" />
//         </div>
//         <div className="course">
//           <FaFlask size={40} />
//           <h3>Commerce & Economics</h3>
//           <img src="https://media.istockphoto.com/id/1205581593/photo/businessman-hugs-indian-rupee-money-bags-granting-financing-business-project-or-education.webp?a=1&b=1&s=612x612&w=0&k=20&c=HLU4WYmxVaIM3-f1OVm6gpV2sQkknDsOisGKHJMpVYE=" alt="Commerce & Economics" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
