import React from 'react';

// This component accepts any standard SVG props (like className, width, height)
export const MoreVertIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="22"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Pass all props to the SVG element
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </svg>
);