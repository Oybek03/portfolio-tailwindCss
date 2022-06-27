import React from "react";
import "../output.css";
import About from "./About";
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
    </div>
  );
};

export default App;
