import React from "react";
import Logo4 from "./assets/logo3.1.png";
import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";
import Registration1 from "./Registration1";
import bg1 from "./assets/Img12.jpeg";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-black h-screen w-full items-center justify-center text-white inline-flex gap-4 flex-col md:flex-row ">
      <Tilt className="h-3/5 lg:h-full px-20 box-border w-full md:w-2/5">
        <div className=" h-full w-full items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={Logo4}
            alt="Logo2"
          />
        </div>
      </Tilt>
      <div className=" items-center justify-center flex-col px-2">
        <h1 className="text-5xl font-font3">
          Witness The Biggest{" "}
          <div className="flex">
            {" "}
            <p className="bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-transparent font-font3 bg-clip-text p-1">
              Music
            </p>{" "}
            <p className="p-1">Fest.</p>
          </div>
        </h1>
        <p className="px-2">This is the best Music Competition in Kolkata.</p>
        <div className="p-2">
          <button
            onClick={() => navigate("/Registration")}
            className="bg-white rounded-full text-black font-bold h-10 w-fit text-xl">
            <p className="bg-gradient-to-r from-[#3e3b92] to-[#f44369] text-transparent font-font1 bg-clip-text p-1 px-4 box-border">
              Register
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
