"use client";

import Link from "next/link";

import {
  AccessibilityIcon,
  BrainIcon,
  HandHelpingIcon,
  HeartHandshakeIcon,
  HouseIcon,
  HousePlusIcon,
  UsersIcon,
  UsersRoundIcon,
  ArrowRightIcon,
} from "lucide-react";
import React from "react";
import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";

const HowWeHelpSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section className="pb-12 md:pb-24 lg:py-36">
      <h3 className="text-center text-2xl lg:text-4xl font-semibold leading-14 text-green-800">
        Core Services Overview
      </h3>
      <p className="text-center text-lg mb-8 text-green-700">
        Our Support Services
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <HelpCard
          label="Supported Independent Living (SIL)"
          cardKey="supported-independent-living"
          icon={<HandHelpingIcon size={48} />}
        >
          <p>
            Build independence in your own home or shared living environment
            with tailored supports.
          </p>
        </HelpCard>
        <HelpCard
          label="Specialist Disability Accommodation (SDA)"
          cardKey="specialist-disability-accommodation"
          icon={<AccessibilityIcon size={48} />}
        >
          <p>
            Purpose-built, high-support housing solutions for greater comfort
            and safety.
          </p>
        </HelpCard>
        <HelpCard
          label="Short-Term Accommodation (STA) / Respite"
          cardKey="short-term-accommodation"
          icon={<HouseIcon size={48} />}
        >
          <p>
            Flexible, short-term care to give you and your carers a break with
            peace of mind.
          </p>
        </HelpCard>
        <HelpCard
          label="Community Nursing Care"
          cardKey="community-nursing-care"
          icon={<HeartHandshakeIcon size={48} />}
        >
          <p className="text-green-800 mb-1">Including High-Intensity</p>
          <p>
            Qualified, compassionate nurses delivering clinical care and complex
            supports where you need them.
          </p>
        </HelpCard>
        <HelpCard
          label="Community Participation"
          cardKey="community-participation"
          icon={<UsersRoundIcon size={48} />}
        >
          <p>
            Connect, engage, and thrive through social, educational, and
            recreational activities.
          </p>
        </HelpCard>
        <HelpCard
          label="Group & Centre-Based Activities"
          cardKey="group-and-centre-based-activities"
          icon={<UsersIcon size={48} />}
        >
          <p>
            Join structured group programs that build confidence, skills, and
            friendships.
          </p>
        </HelpCard>
        <HelpCard
          label="Assistance with Personal Activities"
          cardKey="assistance-with-personal-activities"
          icon={<HousePlusIcon size={48} />}
        >
          <p className="text-green-800 mb-1">Standard & High</p>
          <p>
            Support with daily personal care needs — from showering and dressing
            to mobility assistance — tailored to your individual requirements.
          </p>
        </HelpCard>
        <HelpCard
          label="Complex Behavourial & Forensic Supports"
          cardKey="complex-behavourial-and-forensic-supports"
          icon={<BrainIcon size={48} />}
        >
          <p>
            Specialist support for participants with complex or justice-related
            needs, delivered with dignity and respect.
          </p>
        </HelpCard>
        <Link href={`/services`} className="group">
          <div
            className={
              "px-6 py-6 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-green-700 bg-[url(/noise.png)] bg-blend-darken group-hover:bg-green-600 transition-all border border-green-800"
            }
          >
            <div className="text-center text-xl md:text-2xl col-span-2 flex justify-center items-center flex-col h-full text-white">
              <p className="inline-flex gap-x-2 justify-start items-center  group-hover:gap-x-4 transition-all">
                <span
                  className={cn(
                    "inline-block",
                    highlightLinks && "underline underline-offset-4"
                  )}
                >
                  See all services
                </span>
                <ArrowRightIcon className="mt-1" />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

const HelpCard = ({
  cardKey,
  icon,
  label,
  children,
}: {
  cardKey: string;
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  const { highlightLinks } = usePrefs();
  return (
    <Link href={`/services/${cardKey}`} className="group" key={cardKey}>
      <div
        className={cn(
          "px-6 py-16 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-zinc-100 lg:bg-zinc-50 group-hover:bg-teal-50 transition-all",
          highlightLinks ? "border-2 border-zinc-500" : "border border-zinc-200"
        )}
      >
        <p className="text-green-700">{icon}</p>
        <div>
          <p className="text-xl text-green-900 font-medium">{label}</p>
          <div className="text-teal-950 mt-2">{children}</div>
        </div>
        <p
          className={cn(
            "bg-green-700 ring ring-green-500 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-800 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide shrink-0",
            highlightLinks && "underline underline-offset-2"
          )}
        >
          Learn More
        </p>
        {/* <p
          className={cn(
            "underline underline-offset-4 text-green-800 hover:text-green-700 mt-2 inline-block",
            highlightLinks && "font-semibold font-lg"
          )}
        >
          Learn More
        </p> */}
      </div>
    </Link>
  );
};

export default HowWeHelpSection;
