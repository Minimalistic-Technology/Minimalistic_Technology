"use client";

import React from "react";

interface Button {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<Button> = ({
  onClick,
  children = "Try it Now",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-8 bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
