'use client'
import React from "react";
import { GridText } from "@/common/constant/GridText";
import clsx from "clsx";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="xl:absolute relative items-center xl:bottom-[20px]  px-10 flex lg:flex-row flex-col gap-5 justify-center">
      {GridText.map((item, index) => (
        <motion.div
          key={index}
          className={clsx(
            item.className,
            `flex flex-col max-w-xs rounded-xl text-white py-10 px-5 `)}
          initial={{opacity: 0, translateY: 50}}
          whileInView={{opacity: 1, translateY: 0, transition: {type: "spring", duration: 2, delay: index * 0.50}}}
        >
          <h1 className="text-3xl font-semibold">{item.head}</h1>
          <h2 className="text-sm">
            {item.body}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
