import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Home from "./Home";
import Ev_page from "./Ev_page";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Registration1 from "./Registration1";
import Contact from "./Contact";
import { RegistrationRoute, ContactRoute, Ev_pagetRoute } from "./routeProvider";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
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
        <Route path={`/${Ev_pagetRoute}`} Component={Ev_page} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
