'use server';

interface YoutubeVideos {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: [
    {
      kind: string;
      etag: string;
      id: { videoId: string; };
    },
  ];
}

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY as string;

export async function getRandomYoutubeVideos(query: string): Promise<{ query: string | null; result: YoutubeVideos; }> {

  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  const searchParams = url.searchParams;

  searchParams.set('key', YOUTUBE_API_KEY);
  searchParams.set('maxResults', '60');
  searchParams.set('part', 'snippet');
  searchParams.set('type', 'video');
  searchParams.set('q', query);

  const response = await fetch(url.toString());

  return {
    query: searchParams.get('q'),
    result: await response.json(),
  };
}