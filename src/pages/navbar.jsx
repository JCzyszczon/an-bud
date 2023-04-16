import React, { useState, useEffect } from 'react';
import Logo from '../images/logo-an-bud.png';
import {FiMenu} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import { motion } from "framer-motion";
import { MdLocalPostOffice } from 'react-icons/md';
import { FaPhoneAlt, FaMapPin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [navbarText, setNavbarText] = useState('#fff');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 50) {
        setNavbarBackground('#fff');
        setNavbarText('#000');
      } else {
        setNavbarBackground('transparent');
        setNavbarText('#fff');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0.001) ||
        currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header className={`navbar ${visible ? "navbar--shown" : "navbar--hidden"} w-full h-auto flex justify-between items-center fixed left-0 top-0 z-[100] sm:px-10 px-2 transition-all duration-500`} style={{ background: navbarBackground, color: navbarText }}>
          <a href="/"><img src={Logo} alt="Logo" className='w-[170px] h-auto'/></a>
          <nav className='w-full flex justify-end items-center'>
              <ul className='justify-end items-center gap-10 text-[22px] hidden lg:flex'>
                  <li className='relative'><a href='/' className='links'>Strona główna</a></li>
                  <li className='relative'><Link to='projects' smooth={true} duration={300} className='links cursor-pointer'>Projekty</Link></li>
                  <li className='relative'><a href='/galeria' className='links'>Galeria</a></li>
                  <li className='relative'><a href='/oferta' className='links'>Oferta</a></li>
                  <li className='relative'><a href='/kontakt' className='links'>Kontakt</a></li>
              </ul>
              <div onClick={handleClick} className='lg:hidden z-10 text-3xl'>
                  {!nav ? <FiMenu className='text-[#c13213]' /> : <CgClose className='text-[#c13213]'/>}
              </div>
              <motion.ul
                  className={
                      !nav
                          ? 'hidden'
                          : 'absolute top-0 left-0 w-full h-screen bg-[#fff] text-[#c13213] flex flex-col justify-center items-center'
                  }
                  initial={{ y: "-100%" }}
                  animate={{
                      y: nav ? "0%" : "-100%",
                  }}
                  transition={{ duration: 0.5, type: "tween", bounce: 0}}
              >
                  <li className='py-6 text-4xl'>
                  <a href="/">Strona główna</a>
                  </li>
                  <li className='py-6 text-4xl'>
                  <a href="/">Projekty</a>
                  </li>
                  <li className='py-6 text-4xl'>
                  <a href="/galeria">Galeria</a>
                  </li>
                  <li className='py-6 text-4xl'>
                  <a href="/oferta">Oferta</a>  
                  </li>
                  <li className='py-6 text-4xl'>
                  <a href="/kontakt">Kontakt</a>
                  </li>
              </motion.ul>
          </nav>
      </header>
      <aside className='hidden lg:flex fixed flex-col bottom-[15%] right-0 z-[3] mr-[-250px] hover:mr-[-10px] duration-300'>
            <ul>
              <li className='w-[320px] h-[60px] flex justify-around items-center px-5 duration-300 bg-[#c13213] hover:bg-[#b02102] border-b border-[#aaa]'>
                <a className='flex justify-between items-center w-full text-gray-300 h-full text-lg' href='callto:+48515041119'><FaPhoneAlt className='text-2xl'/>+48 515 041 119</a>
              </li>
              <li className='w-[320px] h-[60px] flex justify-around items-center px-5 duration-300 bg-[#c13213] hover:bg-[#b02102] border-b border-[#aaa]'>
                <a className='flex justify-between items-center w-full text-gray-300 h-full text-lg' href='mailto:galkaandrzej4@gmail.com'><MdLocalPostOffice className='text-2xl'/>galkaandrzej4@gmail.com</a>
              </li>
              <li className='w-[320px] h-[60px] flex justify-around items-center px-5 duration-300 bg-[#c13213] hover:bg-[#b02102]'>
                <a className='flex justify-between items-center w-full text-gray-300 h-full text-lg' href='https://goo.gl/maps/r8Fh591Cst45H7gK7' target='_blank' rel="noreferrer"><FaMapPin className='text-2xl'/>Bystra, Podhalańska 616</a>
              </li>
            </ul>
      </aside>
    </>  
  );
};
  
export default Navbar;