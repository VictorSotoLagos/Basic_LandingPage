import React from "react";

const HeroSection = () => {
  return (
    <main className="px-10 py-18 md:py-20 md:px-30 flex flex-col bg-gray-100 md:h-120 bg-[url('/public/bg-image-hero.jpg')] bg-cover bg-center ">
      {/* Container with two columns*/}
      <section className="flex flex-col md:flex-row">
        {/* First col */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-stone-100 leading-tight">
            Your Hero Section Title Or Specific Offer
          </h1>
          <p className="py-5 text-2xl text-stone-200">
            Your Hero Section Subtitle, Specific Offer Description Or List of
            Features/Benefits
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            CTA - Call to Action
          </button>
        </div>
        {/* Second col */}
        <div className="md:w-1/2"></div>
      </section>
    </main>
  );
};

export default HeroSection;
