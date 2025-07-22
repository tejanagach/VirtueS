import { HeroSection } from "@/components/HeroSection";
import { QuestionSection } from "@/components/QuestionSection";
import { TextImageLayout } from "@/components/TextImageLayout";
import React from "react";

const techConsult = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection
        primaryImage="/groupDiscussion.png"
        primaryHeader="Empowering Businesses with"
        secondaryHeader="Technology-Driven Solutions"
        content="In today's digital landscape, technology is the engine of business success. At VirtueS, our AI-powered consulting and advanced tech solutions empower organizations to streamline operations, make smarter decisions, and seize new opportunities—driving accelerated digital transformation and sustainable growth."
      />
      <QuestionSection
        primaryHeader="Key Features"
        secondaryHeader="Da Vinci"
        content="At VirtueS, we go beyond solutions, building trusted partnerships with expertise, data-driven insights, and a commitment to excellence—empowering businesses to navigate change and drive sustainable growth."
      />
      <TextImageLayout
        img={"/smartEnterprise.png"}
        title="Smart Enterprise Solutions for a Digital-First Future"
        imgPosition="left"
        content="Every organization faces unique challenges, yet agility, efficiency, and data-driven decisions remain crucial. At VirtueS, we leverage our expertise in SAP, Oracle, and Microsoft Dynamics to build scalable systems, automate workflows, and deliver real-time insights for ongoing innovation. Whether you're scaling your business or fine-tuning operations, our solutions unlock long-term value at every stage."
      />
      <TextImageLayout
        img={"/agileDevelopment.png"}
        title="Agile Execution: Smarter, Faster, Better"
        imgPosition="right"
        content="In today’s fast-paced world, adaptability is key. Our agile approach minimizes risks through iterative planning, maximizes ROI with optimized resource allocation, and aligns projects with strategic goals—empowering your business to stay ahead with precision and speed. With VirtueS, challenges transform into opportunities for lasting success."
      />
      <TextImageLayout
        img={"/transformingData.png"}
        title="Transforming Data into Your Competitive Edge"
        imgPosition="left"
        content="Data is the backbone of modern business, and its true power lies in how it’s used. At VirtueS, we transform raw data into a strategic advantage with advanced analytics tools like Power BI and Tableau—turning complex datasets into actionable insights, identifying trends to optimize operations, and forecasting opportunities to drive your competitive edge."
      />
      <TextImageLayout
        img={"/innovationBulb.png"}
        title="Innovation That Goes Beyond Technology"
        imgPosition="right"
        content="Digital transformation is about aligning people, processes, and systems for lasting impact. At VirtueS, we simplify complexity, bridge strategy and execution, and deliver tailored solutions that drive innovation and sustained growth—building the foundation for tomorrow’s opportunities. Partner with us to embrace change and secure a competitive edge."
      />
    </div>
  );
};

export default techConsult;
