import "./navbar.scss";

import Sidebar from "../sidebar/Sidebar";
import cvImg from "../../assets/cv.png"
import github from "../../assets/github.png"
import linkedIn from "../../assets/linkedin.png"
import mailImg from "../../assets/email.png"
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://github.com/yogesh-k64" alt='github' target="_blank" rel="noreferrer" >
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/yogesh-kugan/" target="_blank" rel="noreferrer" >
            <img src={linkedIn} alt="linked in" />
          </a>
          <a href="mailto:yogesh.k6499@gmail.com" target="_blank" rel="noreferrer" >
            <img src={mailImg} alt="email" />
          </a>
          <a href="https://drive.google.com/file/d/19SlOPUZlabXXp88hBnCPA7vLUM-IfjD2/view?usp=sharing"
            target="_blank" rel="noreferrer" >
            <img src={cvImg} alt="email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
