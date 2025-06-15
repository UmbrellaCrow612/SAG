import { sagMetaData } from "@/metaData";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { IconBrandDiscord } from "@tabler/icons-react";

const headerLinks: { href: string; name: string }[] = [
  {
    href: "/#upcoming_events",
    name: "Events",
  },
  {
    href: "/#join_us",
    name: "Join",
  },
  {
    href: "gallery",
    name: "Gallery",
  },
];

/**
 * The navigation header component
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900 rounded-2xl border border-zinc-800 h-18 flex items-center justify-between px-3">
      <Logo />

      <div className="flex gap-5">
        {headerLinks.map((x, index) => (
          <Button
            asChild
            variant="link"
            size="default"
            className="text-white"
            key={index}
          >
            <a href={x.href}>{x.name}</a>
          </Button>
        ))}
      </div>

      <Button asChild variant="link" size="default" className="text-white">
        <a
          href={sagMetaData.discordLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandDiscord className="mr-1" />
          Discord
        </a>
      </Button>
    </header>
  );
}
