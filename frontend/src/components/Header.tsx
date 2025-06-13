import Logo from "./Logo";
import { Button } from "./ui/button";
import { IconBrandDiscord } from "@tabler/icons-react";

const HeaderLinks = [
  { name: "Events", href: "w" },
  { name: "Gallery", href: "w" },
  { name: "About", href: "w" },
];

/**
 * The navigation header component
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900 rounded-2xl border border-zinc-800 h-18 flex items-center justify-between px-3">
      <Logo />

      <div className="flex gap-4">
        {HeaderLinks.map((link, index) => (
          <a
            className="text-zinc-300 hover:text-white transition-colors duration-200 px-2 py-1 rounded-md hover:bg-zinc-800"
            key={index}
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </div>

      <Button asChild variant="link" size="default" className="text-white">
        <a
          href="https://discord.gg/tYWnPbwa2P"
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
