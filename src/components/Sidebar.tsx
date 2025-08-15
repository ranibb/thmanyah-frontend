import React from "react";
import Link from "next/link";
import { Logo } from "./icons/Logo";
import { HomeIcon } from "./icons/HomeIcon";
import { DiscoverIcon } from "./icons/DiscoverIcon";
import { MyQueueIcon } from "./icons/MyQueueIcon";
import { MyPodcastsIcon } from "./icons/MyPodcastsIcon";
import { RecentsIcon } from "./icons/RecentsIcon";

// 1. Define the props interface
interface NavLinkProps {
  href: string;
  // 2. The prop is now a React Component Type that accepts a className
  IconComponent: React.ComponentType<{ className?: string }>;
  label: string;
}

const NavLink = ({ href, IconComponent, label }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-3 px-1 py-2 text-th-text-muted hover:text-white transition-colors duration-200 cursor-pointer">
        <div className="w-4 h-4">
          {/* 3. Render the component directly and apply the className */}
          <IconComponent className="w-full h-full" />
        </div>
        <span className="font-semibold text-sm">{label}</span>
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-sidebar-width h-screen bg-black/10 p-6 flex-col border-r border-th-border hidden md:flex">
      <div className="mb-8">
        <Link href="/">
          <Logo className="h-12 w-auto" />
        </Link>
      </div>

      <nav className="flex-grow">
        <div className="space-y-2">
          {/* 4. Update how the NavLinks are used: pass the component itself, not JSX */}
          <NavLink href="/" IconComponent={HomeIcon} label="الرئيسية" />
          <NavLink
            href="/discover"
            IconComponent={DiscoverIcon}
            label="اكتشف"
          />
        </div>

        <div className="mt-8">
          <h2 className="px-4 text-sm font-bold uppercase text-th-text-muted tracking-widest mb-2">
            محتواك
          </h2>
          <div className="space-y-2">
            <NavLink
              href="/my-queue"
              IconComponent={MyQueueIcon}
              label="قائمة الانتظار"
            />
            <NavLink
              href="/my-podcasts"
              IconComponent={MyPodcastsIcon}
              label="برامجي"
            />
            <NavLink
              href="/recents"
              IconComponent={RecentsIcon}
              label="الأخيرة"
            />
          </div>
        </div>
      </nav>

      <div className="mt-auto text-xs text-th-text-muted">
        <div className="mt-4 flex gap-4">
          <Link href="/about" className="hover:text-white underline">
            حول
          </Link>
          <Link href="/podcasts" className="hover:text-white underline">
            كل البودكاستات
          </Link>
        </div>
      </div>
    </aside>
  );
};
