import { ServiceCard, ServiceCardProps } from "@/components/service-card";

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
];

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
