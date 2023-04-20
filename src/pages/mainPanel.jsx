import React, {useState, useEffect } from 'react';
import mainBackground from '../images/background.jpeg';
import mobileBackground from '../images/mobileBackground.jpeg'
import { Parallax } from 'react-parallax';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Projects from './projects';
import About from './about';
import ContactComponent from './contactComponent';
import Footer from './footerComponent';

const MainPanel = () => {

  const [bgImage, setBgImage] = useState(mainBackground);
  const [transitionVal, setTransitionVal] = useState('0%');
  const {ref, inView} = useInView({
    threshold: 0.7,
  });
  const animationOpacity = useAnimation();
  const animationPic2 = useAnimation();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBgImage(mobileBackground);
      } else {
        setBgImage(mainBackground);
      }
      
      if (window.innerWidth <= 1024) {
        setTransitionVal('-50%');
      } else {
        setTransitionVal('0%');
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(inView) {
      animationOpacity.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.5,
        }
      });
      animationPic2.start({
        x: `${transitionVal}`,
        y: '-50%',
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.5,
        }
      });
    } if(!inView) {
      animationOpacity.start({
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 0.5,
        }
      });
      animationPic2.start({
        x: '-100px',
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 0.5,
        }
      });
    }

  }, [inView]);

  return (
    <main>
      <Parallax blur={0} strength={300} bgImage={bgImage} bgImageAlt='Background'>
          <section ref={ref} className='w-full h-[100vh] flex justify-center items-center relative'>
            <motion.div animate={animationPic2} className='absolute lg:left-20 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-0 lg:w-[50%] sm:w-[80%] w-[95%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center lg:items-start items-center gap-12'>
              <h1 className='text-[#fff] xl:text-7xl lg:text-6xl sm:text-4xl text-[27px] leading-8 font-extrabold tracking-tighter lg:text-start text-center'>Szukasz godnej zaufania firmy, która w <span className='text-[#c13213]'>profesjonalny</span> sposób wykona remont w twoim domu?</h1>
              <Link to='projects' smooth='true' duration={400} className='z-[3]'><button className='md:px-10 px-6 md:py-5 py-3 lg:ml-10 ml-0 flex group justify-center items-center gap-5 bg-[#c13213] hover:bg-[#fff] tracking-wide sm:text-2xl text-lg text-[#ece5df] hover:scale-105 hover:text-[#000] duration-300 rounded-lg'>Zobacz projekty<FaArrowRight className='group-hover:rotate-90 duration-300'></FaArrowRight></button></Link>
            </motion.div>
            <Link to='projects' smooth='true' duration={400} className='cursor-pointer'>
              <motion.div animate={animationOpacity} className='absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center animate-bounceGallery w-full'>
                <p className='text-[#ccc] sm:text-2xl text-lg font-extralight'>Daj nam się przekonać!</p>
                <MdOutlineKeyboardArrowDown className='text-[#ccc] sm:text-2xl text-xl font-light'/>
              </motion.div>
            </Link>
          </section>
      </Parallax>
      <Projects/>
      <About/>
      <ContactComponent/>
      <Footer/>
    </main>
  );
};
  
export default MainPanel;