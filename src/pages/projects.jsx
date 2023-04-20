import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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

        let img = importAll(require.context('../images/mainBlock', false, /\.(png|jpe?g|svg|JPE?G|PNG)$/));
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

  const [itemsNumber, setItemsNumber] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        setItemsNumber(2);
      } else if (window.innerWidth <=768) {
        setItemsNumber(1);
      } else {
        setItemsNumber(3);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={ref} id='projects' className='w-full h-auto flex justify-center lg:items-start items-center flex-col md:py-20 py-10 bg-[#fff] relative overflow-hidden'>
        <motion.h1 animate={animationPic2} className='md:text-6xl sm:text-4xl text-3xl text-[#c13213] font-extrabold tracking-tighter lg:px-20 px-2 md:pb-20 pb-10 lg:text-start text-center'>Nasze najnowsze projekty</motion.h1>
        <Swiper
        spaceBetween={30}
        slidesPerView={itemsNumber}
        navigation={true}
        loop={true}
        grabCursor={true}
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
                    <motion.img animate={animationOpacity} src={image} alt={`Image ${index}`}/>
                </SwiperSlide>
            ))}
        </Swiper>
        <a href="/#/galeria"><span className='bg-[#c13213] hover:bg-[#d24324] text-[#fff] w-[250px] h-[250px] lg:flex hidden justify-center items-center absolute right-0 top-0 rounded-full translate-x-12 -translate-y-12 text-lg transition-all duration-200'>Sprawdź zdjęcia!</span></a>
        <span className='bg-[#c13213] hover:bg-[#d24324] text-[#fff] w-[200px] h-[200px] lg:flex hidden justify-center items-center absolute right-[12%] translate-y-40 bottom-0 rounded-full'></span>
        <span className='bg-[#c13213] hover:bg-[#d24324] text-[#fff] w-[200px] h-[200px] lg:flex hidden justify-center items-center absolute left-[0%] top-[25%] -translate-x-20 rounded-full'></span>
    </section>
  );
};
  
export default Projects;