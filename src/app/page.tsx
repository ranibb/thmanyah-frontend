import { EpisodeList } from "@/components/EpisodeList";
import { PodcastList } from "@/components/PodcastList";

export default function Home() {
  return (
    <main>
      <div>
        <PodcastList />
        <EpisodeList />
      </div>
    </main>
  );
}
