"use client";

import React, { useState, useRef } from "react";
import SimpleBar from "simplebar-react";
import { PodcastCard } from "./PodcastCard";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { MoreVertIcon } from "./icons/MoreVertIcon";
import { Podcast } from "@/services/api";

// 1. Add 'searchTerm' to the props interface
interface PodcastListProps {
  podcasts: Podcast[];
  searchTerm: string;
}

// 2. Accept 'searchTerm' from props
export const PodcastList = ({ podcasts, searchTerm }: PodcastListProps) => {
  const [isHovering, setIsHovering] = useState(false);

  // 3. Remove the unused scrollbarRef
  const containerRef = useRef<HTMLDivElement>(null);

  const SCROLL_AMOUNT = 300;

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollEl = container.querySelector(".simplebar-content-wrapper");
      if (scrollEl) {
        const scrollValue =
          direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
        scrollEl.scrollBy({ left: scrollValue, behavior: "smooth" });
      }
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between border-b border-th-border pt-10 pr-5 pl-5 pb-2 mb-4">
        {/* 4. Use the dynamic searchTerm in the title */}
        <h2 className="font-display text-md font-medium tracking-tighter text-white truncate">
          أفضل البودكاستات لـ {searchTerm}
        </h2>
        <div className="flex items-center gap-2 text-white/50">
          <div
            onClick={() => handleScroll("right")}
            className="p-1 cursor-pointer hover:text-white transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </div>
          <div
            onClick={() => handleScroll("left")}
            className="p-1 cursor-pointer hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <div className="p-1 cursor-pointer hover:text-white transition-colors">
            <MoreVertIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`relative ${isHovering ? "is-hovered" : ""}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <SimpleBar autoHide={false}>
          <div className="flex gap-6 pb-4 px-5">
            {podcasts.map((podcast) => (
              <PodcastCard
                key={podcast.collectionId}
                artworkUrl={podcast.artworkUrl600}
                title={podcast.collectionName}
                author={podcast.artistName}
                podcastUrl={`/p/${podcast.collectionId}`}
              />
            ))}
          </div>
        </SimpleBar>
      </div>
    </section>
  );
};
