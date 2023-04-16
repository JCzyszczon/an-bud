import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import OfferImage from '../images/image000002.jpg';


const AboutComponent = () => {

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
    <section ref={ref} id='about' className="w-full h-full flex justify-between items-center sm:my-16 my-8 overflow-hidden md:flex-row flex-col">
        <motion.section animate={animationPic2} className="flex justify-center items-center flex-col w-full h-full md:gap-16 gap-5 lg:px-20 px-10">
            <h3 className="uppercase text-[#c13213] lg:text-6xl text-5xl font-extrabold tracking-tighter">an-bud</h3>
            <p className="text-[#000] lg:text-xl sm:text-lg text-base sm:text-justify text-justify max-h-[320px] overflow-y-scroll">Firma AN-BUD rozpoczęła swoją działalność 1 czerwca 2020 roku i od tego czasu niezmiennie spełnia oczekiwania oraz zadowala swoich klientów profesjonalnie wykonywaną pracą. Jej obszar działania obejmuje zakres całego województwa Małopolskiego - w szczególności powiatu suskiego, gdzie cieszy się nienaganną opinią wśród klientów. Zajmuje się wszelkiego rodzaju wykończeniem wnętrz i wykonywaniem remontów. We wcześniejszych latach firma wykonywała usługi pod inną nazwą.</p>
            <h4 className="text-[#c13213] lg:text-4xl text-3xl font-medium tracking-tighter md:flex hidden">W naszej ofercie znajduje się:</h4>
        </motion.section>
        <motion.section animate={animationPic} className="w-full h-full flex justify-center items-center flex-col">
            <img src={OfferImage} alt="Car with Logo" className="w-auto h-auto object-contain md:my-0 my-10 md:px-0 px-10 drop-shadow-lg"/>
            <h4 className="text-[#c13213] text-3xl font-medium tracking-tighter md:hidden flex text-center">W naszej ofercie znajduje się:</h4>
        </motion.section>
    </section>
  );
};
  
export default AboutComponent;