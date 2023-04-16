import React, { useState } from "react";
import GalleryŁazienki from "./galleryŁazienki";
import GalleryKuchnie from "./galleryKuchnie";
import GallerySalony from "./gallerySalony";
import GalleryKlatki from "./galleryKlatki";
import GalleryKorytarze from "./galleryKorytarze";
import GalleryWiaty from "./galleryWiaty";

function PrzyciskSekcji({ section, isSelected, onClick }) {
  const buttonStyle = {
    backgroundColor: isSelected ? '#c13213' : '#ccc',
    color: isSelected ? '#fff' : '#333',
    borderRadius: '8px',
    transition: 'all 0.2s',
  };

  return (
    <button style={buttonStyle} onClick={onClick} className="md:px-10 px-2 md:py-4 py-2 md:text-base text-sm">
      {section}
    </button>
  );
}

const GalleryComponent = () => {

  const [selectedSection, setSelectedSection] = useState('łazienki');

  return (
    <section id='gallery' className="w-full h-auto flex flex-col justify-center items-center">
      <div className="lg:w-[70%] w-[90%] py-16 h-auto justify-evenly items-center text-[#333] overflow-hidden md:gap-10 gap-2 flex flex-wrap">
        <PrzyciskSekcji
          section="Łazienki"
          isSelected={selectedSection === 'łazienki'}
          onClick={() => setSelectedSection('łazienki')}
        />
        <PrzyciskSekcji
          section="Kuchnie"
          isSelected={selectedSection === 'kuchnie'}
          onClick={() => setSelectedSection('kuchnie')}
        />
        <PrzyciskSekcji
          section="Salony"
          isSelected={selectedSection === 'salony'}
          onClick={() => setSelectedSection('salony')}
        />
        <PrzyciskSekcji
          section="Klatki schodowe"
          isSelected={selectedSection === 'klatki schodowe'}
          onClick={() => setSelectedSection('klatki schodowe')}
        />
        <PrzyciskSekcji
          section="Korytarze"
          isSelected={selectedSection === 'korytarze'}
          onClick={() => setSelectedSection('korytarze')}
        />
        <PrzyciskSekcji
          section="Wiaty i tarasy"
          isSelected={selectedSection === 'wiaty i tarasy'}
          onClick={() => setSelectedSection('wiaty i tarasy')}
        />
      </div>
      {selectedSection === "łazienki" ? (
        <GalleryŁazienki/>
      ) : selectedSection === "kuchnie" ? (
        <GalleryKuchnie/>
      ) : selectedSection === "salony" ? (
        <GallerySalony/>
      ) : selectedSection === "klatki schodowe" ? (
        <GalleryKlatki/>
      ) : selectedSection === "korytarze" ? (
        <GalleryKorytarze/>
      ) : selectedSection === "wiaty i tarasy" ? (
        <GalleryWiaty/>
      ) : (
        <GalleryŁazienki/>
      )} 
    </section>
  );

};
  
export default GalleryComponent;