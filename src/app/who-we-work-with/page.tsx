import React from "react";
import { HeroSection } from "./HeroSection";
import { QuestionSection } from "@/components/QuestionSection";
import { ApproachSection } from "./ApproachSection";
import { CaseStudyCarousel } from "./CaseStudyCarousel";

const WhoWeWorkWith = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection />
      <QuestionSection
        primaryHeader="Why Partner with "
        secondaryHeader="VirtueS ?"
        content="We build partnerships founded on trust, strategic vision, and measurable impact. Leveraging deep industry expertise and data-driven insights, we empower businesses to confidently navigate change and achieve excellence."
      />
      <ApproachSection />
      <CaseStudyCarousel />
    </div>
  );
};

export default WhoWeWorkWith;
