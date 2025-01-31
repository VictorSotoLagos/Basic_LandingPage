import { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import Statistics from "./components/Statistics/Statistics";
import Testimonials from "./components/Testimonials/Testimonials";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Preheader } from "./components/Preheader/Preheader";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Preheader />
      <Header />
      <HeroSection />
      <Features />
      <Statistics />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
