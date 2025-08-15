import React from 'react';
import HomeIconSvg from '../../../public/icons/home-line.svg';

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  // Render the imported SVG, passing down any props
  return <HomeIconSvg {...props} />;
};