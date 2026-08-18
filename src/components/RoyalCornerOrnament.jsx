import React from "react";

export default function RoyalCornerOrnament({ position = "top-left", className = "" }) {
  // Rotations for the 4 corners
  const transformMap = {
    "top-left": "",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1, -1)",
  };

  const transform = transformMap[position] || "";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-7 h-7 sm:w-9 sm:h-9 text-[#c5a059] opacity-80 pointer-events-none select-none ${className}`}
      style={{ transform }}
      aria-hidden="true"
    >
      {/* Outer corner line */}
      <path
        d="M3 45V18C3 9.71573 9.71573 3 18 3H45"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Inner dotted/accent line */}
      <path
        d="M8 40V20C8 13.3726 13.3726 8 20 8H40"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Corner floral leaf curl */}
      <path
        d="M3 3C8 8 13 11 20 11C11 13 8 18 3 3Z"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Center jewel dot */}
      <circle cx="16" cy="16" r="2.2" fill="currentColor" opacity="0.9" />
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}
