import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#333333aa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 200,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "0px",
    outline: "none",
    padding: '0px',
    border: 'none',
    backgroundColor: '#33333300',
    width: '50%',
    height: '95%',
    blur: '10px',
  }
}

Modal.setAppElement('#root'); // ustawiamy element aplikacji, na którym ma być umieszczany modal

const GalleryKorytarze = () => {

  const [zdjecia, setZdjecia] = useState([]);
  const [count, setCount] = useState(0);
  const [allImg, setAllImg] = useState(false);

  const [clickedSlide, setClickedSlide] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSlide = (item, index) => {
    setCurrentIndex(index);
    setClickedSlide(item);
    setIsModalOpen(true);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const numberOfItems = zdjecia.length;

  const loadMore = () => {
    if(count >= numberOfItems) {
      setAllImg(true);
    } else {
      setCount(count + 8);
    }
  }

  useEffect(() => {
    const importAll = (r) => {
        return r.keys().map(r);
    }
    const images = importAll(require.context(`../images/korytarze`, false, /\.(png|jpe?g|svg)$/));
    setZdjecia(images);

    setAllImg(false);
    setCount(8);

  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "overlay";
    }
    return () => {
      document.body.style.overflow = "overlay";
    };
  }, [isModalOpen]);

  return (
    <>
        <div className="w-full h-auto grid justify-center items-center lg:grid-cols-4 grid-cols-3 gap-2 pb-10 lg:px-20 sm:px-5 px-1">
            {zdjecia.slice(0,count).map((zdjecie, index) => (
                <img
                key={index}
                src={zdjecie}
                alt={zdjecie}
                className="w-full lg:h-[500px] sm:h-[450px] h-auto object-cover cursor-pointer"
                onClick={() => getSlide(zdjecie, index)}
                />
            ))}
        </div>
        <div className='flex justify-center items-center pb-10'>
            {allImg ? (
            <></>
            ) : (
            <button onClick={()=>{loadMore()}} className='bg-[#c13213] hover:bg-[#d24324] px-10 py-3 rounded-lg text-[#fff] hover:scale-101 duration-300'>Zobacz więcej</button>
            )}
        </div>
        {clickedSlide && 
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel={clickedSlide.title}
            style={customStyles}
          >
            <Swiper navigation={true} modules={[Keyboard, Navigation]} keyboard={{enabled: true,}} initialSlide={currentIndex} className="gallerySwiper">
            {zdjecia.map((zdjecie, index) => (
              <SwiperSlide key={index} className="gallerySwiperSlide">
                <img
                key={index}
                src={zdjecie}
                alt={zdjecie}
                className="w-[500px] h-auto object-contain"
                />
              </SwiperSlide>
            ))}
            </Swiper>
            <button onClick={closeModal} className="absolute right-2 top-0 z-[10000] bg-[#fff] px-5 py-1 rounded-lg">Zamknij</button>
          </Modal>
        }
    </>
  );

};
  
export default GalleryKorytarze;