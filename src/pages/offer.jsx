import React, { useState, useEffect } from "react";
import AboutBackground from '../images/aboutBackground.jpeg'
import { Parallax } from "react-parallax";
import { Link } from 'react-scroll';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import ContactComponent from "./contactComponent";
import Footer from "./footerComponent";
import AboutComponent from "./aboutComponent";
import OfferComponent from "./offerComponent";
import OfferMobile from '../images/offerMobile.jpeg';

const Offer = () => {

  const [bgImage, setBgImage] = useState(AboutBackground);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBgImage(OfferMobile);
      } else {
        setBgImage(AboutBackground);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {ref, inView} = useInView({
    threshold: 0.7,
  });
  const animationOpacity = useAnimation();
  const animationPic2 = useAnimation();

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
        x: 0,
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
    <section className="">
      <Parallax blur={0} strength={300} bgImage={bgImage} bgImageAlt='Background'>
        <section ref={ref} className="w-full md:h-[70vh] h-[50vh] flex justify-center items-center relative text-center">
          <motion.h2 animate={animationPic2} className="md:text-7xl text-5xl tracking-tighter font-extrabold text-[#fff]">Czym się <span className="text-[#c13213]">zajmujemy?</span></motion.h2>
            <Link to='about' smooth='true' duration={400} className='cursor-pointer'>
                <motion.div animate={animationOpacity} className='absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center animate-bounceGallery w-full'>
                    <p className='text-[#ccc] sm:text-2xl text-xl font-extralight'>Dowiedz się!</p>
                    <MdOutlineKeyboardArrowDown className='text-[#ccc] sm:text-2xl text-xl font-light'/>
                </motion.div>
            </Link>
        </section>
      </Parallax>
      <AboutComponent/>
      <OfferComponent/>
      <ContactComponent/>
      <Footer/>
    </section>
  );
};
  
export default Offer;