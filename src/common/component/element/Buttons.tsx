import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonsProps {
    className: string;
    icon: ReactNode;
    icons: ReactNode;
    href: string;
    title: string;
}

const Buttons = ({className= '', icons,icon, title}: ButtonsProps) => {
  return (
    <button
      color="default"
      className={clsx("lg:hover:bg-neutral-100 bg-[#9D6A3C] overflow-hidden py-2 px-5 rounded-lg relative group lg:transition-all lg:duration-300", className)}
    >
      <h1 className=" z-[99] flex items-center gap-2 lg:group-hover:text-black text-white lg:transition-all lg:duration-300 relative">
        <span>
        {icon && <>{icon}</>}
        </span>
        {title}
      </h1>
      <div className="absolute top-0 right-[-12px] group-hover:z-[2] group-hover:rotate-12">
      {icons && <>{icons}</>}
      </div>
      <div className="absolute inset-0 lg:translate-y-[100%] lg:bg-[#fff] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
    </button>
  );
};

export default Buttons;
