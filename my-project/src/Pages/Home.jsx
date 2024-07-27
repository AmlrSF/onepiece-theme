import barcoImage from '../assets/barco.jpg';
import "./Page.css";
import anime from '../assets/anime.png';
import twitter from '../assets/twitter.webp';
import linkedin from '../assets/linkedin.png';
import figma from '../assets/figma.png';
import github from '../assets/github.png';

const Home = () => {
  return (
    <div className="background-container flex justify-center  items-center">
      <div className='flex flex-col w-[650px] items-center justify-center gap-[20px] text-center z-10'>
        <div className='image flex items-center justify-center'>
          <img className='h-[300px] w-[300px]' src={anime} alt="bounce man gear 4" />
        </div>
        <h1 className='permanent-marker text-[40px] sm:text-[55px] red-gradient'>Welcome to OnePiece</h1>
        <p className='text-white font-medium '>Where you are is a result of who you were, but where <br />you go depends entirely on who you choose to be. </p>
        <div class="flex social-icons items-center gap-4 ">
          <a  target="_blank" href="https://x.com/AmlrSF" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={twitter} alt="twitter" className='w-full h-full' />
          </a>
          <a  target="_blank" href="https://github.com/AmlrSF" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={github} alt="twitter" className='w-full h-full' />
          </a>
          <a  target="_blank" href="" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={figma} alt="twitter" className='w-full h-full' />
          </a>
          <a  target="_blank" href="https://www.linkedin.com/in/amir-souaf-31232b264/" className='h-[35px] w-[35px] rounded-full overflow-hidden'>
            <img src={linkedin} alt="twitter" className='w-full h-full' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

