import React from "react";
import Logo1 from "./assets/logo1.png";
import { useNavigate } from "react-router-dom";
import Registration1 from "./Registration1";
import NavItem from "./utils/navItem";
import CTA from "./utils/CTA";
import Gallery from "./gallery";
import { GalleryRoute, RegistrationRoute, ContactRoute } from "./routeProvider";
import NavbarSm from "./NavbarSm";
const Navbar = ({ scroll }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-bg1 h-20 w-full drop-shadow-xl text-3xl text-white inline-flex justify-between items-center p-2 z-50">
      <div className="h-20 w-20 drop-shadow-2xl flex items-center">
        <img src={Logo1} alt="logo" />
        <h1 className="text-3xl font-bold">SARGAM</h1>
      </div>
      <NavbarSm />
      <div className="hidden lg:flex text-lg font-medium items-center">
        <ul className="flex items-center w-full ">
          <NavItem scroll={scroll} n={1} title={"Home"} />
          <NavItem scroll={scroll} n={2} title={"Gallery"} />
          <NavItem scroll={scroll} n={3} title={"Events"} />
          <NavItem scroll={scroll} n={4} title={"Contact"} />
          <NavItem scroll={scroll} n={5} title={"Members"} />
          <CTA />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
