import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants/constants";

import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#151030] p-5 rounded-2xl
         w-full'
      >
        <div className='relative  h-[250px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="{github}"
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          <p className='mt-2 text-[#aaa6c3] text-[10px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const FrontEnd = () => {
  return (
    <div className="bgproject z-10 flex justify-center items-center w-full">

      <div className="flex flex-col gap-10 items-ceenter justify-center w-full">
        <motion.div className="z-20" variants={textVariant()}>
          <p className="text-white font-black md:text-[30px] sm:text-[28px]
           xs:text-[16]] text-[24px]">My work</p>
          <h2 className="sm:text-[18px] text-[14px] text-[#aaa6c3]
           uppercase tracking-wider">Design Projects.</h2>
        </motion.div>

        <div className='w-full flex z-20"'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-[#aaa6c3] text-[12px] 
            max-w-3xl'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='grid-proj'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} 
            index={index} {...project} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default FrontEnd
