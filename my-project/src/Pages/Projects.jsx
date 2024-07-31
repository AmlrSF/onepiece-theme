import React from 'react';
import { useNavigate } from 'react-router-dom';
import sabo from "../assets/projects/bgSabo.jpg";
import ace from "../assets/projects/bgAce.jpg";
import luffy from "../assets/projects/bgLuffy.jpg";

import Fsabo from "../assets/projects/saboF.png";
import Face from "../assets/projects/aceF.png";
import Fluffy from "../assets/projects/luffyF.png";

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="background-container-projects
      flex justify-center  
      overflow-auto min-h-[100vh] p-10
      items-center w-full">
      <div className='cards z-20'>

        <div className='h-[430px] w-[320px]'>
          <div className="card" onClick={() => handleNavigate('/frontEnd')}>
            <img src={sabo} alt="sabo"
              className='h-full w-full' />
            <p>Frontend</p>
          </div>
          <img className='charsImages' src={Fsabo} alt='sabo' />
        </div>

        <div className='h-[430px] w-[320px]'>
          <div className="card" onClick={() => handleNavigate('/design')}>
            <img src={luffy} alt="luffy"
              className='h-full w-full' />
            <p>Design</p>
          </div>
          <img className='charsImages' src={Fluffy} alt='luffy' />
        </div>

        <div className='h-[430px] w-[320px]'>
          <div className="card" onClick={() => handleNavigate('/backend')}>
            <img src={ace} alt="ace"
              className='h-full w-full' />
            <p>Backend</p>
          </div>
          <img className='charsImages' src={Face} alt='ace' />
        </div>

      </div>
    </div>
  );
}

export default Projects;
