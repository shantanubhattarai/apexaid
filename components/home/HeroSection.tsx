"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroBG from "@/public/images/home.jpg";

const HeroSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section
      className="text-white px-4 py-8 flex flex-col gap-8 justify-center items-center min-h-[70dvh] lg:min-h-[85dvh] text-center bg-cover bg-center lg:bg-top bg-black/30 bg-blend-overlay"
      style={{ backgroundImage: `url(${HeroBG.src})` }}
    >
      <div className="max-w-2xl bg-black/30 px-4 pt-6 pb-8 rounded-md">
        <h2 className="text-4xl md:text-4xl tracking-wide font-current-serif font-medium mb-4">
          Care that Uplifts, Support that Endures
        </h2>
        <p className="text-zinc-200 leading-5">
          Disability is not a limitation, but a call for equity, inclusion, and
          empowerment.
        </p>
      </div>
      <Link
        className={cn(
          "bg-green-600 ring-2 ring-green-500 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-700 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide",
          highlightLinks && "underline underline-offset-2"
        )}
        href="/contact"
      >
        Get Support Now
      </Link>
    </section>
  );
};

export default HeroSection;
