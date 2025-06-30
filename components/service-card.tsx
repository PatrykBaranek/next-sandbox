import Image from "next/image";
import Link from "next/link";

export interface ServiceCardProps {
  label: string;
  href: string;
  src: string;
  alt: string;
}

export function ServiceCard({ src, alt, label, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="flex h-32 w-68 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#121212] p-2 backdrop-blur-xs transition hover:scale-105">
        <Image src={src} width={30} height={30} alt={alt} />
        <p>{label}</p>
      </div>
    </Link>
  );
}
