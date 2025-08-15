"use client";

import React, { useState, useRef } from "react";
import SimpleBar from "simplebar-react";

import { PodcastCard } from "./PodcastCard";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { MoreVertIcon } from "./icons/MoreVertIcon";

const mockPodcasts = [
  {
    artworkUrl: "https://picsum.photos/seed/1/400/400",
    title: "بودكاست فنجان",
    author: "بودكاست فنجان",
    podcastUrl: "/p/bwdkast-fnjan",
  },
  {
    artworkUrl: "https://picsum.photos/seed/2/400/400",
    title: "فنجان قهوة",
    author: "Omar Eldeep",
    podcastUrl: "/p/fnjan-qhwh",
  },
  {
    artworkUrl: "https://picsum.photos/seed/3/400/400",
    title: "فنجان قهوة كمان",
    author: "Mashael saud",
    podcastUrl: "/p/fnjan-qhwh-5492",
  },
  {
    artworkUrl: "https://picsum.photos/seed/4/400/400",
    title: "بودكاست فنجان قهوة",
    author: "OUMA Ahmed Abdelbasset",
    podcastUrl: "/p/1215415111",
  },
  {
    artworkUrl: "https://picsum.photos/seed/5/400/400",
    title: "فنجان مع عائشة",
    author: "عائشة اشفيعي",
    podcastUrl: "/p/fnjan-ma-aaeshh",
  },
  {
    artworkUrl: "https://picsum.photos/seed/6/400/400",
    title: "یک فنجان آمریکانو !",
    author: "LngLounge",
    podcastUrl: "/p/yk-fnjan-aamrykanw",
  },
  {
    artworkUrl: "https://picsum.photos/seed/7/400/400",
    title: "Another Great Podcast",
    author: "Jane Doe",
    podcastUrl: "/p/another",
  },
  {
    artworkUrl: "https://picsum.photos/seed/8/400/400",
    title: "The Daily Talk",
    author: "John Smith",
    podcastUrl: "/p/daily",
  },
];

export const PodcastList = () => {
  const [isHovering, setIsHovering] = useState(false);

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
      <div className="flex items-center justify-between border-b border-th-border pb-4 mb-4">
        <h2 className="font-display text-2xl font-bold tracking-tighter text-white">
          Top podcasts for فنجان
        </h2>
        <div className="flex items-center gap-2 text-white/50">
          <div
            onClick={() => handleScroll("left")}
            className="p-1 cursor-pointer hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <div
            onClick={() => handleScroll("right")}
            className="p-1 cursor-pointer hover:text-white transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
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
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-th-background z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-th-background z-10 pointer-events-none" />

        <SimpleBar autoHide={false}>
          <div className="flex gap-6 pb-4">
            {mockPodcasts.map((podcast, index) => (
              <PodcastCard key={`${podcast.title}-${index}`} {...podcast} />
            ))}
          </div>
        </SimpleBar>
      </div>
    </section>
  );
};
