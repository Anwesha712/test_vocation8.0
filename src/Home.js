import Hero from "./Hero";
import Navbar from "./Navbar";
import GalleryTW from "./GalleryTW";
import Member from "./Member";
import Footer from "./Footer";
import Event from "./Event";
import UpEvent from "./Up_event";
import Download from "./Download";
import React, { useRef } from "react";
const Home = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  const scrollToSection = (section) => {
    if (sectionRefs[section].current) {
      setTimeout(() => {
        sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
      }, 400); // Adjust the delay (in milliseconds) as needed
    }
  };

  return (
    <>
      <div ref={sectionRefs.section1} className="inline-flex flex-col">
        <Navbar scroll={scrollToSection} className="hidden lg:relative" />
        <div>
          <Hero />
        </div>
        <div className=" bg-black ">
          <Download />
        </div>
        <div
          ref={sectionRefs.section3}
          className="p-4 -mt-2 bg-black h-5/5 w-4/4 shadow-2xl items-center justify-center ">
          <Event />
        </div>
        <div ref={sectionRefs.section2}>
          <GalleryTW />
        </div>

        <div className="p-4 bg-black h-5/5 w-4/4 shadow-2xl items-center justify-center ">
          <UpEvent />
        </div>
        <div
          ref={sectionRefs.section5}
          className="p-4 bg-black h-fit w-full shadow-2xl items-center justify-center ">
          <Member />
        </div>
        <div ref={sectionRefs.section4}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;