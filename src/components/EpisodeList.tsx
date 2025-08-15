// src/components/EpisodeList.tsx

import React from 'react';
import { EpisodeRow } from './EpisodeRow';
import { MoreVertIcon } from './icons/MoreVertIcon';

// Mock data extracted from page.html, using placeholder images
const mockEpisodes = [
  { artworkUrl: "https://picsum.photos/seed/e1/100/100", episodeTitle: "فنجان مسموم", podcastTitle: "جناية", episodeUrl: "/p/1/e/1", podcastUrl: "/p/1" },
  { artworkUrl: "https://picsum.photos/seed/e2/100/100", episodeTitle: "فنجان قهوة", podcastTitle: "Nataloo Talks", episodeUrl: "/p/2/e/2", podcastUrl: "/p/2" },
  { artworkUrl: "https://picsum.photos/seed/e3/100/100", episodeTitle: "أول فنجان قهوة", podcastTitle: "قهوة وخبرية", episodeUrl: "/p/3/e/3", podcastUrl: "/p/3" },
  { artworkUrl: "https://picsum.photos/seed/e4/100/100", episodeTitle: "الدحيح - زوبعة فنجان", podcastTitle: "الدحيح", episodeUrl: "/p/4/e/4", podcastUrl: "/p/4" },
  { artworkUrl: "https://picsum.photos/seed/e5/100/100", episodeTitle: "همسة فنجان | الصور", podcastTitle: "Podcasts By Reham", episodeUrl: "/p/5/e/5", podcastUrl: "/p/5" },
  { artworkUrl: "https://picsum.photos/seed/e6/100/100", episodeTitle: "الحلقة 05 : لماذا فنجان قهوة", podcastTitle: "بودكاست فنجان قهوة", episodeUrl: "/p/6/e/6", podcastUrl: "/p/6" },
  { artworkUrl: "https://picsum.photos/seed/e7/100/100", episodeTitle: "فیل و فنجان", podcastTitle: "زمزمه ادبی", episodeUrl: "/p/7/e/7", podcastUrl: "/p/7" },
  { artworkUrl: "https://picsum.photos/seed/e8/100/100", episodeTitle: "276: مشكلة أبومالح مع فنجان", podcastTitle: "فنجان مع عبدالرحمن", episodeUrl: "/p/8/e/8", podcastUrl: "/p/8" },
  { artworkUrl: "https://picsum.photos/seed/e9/100/100", episodeTitle: "The Cup - فنجان", podcastTitle: "Black Dog Radio", episodeUrl: "/p/9/e/9", podcastUrl: "/p/9" },
];


export const EpisodeList = () => {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-th-border pb-4 mb-4">
        <h2 className="font-display text-2xl font-bold tracking-tighter text-white">
          Top episodes for فنجان
        </h2>
        <div className="p-1 text-white/50 cursor-pointer hover:text-white transition-colors">
          <MoreVertIcon className="w-6 h-6" />
        </div>
      </div>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {mockEpisodes.map((episode, index) => (
          <EpisodeRow
            key={`${episode.episodeTitle}-${index}`}
            artworkUrl={episode.artworkUrl}
            episodeTitle={episode.episodeTitle}
            podcastTitle={episode.podcastTitle}
            episodeUrl={episode.episodeUrl}
            podcastUrl={episode.podcastUrl}
          />
        ))}
      </div>
    </section>
  );
};