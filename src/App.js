import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Home from "./Home";
import Ev_page from "./Ev_page";
import { Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Registration1 from "./Registration1";
import Contact from "./Contact";
import {
  RegistrationRoute,
  ContactRoute,
  Ev_pagetRoute,
} from "./routeProvider";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  
  // Simulate loading time
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <ChakraProvider>
    {loading ? (<Preloader />) : ( 
      <div>
      <Routes>
      <Route path="/" Component={Home} />
      </Routes>
      <Routes>
        <Route path={`/${RegistrationRoute}`} Component={Registration1} />
      </Routes>
      <Routes>
        <Route path={`/${ContactRoute}`} Component={Contact} />
      </Routes>
      <Routes>
        <Route path="/event/:id" Component={Ev_page}>
          {" "}
        </Route>
      </Routes>
      </div>
      )}

    </ChakraProvider>
  
  
    </>
  );
}

export default App;
