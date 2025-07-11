"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AboutSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section className="py-12 md:pt-36">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3 className="text-2xl lg:text-4xl font-semibold mb-2 text-green-800">
          About Apex Aid Health Care
        </h3>
        <p className="text-zinc-800 text-lg text-center">
          At Apex Aid Health Care, we believe in dignity, choice, and control.
          As a proud NDIS registered provider, we work alongside participants
          and families to deliver the personalised supports you need to live
          life on your terms.
          <br />
          <Link
            href="/about"
            className={cn(
              "underline underline-offset-4 text-green-800 hover:text-green-700 mt-2 inline-block",
              highlightLinks && "font-semibold font-lg"
            )}
          >
            Learn More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
