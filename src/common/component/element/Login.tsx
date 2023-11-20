import React from "react";

const Login = () => {
  return (
    <button className="text-lg bg-[#111111] relative overflow-hidden group text-white py-[3px] px-5 rounded-full">
      <h1 className="group-hover:z-[9] lg:group-hover:text-black lg:transition-all lg:duration-300 relative">
        Login
      </h1>
      <div className="absolute inset-0 lg:translate-y-[100%] lg:bg-[#fff] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
    </button>
  );
};

export default Login;