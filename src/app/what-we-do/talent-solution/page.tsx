import { HeroSection } from "@/components/HeroSection";
import { QuestionSection } from "@/components/QuestionSection";
import { TextImageLayout } from "@/components/TextImageLayout";
import React from "react";

const TalentSolution = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection
        primaryImage="/talentSolutions.png"
        primaryHeader="Empowering Businesses with"
        secondaryHeader="Exceptional Talent, Expertise, and AI-Driven Solutions "
        content="At VirtueS, we deliver AI-powered solutions through seasoned technology consultants with over a decade of industry experience. Our experts seamlessly integrate into your team to drive innovation, enhance efficiency, and accelerate growth. Whether you need flexible augmentation or specialized AI expertise, we connect you with top talent aligned to your strategic objectives."
      />
      <QuestionSection
        primaryHeader="Tailored AI-Powered"
        secondaryHeader="Staffing Solutions"
        content="In today's digital economy, businesses need AI-driven talent to stay competitive. At VirtueS, we offer tailored staffing solutions that integrate advanced AI tools for smarter decisions, increased productivity, and rapid innovation."
      />
      <TextImageLayout
        img={"/twoPeopleTalking.png"}
        title="AI-Enhanced Workforce Augmentation"
        imgPosition="left"
        content="Need additional support for a short-term project or scaling operations? Our professionals leverage AI-driven analytics, automation, and machine learning to optimize workflows, improve efficiency, and drive strategic decision-making—helping your business adapt faster and operate smarter. "
      />
      <TextImageLayout
        img={"/aiDriven.png"}
        title="Access to AI-Specialized Subject Matter Experts (SMEs)"
        imgPosition="right"
        content="For projects requiring cutting-edge AI expertise, we provide specialists in machine learning, data science, automation, AI-driven cybersecurity, and cloud AI solutions. Our experts integrate AI into your operations, unlocking new levels of innovation and efficiency. "
      />
      <TextImageLayout
        img={"/usStaffing.png"}
        title="U.S. Staffing Services: AI-Optimized Talent for Your Market"
        imgPosition="left"
        content="Navigating the complexities of the U.S. business landscape requires a workforce that understands regulatory compliance, industry trends, and AI-powered digital transformation. We provide AI-driven staffing solutions tailored to meet the unique demands of U.S.-based organizations."
        points={[
          "Industry-Specific AI Expertise.",
          "AI-Driven Regulatory Compliance & Workforce Integration.",
        ]}
      />
    </div>
  );
};

export default TalentSolution;
