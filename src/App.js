import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Home from "./Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Registration1 from "./Registration1";
import Contact from "./Contact";

function App() {
  return (
    <div className="">
      
      <Routes><Route path="/" Component={Home} /></Routes>
      <Routes><Route path="/Registration" Component={Registration1} /></Routes>
      <Routes><Route path="/Connect" Component={Contact} /></Routes>
    </div>
  );
}

export default App;
