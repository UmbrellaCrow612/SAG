import { metaData } from "@/metaData";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { IconBrandDiscord } from "@tabler/icons-react";

/**
 * The navigation header component
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900 rounded-2xl border border-zinc-800 h-18 flex items-center justify-between px-3">
      <Logo />

      <Button asChild variant="link" size="default" className="text-white">
        <a
          href={metaData.discordLink}
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
