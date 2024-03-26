import React from "react";
import { useNavigate } from "react-router-dom";
const NavItem = ({ scroll, title, n }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => scroll(`section${n}`)}
      className="p-4 hover: ease-in-out hover:cursor-pointer font-font1">
      {title}
    </li>
  );
};

export default NavItem;
