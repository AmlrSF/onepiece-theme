import React from "react";
import { Tilt } from "react-tilt"; // If Tilt is a named export
import { motion } from "framer-motion";

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

const SkillCard = ({ name, image, index }) => {
  return (

    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.01, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card'
        initial="hidden"
        animate="show"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-[#151030] rounded-[20px]
         flex justify-evenly items-center flex-col p-[5px]'
        >
          <img
            src={`${image}.png`}
            alt='web-development'
            className='w-[80px] h-[80px] '
          />

        </div>
      </motion.div>
    </Tilt>

  );
};


const Skills = () => {
  const skillsTable = [
    { name: "HTML 5", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Angular", icon: "angular" },
    { name: "ReactJS", icon: "reactjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "C#", icon: "csharp" },
    { name: "Java", icon: "java" },
    { name: "TailwindCSS", icon: "tailwind" }
  ];

  const designSkillsTable = [
    { name: "Photoshop", icon: "photoshop" },
    { name: "Figma", icon: "figma" }
    // Add more design skills here if needed
  ];

  const editorsTable = [
    { name: "Visual Studio Code", icon: "vscode" },
    { name: "Visual Studio", icon: "vs" }
  ];

  const utilsTable = [
    { name: "npm", icon: "npm" },
    { name: "Git", icon: "git" }
  ];

  const databasesTable = [
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" }
  ];

  return (
    <div className="background-container-skills flex w-full 
    overflow-auto  items-start relative">
      <div className='relative z-10 flex px-24'>
        <div className=' flex flex-col justify-center items-center mt-5'>
          <div className='absolute top-10 w-5 h-5 z-20 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-[1300px] absolute top-10 h-40 violet-gradient' />
        </div>
        <div className="flex flex-col">
          <div className="p-4">

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`font-black lg:text-[60px] 
                sm:text-[40px] xs:text-[20px] text-[40px] text-[#915EFF]
                 mt-2 `}
            >
              Skills.
            </motion.p>

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`text-[#dfd9ff] font-medium 
            lg:text-[20px] sm:text-[16px] xs:text-[20px] 
            text-[16px] lg:leading-[40px] mb-5 text-white-100`}>
              Services I Offer.
            </motion.p>
            <div className='flex flex-row flex-wrap justify-start gap-5'>
              {skillsTable.map((technology, index) => (
                <div key={technology.name}>
                  <SkillCard name={technology.name} image={`/src/assets/skills/${technology.icon}`} index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4">

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`font-black lg:text-[60px] 
    sm:text-[40px] xs:text-[20px] text-[40px] text-[#915EFF]
     mt-2 `}
            >
              Design.
            </motion.p>

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`text-[#dfd9ff] font-medium 
lg:text-[20px] sm:text-[16px] xs:text-[20px] 
text-[16px] lg:leading-[40px] mb-5 text-white-100`}>
              Design I Offer.
            </motion.p>
            <div className='flex flex-row flex-wrap justify-start gap-5'>
              {designSkillsTable.map((technology, index) => (
                <div key={technology.name}>
                  <SkillCard name={technology.name} image={`/src/assets/skills/${technology.icon}`} index={index} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`font-black lg:text-[60px] 
    sm:text-[40px] xs:text-[20px] text-[40px] text-[#915EFF]
     mt-2 `}
            >
              Editors.
            </motion.p>

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`text-[#dfd9ff] font-medium 
lg:text-[20px] sm:text-[16px] xs:text-[20px] 
text-[16px] lg:leading-[40px] mb-5 text-white-100`}>
              Editors I Use.
            </motion.p>
            <div className='flex flex-row flex-wrap justify-start gap-5'>
              {editorsTable.map((technology, index) => (
                <div key={technology.name}>
                  <SkillCard name={technology.name} image={`/src/assets/skills/${technology.icon}`} index={index} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`font-black lg:text-[60px] 
    sm:text-[40px] xs:text-[20px] text-[40px] text-[#915EFF]
     mt-2 `}
            >
              Utils.
            </motion.p>

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`text-[#dfd9ff] font-medium 
lg:text-[20px] sm:text-[16px] xs:text-[20px] 
text-[16px] lg:leading-[40px] mb-5 text-white-100`}>
              Tools I Use.
            </motion.p>
            <div className='flex flex-row flex-wrap justify-start gap-5'>
              {utilsTable.map((technology, index) => (
                <div key={technology.name}>
                  <SkillCard name={technology.name} image={`/src/assets/skills/${technology.icon}`} index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4">

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`font-black lg:text-[60px] 
    sm:text-[40px] xs:text-[20px] text-[40px] text-[#915EFF]
     mt-2 `}
            >
              Database.
            </motion.p>

            <motion.p
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className={`text-[#dfd9ff] font-medium 
lg:text-[20px] sm:text-[16px] xs:text-[20px] 
text-[16px] lg:leading-[40px] mb-5 text-white-100`}>
              Database I Use.
            </motion.p>
            <div className='flex flex-row flex-wrap justify-start gap-5'>
              {databasesTable.map((technology, index) => (
                <div key={technology.name}>
                  <SkillCard name={technology.name} image={`/src/assets/skills/${technology.icon}`} index={index} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;
