import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {init} from 'ityped';
import React , { useEffect , useRef} from "react";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {AiOutlineInstagram} from "react-icons/ai";
import {BiLinkAlt} from "react-icons/bi";
import "./Hero.scss";
import logo from '../assets/cv.png';
const Hero = () => {

  const textRef=useRef();
  useEffect(()=>
  {
    init(textRef.current, { showCursor: true, strings: ['Software Developer ', " Tech Enthusiast ",' Application Design and Development at EY ',] })
  },[]);

  return (
    <section className={`relative w-full h-screen  mx-auto `}>
                                                                         <ComputersCanvas /> 

      <div
        className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#8b4fa8]' />
          <div className='w-1 sm:h-90 h-40 bg-[#8b4fa8]' />
        </div>


        <div className="head2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I'm <p className='name text-[#8b4fa8]'>sachin Rampur</p>
          </h1>
          <h3>
            <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient`}></span>
          </h3>
        
        <div className="absolute link1">        
        <a
          href="https://github.com/sachhi21" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-rampur-8b3b681a6/" target="_blank">
          <ImLinkedin />

        </a>
        <a
          href="https://drive.google.com/drive/folders/1aqJg21dfYgawt9tFzkmVtnDvfWfgfnT5" target="_blank">
          <img src={logo} alt="Logo" style={{ width: '35px', height: 'auto' }} />

        </a>
       

      </div>

      </div>
      </div>
     
      

      {/* <div className="relative w-full h-screen overflow-hidden"> */}
    {/* EarthCanvas - Fullscreen and Behind */}
    {/* <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="absolute top-0 left-0 w-full h-full z-0"
    > */}
    {/* </motion.div> */}
    {/* </div> */}

     
    </section>
  );
};

export default Hero;