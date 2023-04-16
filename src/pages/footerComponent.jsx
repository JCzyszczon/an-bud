import React, {  } from "react";
import Logo from '../images/logo-an-bud.png';

const Footer = () => {

  return (
    <section id='footer' className="w-full h-auto bg-[#eee] flex md:justify-between justify-center items-center px-20 flex-wrap md:py-0 py-5">
        <a href="/"><img src={Logo} alt="logo" className="w-[150px] h-auto md:flex hidden"/></a>
        <p className="text-[#c13213] md:text-start text-center md:text-base text-sm">&copy; AN-BUD wszelkie prawa zastrzeżone</p>
        <span className="text-[#c13213] md:flex hidden">by <a href="https://github.com/JCzyszczon" className="hover:underline ml-1"> jczyszczon</a></span>
    </section>
  );
};
  
export default Footer;