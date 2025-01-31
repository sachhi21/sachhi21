import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { skillsData } from "../constants";

const Tech = () => {
  return (
   <>
  <motion.div id="tech" variants={textVariant()}>
    <h2 className={`${styles.sectionHeadText} text-center`}>
      Tools
    </h2>
  </motion.div>
  <div className="flex flex-row flex-wrap justify-center gap-4">
    {skillsData.map((technology) => (
      <div key={technology.title}>
        <i
          className={technology.icon}
          style={{ fontSize: "50px", height: "50px", width: "50px" }} // Adjust size here
        ></i>
      </div>
    ))}
  </div>
</>

  );
};

export default SectionWrapper(Tech, "");