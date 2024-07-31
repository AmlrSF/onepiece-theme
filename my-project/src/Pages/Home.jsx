import React from 'react';
import barcoImage from '../assets/barco.jpg';
import './Page.css';
import anime from '../assets/anime.png';
import twitter from '../assets/twitter.webp';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';

import { motion } from 'framer-motion';

const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const Home = () => {
  return (
    <div className="background-container flex justify-center items-center">
      <div className='flex flex-col w-[650px] items-center justify-center gap-[20px] text-center z-10'>
        <motion.div
          className='image flex items-center justify-center'
          variants={fadeIn("up", "spring", 0.3, 1)}
          initial="hidden"
          animate="show"
        >
          <img className='h-[300px] w-[300px]' src={anime} alt="bounce man gear 4" />
        </motion.div>
        <motion.h1
          className='permanent-marker text-[40px] sm:text-[55px] red-gradient'
          variants={textVariant(0.5)}
          initial="hidden"
          animate="show"
        >
          Welcome to OnePiece
        </motion.h1>
        <motion.p
          className='text-white font-medium'
          variants={fadeIn("up", "spring", 0.8, 1)}
          initial="hidden"
          animate="show"
        >
          Where you are is a result of who you were, but where <br />
          you go depends entirely on who you choose to be.
        </motion.p>
        <motion.div
          className="flex social-icons items-center gap-4"
          variants={fadeIn("up", "spring", 1, 1)}
          initial="hidden"
          animate="show"
        >
          <a target="_blank" href="https://x.com/AmlrSF" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={twitter} alt="twitter" className='w-full h-full' />
          </a>
          <a target="_blank" href="https://github.com/AmlrSF" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={github} alt="github" className='w-full h-full' />
          </a>
          <a target="_blank" href="" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={figma} alt="figma" className='w-full h-full' />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/amir-souaf-31232b264/" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={linkedin} alt="linkedin" className='w-full h-full' />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
