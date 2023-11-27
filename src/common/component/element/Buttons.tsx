'use client'
import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ButtonsProps {
    className: string;
    icon: ReactNode;
    icons: ReactNode;
    href: string;
    title: string;
}

const Buttons = ({className= '', icons,icon, title}: ButtonsProps) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <motion.button
      initial={{width: '100%', height: '4px', padding: '0px'}}
      animate={{width: '40%' ,height: '40px',padding: '7px', transition: {type: 'spring', delay: 1, duration: 2}}}
      color="default"
      className={clsx("lg:hover:bg-neutral-100 flex justify-center bg-[#9D6A3C] overflow-hidden  rounded-lg relative group ", className)}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <motion.h1 
      initial={{y: 50}}
      animate={{y: 0, transition: {type: 'spring', duration: 2, delay: 1}}}
      className="w-full justify-center z-[9] flex items-center gap-2 lg:group-hover:text-black text-white  relative">
        <span>
        {icon && <>{icon}</>}
        </span>
        {title}
      </motion.h1>
      <div className="absolute top-0 right-[-12px] group-hover:z-[2] group-hover:rotate-12">
      {icons && <>{icons}</>}
      </div>
      <motion.div 
      animate={hover ? {borderRadius: 0, width: '110%'} : {borderRadius: 500, width: '10%'}}
      className={clsx(`absolute inset-0 lg:translate-y-[100%]  lg:bg-[#fff] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]`)}></motion.div>
    </motion.button>
  );
};

export default Buttons;
