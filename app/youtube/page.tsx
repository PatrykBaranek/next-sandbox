import { YoutubeVideos } from "@/components/youtube-videos";
import { youtubeSearchParamsCache } from "@/lib/youtube/youtubeSearchParamsCache";
import { SearchParams } from "nuqs";
import { Metadata } from "next";

interface YoutubePageProps {
  searchParams: Promise<SearchParams>;
}

export const metadata: Metadata = {
  title: "Youtube API",
};

export default async function YoutubePage({ searchParams }: YoutubePageProps) {
  await youtubeSearchParamsCache.parse(searchParams);
  return (
    <section className="flex flex-col justify-center gap-4">
      <YoutubeVideos />
    </section>
  );
}
