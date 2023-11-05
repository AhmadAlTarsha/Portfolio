import React from "react";
import NavBar from "./comopnents/NavBar";
import { FaBars } from "react-icons/fa";
import Home from "./comopnents/Home";
import SocialLinks from "./comopnents/SocialLinks";
import About from "./comopnents/About";
import Projects from "./comopnents/Projects";
import Technologies from"./comopnents/Technologies"
function App() {
  return (
    <div  >
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
       <Projects/>
<Technologies/>

     
    </div>
  );
}

export default App;
