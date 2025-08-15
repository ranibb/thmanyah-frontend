"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { EpisodeList } from "@/components/EpisodeList";
import { searchPodcasts, Podcast } from "@/services/api";
import { Header } from "@/components/Header";

const PodcastList = dynamic(
  () => import("@/components/PodcastList").then((mod) => mod.PodcastList),
  {
    ssr: false,
    loading: () => <div className="text-center py-10">Loading list...</div>,
  }
);

// A small, local component to handle the conditional rendering
const PageContent = ({
  isLoading,
  error,
  podcasts,
  hasSearched,
  searchTerm,
}: {
  isLoading: boolean;
  error: string | null;
  podcasts: Podcast[];
  hasSearched: boolean;
  searchTerm: string;
}) => {
  if (isLoading) {
    return <div className="text-center py-10">جاري التحميل ...</div>;
  }
  if (error) {
    return <div className="text-center py-10 text-red-400">عفوًا، لم نتمكن من جلب البودكاست. يرجى المحاولة مرة أخرى لاحقًا.</div>;
  }
  if (hasSearched && podcasts.length === 0) {
    return (
      <div className="text-center py-10 text-th-text-muted">
         لم يتم العثور على نتائج لـ &ldquo;{searchTerm}&rdquo;. جرب بحثًا آخر.
      </div>
    );
  }
  if (podcasts.length > 0) {
    return (
      <>
        <PodcastList podcasts={podcasts} searchTerm={searchTerm} />
        <EpisodeList searchTerm={searchTerm} />
      </>
    );
  }
  // This is the initial state before any search
  return (
    <div className="text-center py-10 text-th-text-muted">
      ابحث عن بودكاست للبدء.
    </div>
  );
};

export default function Home() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  // State to store the current search term
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (term: string) => {
    // If the user searches for the same term again, don't re-fetch
    if (!term || term === searchTerm) return;

    // Set the state for the new search
    setSearchTerm(term);
    setHasSearched(true);
    setIsLoading(true);
    setError(null);

    try {
      const results = await searchPodcasts(term);
      setPodcasts(results);
    } catch (err) {
      setError(
        "Sorry, we couldn't fetch the podcasts. Please try again later."
      );
      setPodcasts([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="mt-[64px] md:mt-[50px]">
        <PageContent
          isLoading={isLoading}
          error={error}
          podcasts={podcasts}
          hasSearched={hasSearched}
          searchTerm={searchTerm}
        />
      </div>
    </>
  );
}
