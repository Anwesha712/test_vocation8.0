import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Hero2 from "./Hero2";
import GalleryTW from "./GalleryTW";
import Member from "./Member";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="inline-flex flex-col">
        <Navbar className="hidden lg:relative" />
        <Hero />
        {/* <Hero2 /> */}
        <GalleryTW />
        <div className="p-4 bg-black h-5/5 w-4/4 shadow-2xl items-center justify-center ">
          <Member />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
