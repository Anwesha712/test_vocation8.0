import React from "react";
import Logo1 from "./assets/logo1.png";
import { useNavigate } from "react-router-dom";
import Registration1 from "./Registration1";
import NavItem from "./utils/navItem";
import CTA from "./utils/CTA";
import Gallery from "./gallery";
import { GalleryRoute, RegistrationRoute, ContactRoute } from "./routeProvider";
import NavbarSm from "./NavbarSm";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-bg1 h-20 w-full drop-shadow-xl text-3xl text-white inline-flex justify-between items-center p-2">
      <div className="h-20 w-20 drop-shadow-2xl flex items-center">
        <img src={Logo1} alt="logo" />
        <h1 className="text-3xl font-bold">SARGAM</h1>
      </div>
      <NavbarSm />
      <div className="hidden lg:flex text-lg font-medium items-center">
        <ul className="flex items-center w-full ">
          <NavItem title={"Home"} nav={"/"} />
          <NavItem title={"Gallery"} nav={GalleryRoute} />
          <NavItem title={"Events"} nav={"/"} />
          <NavItem title={"Contact"} nav={`${ContactRoute}`} />
          <NavItem title={"Members"} nav={"/"} />
          <CTA />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
