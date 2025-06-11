import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hi, I'm a Full Stack Developer specializing in React and Node.js.",
            2000,
            "I build scalable web applications with clean code and great UI.",
            2000,
            "Let's build something amazing together.",
            2000,
            "From frontend interfaces to backend APIs, I handle it all.",
            2000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
