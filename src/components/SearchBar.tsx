import React from 'react';

export const SearchBar = () => {
  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Search through over 70 million podcasts and episodes..."
        aria-label="Search through over 70 million podcasts and episodes..."
        className="
          w-full 
          rounded-lg 
          border 
          bg-th-background/50 
          py-1.5 
          px-2.5 
          text-sm 
          text-th-text-muted 
          text-center
          outline-none 
          backdrop-blur-sm 
          border-white/25 
          placeholder:text-gray-300/75
          focus:font-medium
          focus:bg-white/5
          focus:text-white 
          focus:border-th-accent-purple 
          focus:placeholder:text-transparent
          transition-all duration-200
        "
      />
    </form>
  );
};