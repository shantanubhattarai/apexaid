"use client";
import { usePrefs } from "@/app/context/PrefContext";
import {
  AArrowUpIcon,
  CodeIcon,
  LinkIcon,
  MenuIcon,
  SettingsIcon,
  TypeIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

import LogoAlpha from "@/public/logohorizontalalpha.png";
import LogoWhite from "@/public/logohorizontalwhite.png";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const { highlightLinks } = usePrefs();

  useEffect(() => {
    if (!headerRef.current) return;

    const scrollWatcher = document.createElement("div");
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    headerRef.current.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        headerRef.current?.classList.toggle(
          "sticking-nav",
          !entries[0].isIntersecting
        );
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    navObserver.observe(scrollWatcher);

    return () => {
      navObserver.unobserve(scrollWatcher);
    };
  }, [headerRef]);

  function toggleNav() {
    if (!mobileNavRef.current) return;
    mobileNavRef.current.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
  }

  return (
    <header
      className="w-full container sticky mx-auto top-0 z-50 px-4 py-4 md:py-0"
      ref={headerRef}
    >
      <div className="py-1 md:py-4 flex flex-col md:flex-row md:justify-between md:items-center nav-wrapper transition-all relative">
        <div className="w-full flex gap-x-2 justify-between py-1 items-center">
          <Link
            href="/"
            className={cn(
              "font-semibold text-lg",
              highlightLinks && "border-b-2 border-green-600"
            )}
          >
            <Image src={LogoAlpha} alt="Apex Aid Health Care" height={42} />
          </Link>
          <div className="flex gap-x-4 justify-start items-center md:hidden">
            <AccessibilityWidget />
            <button onClick={toggleNav}>
              <MenuIcon />
            </button>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-2">
            <Link
              className={cn(
                "px-2 py-1 font-medium border-b-2 hover:border-green-800 transition-all",
                highlightLinks ? "border-green-600" : "border-transparent"
              )}
              href="/"
            >
              Home
            </Link>
            <Link
              className={cn(
                "px-2 py-1 font-medium border-b-2 hover:border-green-800 transition-all",
                highlightLinks ? "border-green-600" : "border-transparent"
              )}
              href="/about"
            >
              About
            </Link>
            <Link
              className={cn(
                "px-2 py-1 font-medium border-b-2 hover:border-green-800 transition-all",
                highlightLinks ? "border-green-600" : "border-transparent"
              )}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={cn(
                "px-2 py-1 font-medium border-b-2 hover:border-green-800 transition-all",
                highlightLinks ? "border-green-600" : "border-transparent"
              )}
              href="/referral"
            >
              Referral
            </Link>
            <Link
              className={cn(
                "px-2 py-1 font-medium border-b-2 hover:border-green-800 transition-all",
                highlightLinks ? "border-green-600" : "border-transparent"
              )}
              href="/contact"
            >
              Contact
            </Link>
            <AccessibilityWidget />
          </ul>
        </nav>
        <nav
          ref={mobileNavRef}
          className="hidden fixed bg-green-900 bg-noise bg-blend-multiply inset-0 w-full h-full px-4 py-4 text-white"
        >
          <div className="flex flex-col justify-start h-full gap-y-24">
            <div className="w-full flex gap-x-2 justify-between py-2 mobile-nav-wrapper items-center">
              <Link href="/" className="font-semibold text-4xl -mx-6">
                <Image src={LogoWhite} alt="Apex Aid Health Care" height={96} />
              </Link>
              <button onClick={toggleNav}>
                <XIcon />
              </button>
            </div>
            <ul className="flex flex-col items-start gap-y-6 mt-4 px-2 text-3xl">
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
                href="/"
                onClick={toggleNav}
              >
                Home
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
                href="/about"
                onClick={toggleNav}
              >
                About
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
                href="/services"
                onClick={toggleNav}
              >
                Services
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
                href="/referral"
                onClick={toggleNav}
              >
                Referral
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
                href="/contact"
                onClick={toggleNav}
              >
                Contact
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

const AccessibilityWidget = () => {
  const {
    font,
    changeFont,
    largeText,
    changeLargeText,
    largeTracking,
    changeLargeTracking,
    highlightLinks,
    changeHighlightLinks,
  } = usePrefs();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p
          className={cn(
            "px-2 py-1 font-medium shadow-2xs hover:border-green-800 transition-all hidden md:block lg:flex lg:justify-start lg:items-center lg:gap-x-2 border rounded-sm",
            highlightLinks ? "border-green-600" : "border-zinc-300"
          )}
        >
          Accessibility
        </p>
        <p
          className={cn(
            "px-2 py-1 font-medium shadow-2xs hover:border-green-800 transition-all border rounded-sm md:hidden",
            highlightLinks ? "border-green-600" : "border-zinc-300"
          )}
        >
          <SettingsIcon />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-zinc-700">
          Accessibility Settings
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={font === "dyslexic"}
          onCheckedChange={() =>
            changeFont(font === "dyslexic" ? "default" : "dyslexic")
          }
          className="text-md"
        >
          <TypeIcon />
          <span>Dyslexia Friendly</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-md"
          checked={largeText === true}
          onCheckedChange={() => changeLargeText(!largeText)}
        >
          <AArrowUpIcon />
          <span>Bigger Text</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-md"
          checked={largeTracking === true}
          onCheckedChange={() => changeLargeTracking(!largeTracking)}
        >
          <CodeIcon />
          <span>Larger spacing</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-md"
          checked={highlightLinks === true}
          onCheckedChange={() => changeHighlightLinks(!highlightLinks)}
        >
          <LinkIcon />
          <span>Highlight Links</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuItem
          className="w-full"
          onClick={() => {
            changeFont("default");
            changeLargeText(false);
            changeLargeTracking(false);
            changeHighlightLinks(false);
          }}
        >
          <button className="flex justify-center items-center gap-1 text-center py-1 px-2 text-md bg-slate-100 border border-slate-300 rounded-sm w-full shadow-xs">
            <span>Reset All</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
