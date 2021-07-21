import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProblemIntro from '../components/Problem/ProblemIntro'

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemIntro />
    </>
  );
};

export default Index;
