import { ServiceCard, ServiceCardProps } from "@/components/service-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "A small sandbox showcasing integrations: YouTube, Spotify, and NASA. Explore example service pages and UI components.",
};

const services: ServiceCardProps[] = [
  {
    label: "YouTube",
    href: "/youtube",
    src: "/youtube-logo.svg",
    alt: "Youtube logo",
  },
  {
    label: "Spotify",
    href: "/spotify",
    src: "/spotify-logo.svg",
    alt: "Spotify logo",
  },
  {
    label: "Nasa",
    href: "/nasa",
    src: "/nasa-logo.svg",
    alt: "Nasa logo",
  },
];

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-center gap-10">
      <div className="backdrop-blur-4xl flex min-h-24 max-w-5xl flex-col justify-center gap-6 rounded-2xl bg-black/50 p-10">
        <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 via-gray-800/50 to-gray-900/80 p-6 shadow-lg shadow-black/40 backdrop-blur-sm transition-colors duration-300 hover:border-indigo-400/40 hover:shadow-indigo-500/10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-indigo-400/30" />
          <div className="mb-2 flex items-center gap-2">
            <p className="text-left text-xl font-semibold tracking-wide text-gray-100">
              Services
            </p>
          </div>
          <div className="grid grid-cols-1 place-content-center place-items-stretch gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-center text-sm text-gray-300">
            This sandbox app aggregates small demo integrations for popular
            services. Use the cards below to explore example pages that may
            fetch data, render media, or demonstrate UI component patterns.
          </p>
        </div>
      </div>
    </section>
  );
}
