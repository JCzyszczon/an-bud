import React, { useState, useEffect } from "react";
import GalleryBackground from '../images/galleryBackground.jpeg';
import GalleryMobile from '../images/galleryMobile.jpeg';
import { Parallax } from "react-parallax";
import { Link } from 'react-scroll';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import ContactComponent from "./contactComponent";
import Footer from "./footerComponent";
import GalleryComponent from "./galleryComponent";
import { Helmet } from "react-helmet-async";

const Gallery = () => {

  const [bgImage, setBgImage] = useState(GalleryBackground);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBgImage(GalleryMobile);
      } else {
        setBgImage(GalleryBackground);
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="">
        <Helmet>
          <title>AN-BUD - Galeria</title>
          <meta name="description" content="Zobacz nasze projekty!" />
          <link rel="canonical" href="/galeria" />
        </Helmet>
        <Parallax blur={0} strength={300} bgImage={bgImage} bgImageAlt='Background'>
            <section ref={ref} className="w-full md:h-[70vh] h-[50vh] flex justify-center items-center relative text-center">
                <motion.h1 animate={animationPic2} className="md:text-7xl text-5xl tracking-tighter font-extrabold text-[#fff]">Sprawdź nasze<span className="text-[#c13213]"> projekty!</span></motion.h1>
                <Link to='gallery' smooth='true' duration={400} className='cursor-pointer'>
                    <motion.div animate={animationOpacity} className='absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center animate-bounceGallery w-full'>
                        <p className='text-[#ccc] sm:text-2xl text-xl font-extralight'>Zobacz teraz!</p>
                        <MdOutlineKeyboardArrowDown className='text-[#ccc] sm:text-2xl text-xl font-light'/>
                    </motion.div>
                </Link>
            </section>
        </Parallax>
        <GalleryComponent/>
        <ContactComponent/>
        <Footer/>
    </section>
  );
};
  
export default Gallery;