"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "/youtube",
    label: "YouTube",
    logo: {
      src: "/youtube-logo.svg",
      alt: "Youtube logo",
    },
  },
  {
    href: "/spotify",
    label: "Spotify",
    logo: {
      src: "/spotify-logo.svg",
      alt: "Spotify logo",
    },
  },
  {
    href: "/nasa",
    label: "Nasa",
    logo: {
      src: "/nasa-logo.svg",
      alt: "Nasa logo",
    },
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="group fixed top-0 left-0 z-40 flex h-full min-w-16 px-4 transition duration-300 hover:w-48">
      <ul className="mt-4 flex flex-col gap-6">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={index} className="flex items-center">
              <div
                className={twMerge(
                  !isActive && "hidden",
                  "absolute left-0 h-7 w-1 rounded-r-2xl bg-white",
                )}
              />
              <li className="relative cursor-pointer rounded-2xl bg-white p-3 transition group-hover:w-full hover:scale-105">
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-2 text-black"
                >
                  <Image {...link.logo} width={30} height={30} />
                  <p className="hidden group-hover:block">{link.label}</p>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
