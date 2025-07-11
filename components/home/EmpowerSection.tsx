"use client";

import { usePrefs } from "@/app/context/PrefContext";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

import EmpowerImage from "@/public/images/EmpowerSection.jpg";
// import EmpowerMini01 from "@/public/images/EmpowerMini01.jpg";
// import EmpowerMini02 from "@/public/images/EmpowerMini02.jpg";
import EmpowerMini03 from "@/public/images/EmpowerMini03.jpg";

const EmpowerSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section className="py-12 md:pt-36">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center">
        <div className="flex flex-col gap-6 items-start">
          <div>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-2 text-green-800">
              Empowering your Independence
              <br /> with Compassionate, Professional Care.
            </h3>
          </div>
          <p className="text-zinc-800 text-lg md:text-xl max-w-xl">
            Registered NDIS Provider supporting your unique goals, everyday
          </p>
          <Link
            className={cn(
              "font-medium bg-green-700 ring ring-green-600 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-700 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide",
              highlightLinks && "underline underline-offset-2"
            )}
            href="/contact"
          >
            Get in Touch
          </Link>
        </div>
        <div className="relative max-w-full w-96 h-96">
          <Image
            src={EmpowerImage}
            alt="home-1"
            className="absolute inset-0 aspect-square object-cover object-center rounded-xl z-20 border-background border-0 md:border-4"
            width={480}
          />
          <Image
            src={EmpowerMini03}
            alt="home-1"
            className="absolute hidden xl:block -top-12 -left-6 rounded-full border-background border-8 z-30 aspect-square object-cover object-center"
            width={100}
          />
          {/* <Image
                src={EmpowerMini02}
                alt="home-1"
                className="absolute hidden xl:block top-4 -right-18 rounded-full border-background border-6 z-30 aspect-square object-cover object-center"
                width={100}
                height={100}
              /> */}
          {/* <Image
                src={EmpowerMini01}
                alt="home-1"
                className="absolute hidden xl:block -top-12 -right-24 rounded-full z-10 aspect-square object-cover object-center"
                width={64}
                height={64}
              /> */}
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
