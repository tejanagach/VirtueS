"use client";
import React from "react";
import { OutlinedButton } from "./OutlinedButton";

type FeatureSectionProps = {
  primaryImage: string;
  secondaryImage?: string;
  title: string;
  imgPosition: "left" | "right";
  content: string;
  handleClick: () => void;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  primaryImage,
  secondaryImage,
  title,
  imgPosition,
  content,
  handleClick,
}) => {
  return (
    <div
      className={`max-w-[1050px] flex flex-col md:flex-row items-center justify-between p-6 space-y-6 md:space-y-0 ${
        imgPosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className={`flex flex-col  ${
          imgPosition === "right" ? "items-end" : "items-start"
        } md:w-1/2`}
      >
        <img src={primaryImage} alt="Primary" className="w-96 h-auto mb-4" />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 text-left">
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt="Secondary"
            className="w-40 h-auto mb-8"
          />
        )}
        <h2 className="text-base font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-5 text-base font-normal">{content}</p>
        <OutlinedButton label="Read More" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FeatureSection;
