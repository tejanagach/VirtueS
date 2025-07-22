"use client";
import React from "react";

interface InfoCardProps {
  primaryImage: string;
  primaryHeader: string;
  secondaryHeader: string;
  content: string;
  list?: string[];
  enableButton?: boolean;
}

export const HeroSection: React.FC<InfoCardProps> = ({
  primaryImage,
  primaryHeader,
  secondaryHeader,
  content,
  list,
  enableButton = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg p-6 items-center h-[700px] w-full px-10 pt-28 md:pt-0 md:px-32 rounded-br-[360px] gap-5">
      <div className="md:w-1/2 h-96">
        <h2 className="text-2xl md:text-4xl md:leading-12 font-semibold text-gray-900">
          {primaryHeader}&nbsp;
          <span className="font-semibold text-[#DC9030] text-2xl md:text-4xl mt-2">
            {secondaryHeader}
          </span>
        </h2>

        <p className="text-gray-700 mt-4 text-[18px]">{content}</p>
        {list && list.length > 0 && (
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {enableButton && (
          <button
            className="bg-[#EE8502] text-white font-medium py-2 px-6 rounded transition-colors mt-5"
            onClick={() => window.open("https://davincism.io/", "_blank")}
          >
            Learn more
          </button>
        )}
      </div>
      <div className="md:w-1/2 flex justify-center p-4 gap-7">
        <div
          style={{
            backgroundImage: `url(${primaryImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "3px",
          }}
        ></div>
        <img
          src={primaryImage}
          alt="Primary"
          className="w-full h-96 object-cover rounded-br-[130px] hidden md:block"
        />
      </div>
    </div>
  );
};
