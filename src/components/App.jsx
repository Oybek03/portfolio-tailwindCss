import React from "react";
import "../output.css";
import Home from "./Home";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
    </div>
  );
};

export default App;
