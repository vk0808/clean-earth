import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProblemIntro from "../components/Problem/ProblemIntro";
import SolutionIntro from "../components/Solution/Solution";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemIntro />
      <SolutionIntro />
    </>
  );
};

export default Index;
