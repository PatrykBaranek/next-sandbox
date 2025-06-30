"use client";

import Input from "@mui/material/Input";

import { parseAsString, useQueryStates } from "nuqs";
import { useDebounce } from "use-debounce";
import { twMerge } from "tailwind-merge";

export function YoutubeSearchInput() {
  const [{ query }, setQuery] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
    },
    { shallow: false },
  );

  const [debouncedValue] = useDebounce(query, 1000, { leading: true });

  return (
    <Input
      placeholder="Search query"
      value={debouncedValue}
      onChange={(e) => setQuery({ query: e.target.value })}
      disableUnderline
      slotProps={{
        root: {
          className: twMerge(
            "flex h-9 w-full min-w-0 max-w-48 rounded-md border px-3 py-1 text-base md:text-sm text-white",
            "dark:bg-input/30 border-input bg-transparent",
            "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground",
            "selection:bg-primary selection:text-primary-foreground",
            "shadow-xs transition-[color,box-shadow] outline-none",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          ),
        },
      }}
    />
  );
}
