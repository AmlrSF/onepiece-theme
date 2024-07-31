import React from 'react'
import wano from "../assets/wano.jpg";
import luffy from "../assets/luffy.jpg";
import twitter from '../assets/twitter.webp';
import linkedin from '../assets/linkedin.png';
import ggls from "../assets/ggls.png";
import ds from "../assets/discord.png";
import call from "../assets/call.png";
const Contact = () => {
  return (
    <div className="background-container-contact  flex justify-center w-full overflow-auto min-h-[100vh] p-10
    items-center ">
      <div className='w-full z-30 flex  justify-center items-center h-[100vh]'>
        <div className='w-[350px] relative h-[450px]
         rounded-2xl overflow-hidden
        bg-[#22272c]'>
          <img src={wano} alt="image" className='h-[150px] w-full' />
          <div className='h-36 w-36 p-1 bg-[#22272c] 
          flex items-center 
        justify-center rounded-full absolute top-[90px] left-[50%]
         translate-x-[-50%]'>
            <img className='h-[8.3rem] rounded-full w-[8.3rem] object-cover' src={luffy} alt="luffy" />
          </div>

          <div className='flex justify-center flex-col items-center mt-[75px]'>

            <h2 className='text-white text-[35px] font-medium'>Amir Souaf</h2>
            <p className='text-[14px] text-[#aaa6c3] '>FullStack developer</p>
          </div>

          <div class="flex social-icons items-center justify-center gap-4 w-full mt-[20px]">
            <a target="_blank" href="https://x.com/AmlrSF" className='h-[35px]  w-[35px]  rounded-full overflow-hidden'>
              <img src={twitter} alt="twitter" className='w-full h-full' />
            </a>
            <a target="_blank" href="https://github.com/AmlrSF" className='h-[35px]  w-[35px]  rounded-full overflow-hidden'>
              <img src={ggls} alt="twitter" className='w-full h-full' />
            </a>
            <a target="_blank" href="https://github.com/AmlrSF" className='h-[35px]  w-[35px]  rounded-full overflow-hidden'>
              <img src={call} alt="twitter" className='w-full h-full' />
            </a>
            <a target="_blank" href="https://github.com/AmlrSF" className='h-[35px]  w-[35px]  rounded-full overflow-hidden'>
              <img src={ds} alt="twitter" className='w-full h-full' />
            </a>
            <a target="_blank" href="" className='h-[35px]  w-[35px]  rounded-full overflow-hidden'>
              <img src={linkedin} alt="twitter" className='w-full h-full' />
            </a>
          </div>

          <div className='w-[230px] rounded-lg mt-5 py-3 text-center text-white font-medium mx-auto bg-[#32383f]'>
            Follow
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact