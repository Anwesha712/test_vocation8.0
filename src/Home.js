import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Hero2 from "./Hero2";
import GalleryTW from "./GalleryTW";

const Home = () => {
  return (
    <div className="inline-flex flex-col">
      <Navbar className="hidden lg:relative" />
      <Hero />
      {/* <Hero2 /> */}
      <GalleryTW />
    </div>
  );
};

export default Home;
