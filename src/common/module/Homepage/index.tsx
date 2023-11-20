"use client";
import Buttons from "@/common/component/element/Buttons";
import React from "react";
import Carousell from "@/common/component/element/Carousel";
import Glow from "@/common/component/element/Glow";
import Card from "@/common/component/element/Card";
import { motion } from "framer-motion";

const AnimateVariant = {
  initial: {
    opacity: 0,
    translateY: 50,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { type: "spring", duration: 3 },
  },
};

const Homepage = () => {
  const text = `HEADPHONE ACCESSORIES`;
  return (
    <div className="h-auto  max-w-[1500px]  mt-[100px] relative">
      <div className="flex relative z-[9] px-10 flex-col xl:flex-row lg:justify-between items-start">
        <div className="">
          <div className="flex flex-row flex-wrap">
            {text.split("").map((item, index) => (
              <motion.h1
                key={index}
                className="md:text-7xl flex text-5xl font-bold text-white"
                initial={{ opacity: 0, translateX: -50, translateY: 10 }}
                animate={{
                  opacity: 1,
                  translateX: index * 0,
                  translateY: index * 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    duration: 1,
                    delay: index * 0.05,
                  },
                }}
              >
                {item === " " ? "\u00A0" : item}
              </motion.h1>
            ))}
          </div>
          <motion.div
            variants={AnimateVariant}
            initial="initial"
            animate="animate"
          >
            <motion.h2 className="xl:w-full w-[20rem]  text-white mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s,
            </motion.h2>
            <Buttons
              className="mt-5"
              icon=""
              icons=""
              title="Read More"
              href=""
            />
          </motion.div>
        </div>
        <Glow />
        <div className="relative xl:top-[-100px]">
          <Carousell />
        </div>
      </div>
      <div className="rightbg  h-[240vh] xl:w-[50%] w-[90%]  top-[-100px] right-0 xl:right-[-80px] absolute"></div>
      <Card />
    </div>
  );
};

export default Homepage;
