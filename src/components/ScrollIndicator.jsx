import React from 'react';

const ScrollIndicator = ({ className = '' }) => (
  <div className={`pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2 ${className}`} aria-hidden>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-7 w-7 opacity-70 text-white animate-bounce"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
);

export default ScrollIndicator;
