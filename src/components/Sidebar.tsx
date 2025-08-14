// src/components/Sidebar.tsx

import React from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation
import { Logo } from './icons/Logo';
import { HomeIcon } from './icons/HomeIcon';
import { DiscoverIcon } from './icons/DiscoverIcon';
import { MyQueueIcon } from './icons/MyQueueIcon';
import { MyPodcastsIcon } from './icons/MyPodcastsIcon';
import { RecentsIcon } from './icons/RecentsIcon';

// A reusable NavLink component to avoid repetition
const NavLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link href={href}>
    <div className="flex items-center gap-4 px-4 py-2 text-th-text-muted hover:text-white transition-colors duration-200 cursor-pointer">
      <div className="w-6 h-6">{icon}</div>
      <span className="font-semibold">{label}</span>
    </div>
  </Link>
);

export const Sidebar = () => {
  return (
    // Main container for the sidebar
    // 'hidden md:flex' handles responsiveness: hidden on mobile, flex on desktop
    <aside className="w-sidebar-width h-screen bg-black/10 p-6 flex-col border-r border-th-border hidden md:flex">
      
      {/* Logo Section */}
      <div className="mb-8">
        <Link href="/">
          <Logo className="h-12 w-auto" />
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-grow">
        <div className="space-y-2">
          <NavLink href="/" icon={<HomeIcon />} label="Home" />
          <NavLink href="/discover" icon={<DiscoverIcon />} label="Discover" />
        </div>

        {/* "Your Stuff" Section */}
        <div className="mt-8">
          <h2 className="px-4 text-sm font-bold uppercase text-th-text-muted tracking-widest mb-2">
            Your Stuff
          </h2>
          <div className="space-y-2">
            <NavLink href="/my-queue" icon={<MyQueueIcon />} label="My Queue" />
            <NavLink href="/my-podcasts" icon={<MyPodcastsIcon />} label="My Podcasts" />
            <NavLink href="/recents" icon={<RecentsIcon />} label="Recents" />
          </div>
        </div>
      </nav>

      {/* Footer Section */}
      <div className="mt-auto text-xs text-th-text-muted">
        <p>Podbay v2.9.6 by <a href="https://fancysoups.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Fancy Soups</a>.</p>
        <div className="mt-4 flex gap-4">
          <Link href="/about" className="hover:text-white underline">About</Link>
          <Link href="/podcasts" className="hover:text-white underline">All Podcasts</Link>
        </div>
        {/* We can add the Privacy Manager button later if needed */}
      </div>
    </aside>
  );
};