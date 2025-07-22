"use client";
import React from "react";
import { OutlinedButton } from "./OutlinedButton";

type FeatureCardProps = {
  primaryImage: string;
  content: string;
  handleClick: () => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  primaryImage,
  content,
  handleClick,
}) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-sm">
      {/* Image Section */}
      <div className="relative">
        <img
          src={primaryImage}
          alt="Feature"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <p className="text-gray-700 mb-4">{content}</p>
        <OutlinedButton label="Read More" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FeatureCard;
