import React from "react";
import Layout from "../components/Layout";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Stack from "./Stack";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </Layout>
  );
};

export default Index;
