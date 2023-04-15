import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Projects = () => {
   const [images, setImages] = useState([]);
   const {ref, inView} = useInView({
    threshold: 0.7,
   });
   const animationOpacity = useAnimation();
   const animationPic2 = useAnimation();

   useEffect(() => {
        const importAll = (r) => {
          return r.keys().map(r);
        }

        let img;
        if (window.innerWidth <= 640) {
            img = importAll(require.context('../images/mobileBlock', false, /\.(png|jpe?g|svg|JPE?G|PNG)$/));
        } else {
            img = importAll(require.context('../images/mainBlock', false, /\.(png|jpe?g|svg|JPE?G|PNG)$/));
        }
        setImages(img);

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
    <section ref={ref} id='projects' className='w-full sm:h-[auto] h-auto flex justify-center lg:items-start items-center flex-col py-10 bg-[#eee] relative overflow-hidden'>
        <motion.h1 animate={animationPic2} className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold tracking-tighter lg:px-32 px-0 lg:pb-14 pb-10 text-[#c13213]'>Nasze najnowsze projekty</motion.h1>
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="swiperProjects"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="swiperSlideProjects">
                    <motion.img animate={animationOpacity} src={image} alt={`Image ${index}`} className='sm:px-0 px-4'/>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};
  
export default Projects;