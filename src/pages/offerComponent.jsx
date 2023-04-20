import React, { useState, useEffect } from "react";
import AboutBackground from '../images/aboutBackground.jpeg'
import { Parallax } from "react-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { FaPaintRoller, FaHome, FaInfoCircle, FaBrush, FaMicrosoft, FaClone, FaLayerGroup } from 'react-icons/fa';
import { MdOutlineRoofing } from 'react-icons/md';
import OfferMobile from '../images/offerMobile.jpeg';


const OfferComponent = () => {
  
  let icons = [
    {
        id: 1,
        name: 'Malowanie pomieszczeń',
        component: <FaPaintRoller className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 2,
        name: 'Szpachlowanie',
        component: <FaBrush className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 3,
        name: 'Adaptacje poddaszy',
        component: <FaHome className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 4,
        name: 'Układanie fliz',
        component: <FaMicrosoft className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 5,
        name: 'Podwieszanie sufitów',
        component: <MdOutlineRoofing className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 6,
        name: 'Układanie podłóg',
        component: <FaLayerGroup className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 7,
        name: 'Zabudowa kartongips',
        component: <FaClone className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
    {
        id: 8,
        name: 'Oraz wiele innych!',
        component: <FaInfoCircle className="text-[#c13213] lg:text-5xl text-4xl"/>
    },
  ]

  const {ref, inView} = useInView({
    threshold: 0.4,
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

  const [bgImage, setBgImage] = useState(AboutBackground);
  const [itemsNumber, setItemsNumber] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768 && window.innerWidth > 500) {
        setBgImage(OfferMobile);
        setItemsNumber(2);
      } else if (window.innerWidth <=500) {
        setBgImage(OfferMobile);
        setItemsNumber(1);
      } else {
        setBgImage(AboutBackground);
        setItemsNumber(4);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Parallax blur={0} strength={-300} bgImage={bgImage} bgImageAlt='Background'>
        <section ref={ref} className="w-full md:h-[40vh] h-[30vh] flex justify-center items-center relative select-none">
            <Swiper navigation={true} slidesPerView={itemsNumber} spaceBetween={30} grabCursor={true} autoplay={{delay: 2500, disableOnInteraction: false}} loop={true} modules={[Navigation, Autoplay]} className="swiperAbout">
                {inView && icons.map((icon, index) => (
                    <SwiperSlide key={index} className="swiperSlideAbout">
                        <motion.div initial={{opacity: 0, translateX: -10 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} exit={{opacity: 0, transition: {duration: 3, delay: index * 0.1}, }} className="w-full flex justify-center items-center flex-col gap-5 text-center">
                            {icon.component}
                            <p className="lg:text-2xl text-xl text-[#fff] font-light">{icon.name}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
      </Parallax>
    </>
  );
};
  
export default OfferComponent;