"use client";

import { sagMetaData } from "@/metaData";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { IconBrandDiscord, IconMenu2 } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

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

      <MobileMenu />

      <div className="hidden md:flex gap-5">
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

      <Button
        asChild
        variant="link"
        size="default"
        className="hidden md:flex text-white"
      >
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

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <IconMenu2 className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-zinc-900 border-zinc-800 text-white w-[300px]"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex flex-col gap-6 mt-8">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4">
              {headerLinks.map((link, index) => (
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-white justify-start text-lg"
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  <a href={link.href}>{link.name}</a>
                </Button>
              ))}
            </nav>

            {/* Mobile Discord Link */}
            <div className="border-t border-zinc-800 pt-4">
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white justify-start text-lg w-full"
                onClick={() => setIsOpen(false)}
              >
                <a
                  href={sagMetaData.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandDiscord className="mr-2 h-5 w-5" />
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
