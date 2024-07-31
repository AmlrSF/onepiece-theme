import React, { useEffect, useState } from 'react'
import pic from '../assets/pic.jpg';
import luffy from '../assets/luffy.jpg';

import codebranch from '../assets/code-branch.png';

import process from '../assets/process.png';

import professional from '../assets/professional.png';

import rating from '../assets/rating.png';
import { Line } from "react-chartjs-2";
import hat from "../assets/pngwing.com.png";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const Linedata = {
  labels: ["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sept", "oct", "nov", "dec"],
  datasets: [
    {
      label: "Projects",
      data: [1, 2, 4, 7, 8, 15, 12, 3, 4, 8, 12, 9],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },

  ]
};

const Overview = () => {
  let data = [
    {
      label: "FrontEnd",
      value: 45,
      color: "rgba(0, 43, 73, 1)",
      cutout: "50%",
    },
    {
      label: "Backend",
      value: 38,
      color: "rgba(0, 103, 160, 1)",
      cutout: "50%",
    },
    {
      label: "Designing",
      value: 25,
      color: "rgba(83, 217, 217, 1)",
      cutout: "50%",
    },
  ]

  const options = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };
  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  const [skills, setSkills] = useState([
    { name: 'HTML', level: '95' },
    { name: 'CSS', level: '95' },
    { name: 'TS', level: '80' },
    { name: 'C#', level: '60' },
    { name: 'JS', level: '90' },
    { name: 'Java', level: '75' },
    { name: 'Python', level: '70' },
    { name: 'C#', level: '60' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(skills.map(skill => ({ ...skill, animate: true })));
    }, 100);
    return () => clearTimeout(timer);
  }, []);




  return (
    <div className="background-container-overview  flex justify-center w-full overflow-auto min-h-[100vh] p-10
      items-center ">
      <div class="overview-container z-10 h-[650px] w-[1000px] ">

        <div className="sideBar flex flex-col items-center justify-between  p-5 ">
          <div className='profil Image '>
            <div className='relative'>
              <img src={luffy} alt="pic" className=' w-[150px] h-[150px] rounded-full' />
              <img src={hat} alt="pic" className='absolute rotate-[-35deg] top-[-45%] left-[-40px]  w-[200px] h-[150px] rounded-full' />
            </div>
            <p className='text-white text-[18px]'>Amir Souaf </p>
            <p className='text-white text-[12px]'>AmirSF - He/Him</p>
            <ul className='mt-10'>
              <li className='text-white flex items-center gap-3'><i class="fa-solid fa-location-dot"></i>Monasatir, Tunisia</li>
              <li className='text-white flex items-center gap-3'><i class="fa-solid fa-hand"></i>Availble For Hire</li>
              <li className='text-white flex items-center gap-3'><i class="fa-solid fa-user"></i>Followers</li>
            </ul>
          </div>
          <div className='w-full py-1 text-white bg-[#53d9d9] text-center rounded-lg font text-[12px]'>
            <i class="fa-solid fa-down-long"></i> My Resume
          </div>
        </div>
        <div className="item1 flex gap-4  items-center justify-center">
          <img className='w-[60px] h-[50px]' src={professional} alt="" />
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] text-white'>Experience</p>
            <p className='text-[16px] text-white'>5+ Years</p>
          </div>
        </div>
        <div className="item2 flex gap-4 items-center justify-center">
          <img className='w-[60px] h-[50px]' src={process} alt="" />
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] text-white'>Projects</p>
            <p className='text-[16px] text-white'>32</p>
          </div>
        </div>
        <div className="item3 flex gap-4 items-center justify-center">
          <img className='w-[60px] h-[50px]' src={codebranch} alt="" />
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] text-white'>Repo</p>
            <p className='text-[16px] text-white'>37</p>
          </div>
        </div>
        <div className="item4 flex gap-4 items-center justify-center">
          <img className='w-[60px] h-[50px]' src={rating} alt="" />
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] text-white'>Reviews</p>
            <p className='text-[16px] text-white'>35</p>
          </div>
        </div>

        <div className="stats1 w-full h-full">
          <p className='text-[20px] text-white'>Programing Language</p>
          {skills.map((skill, index) => (
            <div className="slide" key={index}>
              <p>{skill.name}</p>
              <div className="bar-container">
                <span
                  className="bar"
                  style={{
                    width: skill.animate ? `${skill.level}%` : '0%',
                    transition: 'width 2.5s ease-out',
                    background: skill.level < 50 ? "rgba(0, 43, 73, 1)" : "rgba(83, 217, 217, 1)",
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>

        <div className="stats2">
          <div className='h-[250px] flex justify-center items-center w-full'>
            <Doughnut data={finalData} options={options} />;

          </div>
        </div>

        <div className="charts flex  items-center justify-center">
          <div className='w-full h-full flex justify-center items-center'>
            <Line data={Linedata} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Overview