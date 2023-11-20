import React from "react";

const Glow = () => {
  return (
    <div className="w-full absolute bottom-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1332 681"
        fill="none"
      >
        <g filter="url(#filter0_f_2_61)">
          <circle cx="666" cy="666" r="406" fill="#9D6A3C" fillOpacity="0.3" />
        </g>
        <defs>
          <filter
            id="filter0_f_2_61"
            x="0.200012"
            y="0.200012"
            width="1331.6"
            height="1331.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="129.9"
              result="effect1_foregroundBlur_2_61"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Glow;
