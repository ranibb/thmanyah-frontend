// src/components/Header.tsx

import React from "react";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { MoreVertIcon } from "./icons/MoreVertIcon";
import { SearchBar } from "./SearchBar";
import { MobileLogo } from "./icons/MobileLogo";

export const Header = () => {
  return (
    // Responsive header: mobile-first styles, with 'md:' prefixes for desktop
    <header
      className="fixed top-0 left-0 right-0 h-[64px] z-50 bg-th-background/80 backdrop-blur-md border-b border-th-border 
                     md:left-sidebar-width md:h-[50px]"
    >
      <div className="h-full px-4 flex items-center justify-between gap-4">
        {/* Left Section: Contains both Mobile Logo and Desktop Nav Arrows */}
        <div className="flex items-center gap-2">
          {/* Mobile Logo: Only visible on screens smaller than md */}
          <div className="md:hidden">
            <MobileLogo />
          </div>
          {/* Desktop Nav Arrows: Hidden on small screens, visible on md and up */}
          <div className="hidden md:flex items-center gap-2">
            <div className="text-2xl text-white/50 hover:text-white cursor-pointer transition-colors">
              <ChevronLeftIcon />
            </div>
            <div className="text-2xl text-white/50 hover:text-white cursor-pointer transition-colors">
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Right Section: User Options */}
        <div className="flex items-center gap-2">
          {/* Auth Buttons: Hidden on small screens (sm), visible on larger screens */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-1.5 text-sm font-semibold bg-white/5 hover:bg-white/10 rounded-md transition-colors"
            >
              Log in
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-sm font-semibold bg-th-accent-purple/80 hover:bg-th-accent-purple rounded-md transition-colors"
            >
              Sign up
            </button>
          </div>
          <div className="ml-2 text-2xl text-white/80 hover:text-white cursor-pointer">
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
