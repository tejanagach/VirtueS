"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Helper function to highlight a given substring
function highlightSubstring(text: any, substring: any) {
  if (!substring) return text;

  const parts = text.split(new RegExp(`(${substring})`, "gi"));

  return parts.map((part: any, index: any) => {
    if (part.toLowerCase() === substring.toLowerCase()) {
      return (
        <span key={index} className="text-red-600 font-bold">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function CaseStudyCarousel() {
  // Slide data array
  const slides = [
    {
      tabLabel: "SAP Implementation",
      heading: "Financial Excellence with SAP: 3M's Success Story",
      body: `VirtueS collaborated with 3M to revolutionize their finance and treasury
      operations through a strategic SAP implementation. By automating financial
      workflows, optimizing cash management, and strengthening risk controls,
      we enhanced efficiency, compliance, and decision-making. Our advisory
      services streamlined financial reporting and liquidity management,
      enabling 3M to navigate complex global markets with agility and confidence.`,
      buttonText: "Read More",
      imageSrc: "/analytical.jpg",
      highlight: "3M",
    },
    {
      tabLabel: "AI Based Automation Solution",
      heading: "AI-Driven Automation: Unlocking Efficiency",
      body: `We leveraged cutting-edge AI to eliminate manual tasks, enhance predictive
      capabilities, and drive real-time analytics. Our AI-driven approach not only
      streamlined operations but also empowered the workforce with actionable
      insights, creating a more agile and innovative environment.`,
      buttonText: "Explore More",
      imageSrc: "/ai-banner.png",
      highlight: "AI-Driven",
    },
    {
      tabLabel: "Workforce Transformation",
      heading: "Empowering People: Workforce Transformation",
      body: `By focusing on skill development, culture change, and strategic realignment,
      we enabled enterprises to build a resilient, growth-oriented workforce.
      Our tailored initiatives encourage collaboration, agility, and continuous
      innovation across all levels of the organization.`,
      buttonText: "Learn More",
      imageSrc: "/Touch.jpg",
      highlight: "Workforce",
    },
  ];

  // Track which slide is active
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically advance to next slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clear the interval on unmount
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Precision-Driven,{" "}
          <span className="text-[#DC9030]">Problem Solving</span>
        </h2>

        {/* Carousel Container */}
        {/*
          We set relative positioning and a fixed min height so
          slides stack and fade in/out without changing layout.
        */}
        <div className="relative min-h-[420px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 
                transition-opacity duration-500 
                ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"} 
                flex flex-col md:flex-row gap-6 items-start
              `}
            >
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full flex flex-col md:flex-row gap-6">
                {/* Left Text Section */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#D27500] mb-4">
                    {highlightSubstring(slide.heading, slide.highlight)}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {slide.body}
                  </p>
                  {/* <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors">
                    {slide.buttonText}
                  </button> */}
                </div>

                {/* Right Image Placeholder */}
                <div className="flex-shrink-0 w-full md:w-1/2 min-h-[360px] bg-gray-300 rounded-md relative">
                  {/* If you have a real image, uncomment: */}
                  <Image
                    src={slide.imageSrc}
                    alt="Case study image"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs / Navigation */}
        <div className="mt-16 flex justify-center space-x-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={
                `pb-2 border-b-4 focus:outline-none transition-colors ` +
                (index === activeIndex
                  ? "border-orange-500 text-gray-900 font-semibold"
                  : "border-transparent text-gray-500 hover:text-gray-700")
              }
            >
              {slide.tabLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
