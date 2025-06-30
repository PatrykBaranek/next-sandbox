import { YoutubeVideos } from "@/components/youtube-videos";
import { youtubeSearchParamsCache } from "@/lib/youtubeSearchParamsCache";
import { SearchParams } from "nuqs";

interface YoutubePageProps {
  searchParams: Promise<SearchParams>;
}

export default async function YoutubePage({ searchParams }: YoutubePageProps) {
  await youtubeSearchParamsCache.parse(searchParams);
  return (
    <section className="flex flex-col gap-4">
      <YoutubeVideos />
    </section>
  );
}
