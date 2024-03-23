import React from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationRoute } from "../routeProvider";
const CTA = () => {
  const navigate = useNavigate();
  return (
    <li className="p-4">
      <button className=" bg-white rounded-full text-black font-bold h-10 w-24 ">
        <p
          onClick={() => navigate(`${RegistrationRoute}`)}
          className=" hover:cursor-pointer font-font1 hover:bg-gradient-to-r from-[#3e3b92] to-[#f44369] hover:text-transparent hover:bg-clip-text ">
          Register
        </p>
      </button>
    </li>
  );
};

export default CTA;
