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
    transition: { type: "spring", duration: 2, delay: 0.7 },
  },
};

const Homepage = () => {
  const text = `HEADPHONE`;
  const text2 = " ACCESSORIES";
  const aboutt = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing and"
    },
    {
      title: 'typesetting industry. Lorem Ipsum has been the industry&rsquo;s'
    },
    {
      title: 'standard dummy text ever since the 1500s,'
    }
  ]
  const aboutText = Array.from(aboutt)


  return (
    <div className="h-auto  max-w-[1400px]  mt-[100px] ">
      <div className="flex relative z-[9] xl:px-32 px-10 flex-col xl:flex-row lg:justify-between items-start">
        <div className="">
          <div className="flex flex-col flex-wrap">
            <motion.div className="md:text-6xl flex text-4xl overflow-hidden font-bold w-full text-white">
              <motion.h1
                className="flex flex-col overflow-hidden"
                initial={{ opacity: 0, translateY: -50}}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                  },
                }}
              >
                {text}
                <motion.span
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: {
                      type: "spring",
                      duration: 1,
                      delay: 0.2,
                    },
                  }}
                >
                  {text2}
                </motion.span>
              </motion.h1>
            </motion.div>
          </div>
          <motion.div
            // variants={AnimateVariant}
            // initial="initial"
            // animate="animate"
          >
            <div className="overflow-hidden mt-5">
              {aboutText.map((item, index) => (
            <motion.h2 className="xl:w-full w-[20rem]  text-white" key={index}
            initial={{ opacity: 0,y: 50, height: '10px'}}
            animate={{opacity: 1, y: 0 ,height: 'auto', transition: {type: "spring", duration: 1, delay: 0.2 * index}}}
            style={{ overflowY: 'hidden'}}
            >
              {item.title}
            </motion.h2>
              ))}
            </div>
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
        <div className="relative xl:top-[-100px] mb-20">
          <Carousell />
        </div>
      </div>
      <div className="rightbg  h-[240vh] xl:w-[90%] w-[90%]  top-[-100px] right-0 xl:right-[-80px] absolute"></div>
      <Card />
    </div>
  );
};

export default Homepage;
