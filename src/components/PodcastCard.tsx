import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import Link from 'next/link';
import { MoreVertIcon } from './icons/MoreVertIcon';

interface PodcastCardProps {
  artworkUrl: string;
  title: string;
  author: string;
  podcastUrl: string;
}

export const PodcastCard = ({ artworkUrl, title, author, podcastUrl }: PodcastCardProps) => {
  return (
    // The card container - flex-shrink-0 prevents cards from shrinking in a flex container
    <div className="w-52 flex-shrink-0">
      {/* Art */}
      <Link href={podcastUrl}>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
          <Image
            src={artworkUrl}
            alt={`${title} podcast cover art`}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Meta */}
      <div className="mt-3 flex items-start justify-between">
        <div className="flex-1">
          <Link href={podcastUrl}>
            <h3 className="font-medium text-sm text-white hover:underline truncate">{title}</h3>
          </Link>
          <p className="text-sm text-th-text-muted mt-0.5">{author}</p>
        </div>
        <div className="p-1 text-th-text-muted hover:text-white cursor-pointer">
          <MoreVertIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};