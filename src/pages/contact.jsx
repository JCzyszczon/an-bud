import React, { useEffect, useState } from "react";
import ContactBackground from '../images/contactBackground.jpeg';
import { Parallax } from "react-parallax";
import { Link } from 'react-scroll';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import ContactMobile from '../images/ContactMobile.jpeg';
import {FaHome, FaPhoneAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import Footer from "./footerComponent";

const Contact = () => {

  const {ref, inView} = useInView({
    threshold: 0.7,
  });
  const animationOpacity = useAnimation();
  const animationPic2 = useAnimation();

  const [bgImage, setBgImage] = useState(ContactBackground);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBgImage(ContactMobile);
      } else {
        setBgImage(ContactBackground);
      }
    }

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
    <section id='contact' className="">
      <Parallax blur={0} strength={-300} bgImage={bgImage} bgImageAlt='Background'>
        <section ref={ref} className="w-full md:h-[70vh] h-[50vh] flex justify-center items-center relative text-center">
            <motion.h2 animate={animationPic2} className="md:text-7xl text-5xl tracking-tighter font-extrabold text-[#fff]">Skontaktuj się <span className="text-[#c13213]">już dziś!</span></motion.h2>
            <Link to='contact2' smooth='true' duration={400} className='cursor-pointer'>
                <motion.div animate={animationOpacity} className='absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center animate-bounceGallery w-full'>
                    <p className='text-[#ccc] sm:text-2xl text-xl font-extralight'>Nie zwlekaj!</p>
                    <MdOutlineKeyboardArrowDown className='text-[#ccc] sm:text-2xl text-xl font-light'/>
                </motion.div>
            </Link>
        </section>
      </Parallax>
      <motion.section id='contact2' className="w-full h-auto flex justify-center items-center md:my-16 my-10 flex-col lg:gap-20 gap-10">
            <address className="w-full h-full flex justify-center items-center lg:gap-0 gap-8 not-italic flex-row lg:flex-nowrap flex-wrap lg:px-20 md:px-20 px-5">
                <a href='https://goo.gl/maps/r8Fh591Cst45H7gK7' target='_blank' rel="noreferrer" className="lg:w-full w-auto hover:bg-[#eee] transition-all duration-200"><section className="flex lg:justify-center justify-start items-center gap-8 lg:w-full w-auto lg:border-r-2 border-r-0 border-[#555] max-[300px]:flex-wrap lg:py-2 py-0">
                    <FaHome className="md:text-5xl text-4xl text-[#c13213]"/>
                    <div className="flex justify-center items-start flex-col">
                        <p className="md:text-xl text-lg">Bystra Podhalańska 616</p>
                        <p className="md:text-base text-sm text-[#555]">34-240, Małopolska, PL</p>
                    </div>
                </section></a>
                <a href="callto:+48515041119" className="lg:w-full w-auto hover:bg-[#eee] transition-all duration-200"><section className="flex lg:justify-center justify-start items-center gap-8 lg:w-full w-auto lg:border-r-2 border-r-0 border-[#555] max-[300px]:flex-wrap lg:py-2 py-0">
                    <FaPhoneAlt className="md:text-5xl text-4xl text-[#c13213]"/>
                    <div className="flex justify-center items-start flex-col">
                        <p className="md:text-xl text-lg">+48 515 041 119</p>
                        <p className="md:text-base text-sm text-[#555]">Od poniedziałku do soboty</p>
                    </div>
                </section></a>
                <a href="mailto:galkaandrzej4@gmail.com" className="lg:w-full w-auto hover:bg-[#eee] transition-all duration-200"><section className="flex lg:justify-center justify-start items-center gap-8 lg:w-full w-auto max-[300px]:flex-wrap lg:py-2 py-0">
                    <MdEmail className="md:text-5xl text-4xl text-[#c13213]"/>
                    <div className="flex justify-center items-start flex-col">
                        <p className="md:text-xl text-lg">galkaandrzej4@gmail.com</p>
                        <p className="md:text-base text-sm text-[#555]">lub w wiadomości SMS</p>
                    </div>
                </section></a>
            </address>
            <a href="callto:+48515041119"><button className="bg-[#c13213] px-10 py-5 rounded-lg text-[#fff] hover:bg-[#b02102] transition-all duration-200">Zadzwoń teraz</button></a>
        </motion.section>
        <section className="w-full h-auto flex justify-center items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.935163621376!2d19.767323551640484!3d49.6366765792701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715d89f99667571%3A0xaa6bf296423187dc!2sBystra%20Podhala%C5%84ska%20616%2C%2034-235%20Bystra%20Podhala%C5%84ska!5e0!3m2!1spl!2spl!4v1680523056566!5m2!1spl!2spl" title="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full md:h-[550px] h-[300px] drop-shadow-lg md:px-20 px-5 md:pb-10 pb-5"></iframe>
        </section>
        <Footer/>
    </section>
  );
};
  
export default Contact;