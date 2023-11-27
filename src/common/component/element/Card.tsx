'use client'
import React from "react";
import { GridText } from "@/common/constant/GridText";
import clsx from "clsx";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div className="xl:absolute z-[9] relative items-center xl:bottom-[20px] py-10 xl:px-32 px-10 flex lg:flex-row flex-col gap-5 justify-center"
    >
      {GridText.map((item, index) => (
        <motion.div
          key={index}
          className={clsx(
            item.className,
            `flex flex-col max-w-xs rounded-xl text-white py-10 px-5 `)}
          initial={{opacity: 0, translateY: 50}}
          whileInView={{opacity: 1, translateY: 0, transition: {type: "spring", duration: 2, delay: 0.2 * index }}}
          viewport={{once: true}}
        >
          <h1 className="text-3xl font-semibold">{item.head}</h1>
          <h2 className="text-sm">
            {item.body}
          </h2>
        </motion.div>
      ))}
      <motion.div className="w-full h-[4px] bg-[#e6e5e55d] absolute z-[-9] md:block hidden"  
      initial={{width: '0%'}}
      whileInView={{width: '100%', transition: {type: "spring", duration: 1, bounce: 0.10}}}
      viewport={{once:true}}
      >

      </motion.div>
      <motion.div className="w-[4px] h-full top-[43px] bg-[#e6e5e55d] absolute z-[-9] md:hidden block left-[30px]"  
      initial={{height: '10%'}}
      whileInView={{height: '100%', transition: {type: "spring", duration: 1, bounce: 0.10}}}
      viewport={{once:true}}
      >
      </motion.div>
    </motion.div>
  );
};

export default Card;
