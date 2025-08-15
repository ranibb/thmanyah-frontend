// src/components/EpisodeRow.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoreVertIcon } from './icons/MoreVertIcon';

interface EpisodeRowProps {
  artworkUrl: string;
  episodeTitle: string;
  podcastTitle: string;
  episodeUrl: string;
  podcastUrl: string;
}

export const EpisodeRow = ({
  artworkUrl,
  episodeTitle,
  podcastTitle,
  episodeUrl,
  podcastUrl,
}: EpisodeRowProps) => {
  return (
    // Main container with hover effect and padding
    <div className="flex items-center gap-4 p-2 rounded-md hover:bg-th-background-hover transition-colors duration-200">
      {/* Artwork */}
      <Link href={episodeUrl}>
        <div className="relative w-14 h-14 flex-shrink-0 rounded-md overflow-hidden">
          <Image
            src={artworkUrl}
            alt={`${episodeTitle} cover art`}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Meta Titles */}
      <div className="flex-1 min-w-0">
        <Link href={episodeUrl}>
          <h3 className="font-semibold text-white hover:underline truncate">
            {episodeTitle}
          </h3>
        </Link>
        <Link href={podcastUrl}>
          <p className="text-sm text-th-text-muted hover:underline truncate">
            {podcastTitle}
          </p>
        </Link>
      </div>

      {/* Controls */}
      <div className="p-1 text-th-text-muted hover:text-white cursor-pointer">
        <MoreVertIcon className="w-5 h-5" />
      </div>
    </div>
  );
};