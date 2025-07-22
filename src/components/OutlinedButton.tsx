"use client";
import React from "react";

type OutlinedButtonProps = {
  label: string;
  handleClick: () => void;
};

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  label,
  handleClick,
}) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-white border-[#585858] text-[#585858] hover:text-white border-[1px] rounded-md hover:bg-[#585858] transition"
      >
        {label}
      </button>
    </div>
  );
};
