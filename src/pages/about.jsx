import React, { useEffect } from "react";
import AboutBackground from '../images/image000002.jpg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {

  const {ref, inView} = useInView({
    threshold: 0.3,
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
    <section ref={ref} id='about' className="w-full h-auto flex justify-center items-center py-10 bg-[#eee] overflow-hidden">
      <motion.section animate={animationPic2} className="w-full h-auto flex flex-col justify-center items-center md:gap-16 gap-5 lg:px-20 px-10">
        <h2 className="md:text-5xl sm:text-4xl text-3xl text-[#c13213] font-extrabold tracking-tighter md:text-start text-center">AN-BUD - Gwarancja jakości</h2>
        <p className="text-[#000] lg:text-xl sm:text-lg text-base sm:text-justify text-justify max-h-[320px] overflow-y-scroll">Firma AN-BUD rozpoczęła swoją działalność 1 czerwca 2020 roku i od tego czasu niezmiennie spełnia oczekiwania oraz zadowala swoich klientów profesjonalnie wykonywaną pracą. Jej obszar działania obejmuje zakres całego województwa Małopolskiego - w szczególności powiatu suskiego, gdzie cieszy się nienaganną opinią wśród klientów. Zajmuje się wszelkiego rodzaju wykończeniem wnętrz i wykonywaniem remontów. We wcześniejszych latach firma wykonywała usługi pod inną nazwą.</p>
        <a href="/oferta"><button className="px-10 md:py-4 py-2 bg-[#c13213] text-[#fff] rounded-lg md:text-xl text-lg hover:scale-[1.02] hover:bg-[#d24324] transition-all duration-200">Przeczytaj o nas!</button></a>
      </motion.section>
      <motion.section animate={animationPic} className="w-full h-auto md:flex hidden justify-center items-center lg:px-20 px-10">
        <img src={AboutBackground} alt="Car with Logo" className="w-auto h-auto object-contain md:my-0 my-10 md:px-0 px-10 drop-shadow-lg"/>
      </motion.section>
    </section>
  );
};
  
export default About;