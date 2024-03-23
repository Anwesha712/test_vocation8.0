import React from "react";
import { useNavigate } from "react-router-dom";
const NavItem = ({ nav, title }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`${nav}`)}
      className="p-4 hover: ease-in-out hover:cursor-pointer font-font1">
      {title}
    </li>
  );
};

export default NavItem;
