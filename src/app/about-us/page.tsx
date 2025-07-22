"use client";
import React from "react";
import HeroSection from "./HeroSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { VisionSection } from "./VisionSection";
import { OurValues } from "./OurValues";
import { VisionBehindDavinci } from "./VisionBehindDavinci";
import ImageSlider from "@/components/ReactSlick";

const AboutUs = () => {
  return (
    <div className="bg-[#f5f5f5] max-w-[100%] overflow-hidden">
      <HeroSection />
      {/* <MarqueeCarousel /> */}
      <div className=" bg-white h-[100px] relative hidden md:block">
        <ImageSlider />
      </div>
      <VisionBehindDavinci />
      <OurValues />
      <VisionSection />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
