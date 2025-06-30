import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const youtubeSearchParamsCache = createSearchParamsCache({
  query: parseAsString.withDefault(""),
});
