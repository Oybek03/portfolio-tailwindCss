import React from "react";
import "../output.css";
import About from "./About";
import Contact from "./Contact";
import Expirence from "./Expirence";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Expirence />
      <Contact />
    </div>
  );
};

export default App;
