import React from "react";

interface HeaderSectionProps {
  primaryHeader: string;
  secondaryHeader?: string;
  content: string;
}

export const QuestionSection: React.FC<HeaderSectionProps> = ({
  primaryHeader,
  secondaryHeader,
  content,
}) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        {primaryHeader}{" "}
        {secondaryHeader && (
          <span className="text-[#DC9030] font-semibold">
            {secondaryHeader}
          </span>
        )}
      </h2>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">{content}</p>
    </div>
  );
};
