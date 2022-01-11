import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import styled from "styled-components";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
// import Carousel from './Carousel'

export default function Homepage() {
  return (
    <HomepageCont>
      <Navbar />
      <About />
      <Skills />
      {/* <Carousel/> */}
      <Projects />
      <Footer />
    </HomepageCont>
  );
}

const HomepageCont = styled.div``;
