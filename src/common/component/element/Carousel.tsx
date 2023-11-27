import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "./Image";
import ImageItem from "@/common/module/Homepage/component/ImageItem";
import ImgScale from "./ImgScale";

const Carousell = () => {
  return (
    <div>
      <Carousel
        className="rounded-xl pt-20  no-scrollbar "
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute outline outline-[1px] rounded-full top-[80%] z-[9] left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute outline outline-[1px] rounded-full z-[99] top-[80%] 2xl:!right-[100px] right-0 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <ImageItem />
        <ImgScale>
          <Image
            src="/img/pngwing3.png"
            alt="headphone"
            width={550}
            height={550}
            className="mt-[-100px]"
            priority
          />
        </ImgScale>
        <ImgScale>
          <Image
            src="/img/pngwing4.png"
            alt="headphone"
            width={550}
            height={550}
            className="mt-[-100px]"
            priority
          />
        </ImgScale>
      </Carousel>
    </div>
  );
};

export default Carousell;
