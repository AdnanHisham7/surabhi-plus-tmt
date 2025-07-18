import React from "react";
import Hero from "../components/Home/Hero";
import ProductHighlights from "../components/Home/ProductHighlights";
import ManufacturingProcess from "../components/Home/ManufacturingProcess";
import Statistics from "../components/Home/Statistics";
import Testimonials from "../components/Home/Testimonials";
import Certifications from "../components/Home/Certifications";
import SurabhiPromo from "../components/Home/SurabhiPromo";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductHighlights />
      <SurabhiPromo />
      <ManufacturingProcess />
      <Statistics />
      {/* <Testimonials /> */}
      <Certifications />
    </div>
  );
};

export default HomePage;
