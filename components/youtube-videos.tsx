import { getRandomYoutubeVideos } from "@/lib/youtube/getRandomYoutubeVideos";
import { YouTubeEmbed } from "@next/third-parties/google";
import { YoutubeSearchInput } from "./youtube-search-input";
import { youtubeSearchParamsCache } from "@/lib/youtube/youtubeSearchParamsCache";

export async function YoutubeVideos() {
  const { query } = youtubeSearchParamsCache.all();

  const { result } = await getRandomYoutubeVideos(query);

  return (
    <>
      <YoutubeSearchInput />
      <h1 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-5xl">
        {query?.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {result.items.map((item) => (
          <YouTubeEmbed
            key={item.id.videoId}
            videoid={item.id.videoId}
            height={300}
            width={500}
          />
        ))}
      </div>
    </>
  );
}
