import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Home from "./Home";
import Ev_page from "./Ev_page";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function App() {
  // Simulate loading time
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);
  const navigate = useNavigate();
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };
  const scrollToSection = (section) => {
    navigate("/");
    if (sectionRefs[section].current) {
      setTimeout(() => {
        sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
      }, 400); // Adjust the delay (in milliseconds) as needed
    }
  };
  return (
    <ChakraProvider>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar scroll={scrollToSection} className="hidden lg:relative" />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  sectionRefs={sectionRefs}
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route path="/event/:id" element={<Ev_page />} />
          </Routes>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
