import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Home from "./Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Registration1 from "./Registration1";
import Contact from "./Contact";
import { RegistrationRoute, ContactRoute } from "./routeProvider";
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
    </ChakraProvider>
  );
}

export default App;
