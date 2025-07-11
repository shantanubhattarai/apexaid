"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Banner = ({
  mainText,
  urlText,
  url,
}: {
  mainText: React.ReactNode;
  urlText: string;
  url: string;
}) => {
  const { highlightLinks } = usePrefs();
  return (
    <div className="flex flex-col md:flex-row items-center rounded-md justify-between gap-y-4 gap-x-2 lg:gap-x-12 px-6 lg:px-16 py-8 bg-green-900 bg-noise bg-blend-multiply text-white">
      {typeof mainText === "string" ? (
        <p className="text-center md:text-left">{mainText}</p>
      ) : (
        mainText
      )}
      <Link
        className={cn(
          "bg-green-600 ring ring-green-500 hover:ring-green-400 hover:bg-green-500 active:ring-green-600 active:bg-green-700 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide shrink-0",
          highlightLinks && "underline underline-offset-2"
        )}
        href={url}
      >
        {urlText}
      </Link>
    </div>
  );
};

export default Banner;
