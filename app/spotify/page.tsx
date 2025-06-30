import LoginSpotify from "@/components/login-spotify";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Spotify } from "react-spotify-embed";

export const metadata: Metadata = {
  title: "Spotify API",
};

const tracks = [
  "https://open.spotify.com/track/4DS79vtUkrGfbFftAIGZ8r",
  "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
];

const albums = ["https://open.spotify.com/album/4xc5MKpCUw1LREm6cnBtOa"];

export default async function SpotifyPage() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("spotify_access_token");

  return (
    <section className="flex flex-col gap-6">
      {!isLoggedIn && (
        <div className="self-center">
          <Suspense>
            <LoginSpotify />
          </Suspense>
        </div>
      )}

      <h2 className="text-3xl text-green-500">Tracks</h2>
      <div className="grid grid-cols-1 justify-center-safe gap-4 md:grid-cols-3">
        {tracks.map((link) => (
          <Spotify key={link} link={link} />
        ))}
      </div>

      <h2 className="text-3xl text-green-500">Albums</h2>
      <div className="flex gap-6">
        {albums.map((link) => (
          <Spotify key={link} link={link} />
        ))}
      </div>
    </section>
  );
}
