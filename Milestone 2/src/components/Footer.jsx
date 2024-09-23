import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
      <span className="text-white">Find Me On</span>

      <div className="flex flex-row space-x-6 text-2xl">
        <a href="https://github.com/hurmatayub" target="_blank" rel="noopenor noreferrer">
        <AiFillGithub className="bg-slate-200 box-content px-3 py-2 rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-slate-800"/></a>
        <a href="https://www.linkedin.com/in/hurmat-ayub-2757422b8/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className="bg-slate-200 box-content px-3 py-2 rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600"/></a>
        <AiFillTwitterSquare className="bg-slate-200 box-content px-3 py-2 rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-slate-900"/>
        <a href="mailto:hurmatayub64@gmail.com">
        <AiFillMail className="bg-slate-200 box-content px-3 py-2 rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-red-600"/></a>
      </div>

         
         
    </div>
  );
};

export default Footer;
