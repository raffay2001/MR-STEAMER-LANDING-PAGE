import React from "react";
import {
  BecomeMember,
  BecomeMrSteamer,
  Features,
  Footer,
  Header,
  Hero,
  HireUs,
  Services,
  WhyUs,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Services />
      <HireUs />
      <WhyUs />
      <BecomeMrSteamer />
      <BecomeMember />
      <Footer />
    </>
  );
};

export default HomePage;
