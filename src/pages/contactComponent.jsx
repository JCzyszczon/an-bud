import React, { useEffect } from "react";
import {FaHome, FaPhoneAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const ContactComponent = () => {

  const {ref, inView} = useInView({
        threshold: 0.5,
  });
  const animationOpacity = useAnimation();
  const animationPic2 = useAnimation();
  const animationPic = useAnimation();
    
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
          animationPic.start({
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
          animationPic.start({
            x: '+100px',
            opacity: 0,
            transition: {
              type: 'tween',
              duration: 0.5,
            }
          });
        }
    
  }, [inView]);

  return (
    <section ref={ref} id='contact' className="w-full h-auto ">
        <motion.h2 animate={animationOpacity} className="w-full md:text-6xl text-4xl font-extrabold tracking-tighter text-[#c13213] md:px-24 px-0 md:pt-16 pt-10 md:text-start text-center">Kontakt</motion.h2>
        <motion.section animate={animationPic2} className="w-full h-auto flex sm:justify-between justify-center items-center md:my-10 my-2 lg:flex-row flex-col">
            <address className="w-full h-full flex sm:justify-center justify-center items-center gap-8 not-italic lg:flex-col flex-row flex-wrap lg:my-0 my-10 sm:px-0 px-2">
                <section className="flex justify-start items-center gap-8 2xl:w-[500px] w-auto max-[300px]:flex-wrap">
                    <FaHome className="md:text-5xl text-2xl text-[#c13213]"/>
                    <div className="flex justify-center items-start flex-col">
                        <p className="md:text-xl text-base">Bystra Podhalańska 616</p>
                        <p className="md:text-base text-sm text-[#555]">34-235, Małopolska, PL</p>
                    </div>
                </section>
                <section className="flex justify-start items-center gap-8 2xl:w-[500px] w-auto max-[300px]:flex-wrap">
                    <FaPhoneAlt className="md:text-5xl text-2xl text-[#c13213]"/>
                    <div className="flex justify-center items-start flex-col">
                        <p className="md:text-xl text-base">+48 515 041 119</p>
                        <p className="md:text-base text-sm text-[#555]">Od poniedziałku do soboty</p>
                    </div>
                </section>
                <section className="flex justify-start items-center gap-8 2xl:w-[500px] w-auto max-[300px]:flex-wrap">
                    <MdEmail className="md:text-5xl text-2xl text-[#c13213]"/>
                    <div className="flex justify-center items-start flex-col">
                        <p className="md:text-xl text-base">galkaandrzej4@gmail.com</p>
                        <p className="md:text-base text-sm text-[#555]">lub w wiadomości SMS</p>
                    </div>
                </section>
            </address>
            <motion.section animate={animationPic} className="w-full h-full flex justify-center items-center pb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.935163621376!2d19.767323551640484!3d49.6366765792701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715d89f99667571%3A0xaa6bf296423187dc!2sBystra%20Podhala%C5%84ska%20616%2C%2034-235%20Bystra%20Podhala%C5%84ska!5e0!3m2!1spl!2spl!4v1680523056566!5m2!1spl!2spl" title="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="sm:w-[700px] w-auto sm:h-[450px] h-auto drop-shadow-lg max-[300px]:hidden"></iframe>
            </motion.section>
        </motion.section>
    </section>
  );
};
  
export default ContactComponent;