"use client";

import Link from "next/link";

import {
  AccessibilityIcon,
  AmbulanceIcon,
  ArrowRightIcon,
  BrainIcon,
  ChevronRight,
  HandHelpingIcon,
  HandshakeIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  HouseIcon,
  HousePlugIcon,
  // HousePlusIcon,
  RefreshCcwDotIcon,
  UsersIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";

const ServiceListSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section className="py-12">
      <h3 className="text-center text-2xl lg:text-4xl font-medium leading-14 mb-8 text-green-700">
        Our services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <ServiceCard
          label="Supported Independent Living (SIL)"
          cardKey="supported-independent-living"
          icon={<HandHelpingIcon size={48} />}
        >
          <p>
            Personalised support to help you build skills and live as
            independently as possible, whether in a shared environment or your
            own home.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Short-Term Accommodation (STA) / Respite"
          cardKey="short-term-accommodation"
          icon={<HouseIcon size={48} />}
        >
          <p>
            Flexible short-term stays that provide you with a change of scenery
            and give carers a break, all while maintaining your daily support
            needs.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Specialist Disability Accommodation (SDA)"
          cardKey="specialist-disability-accommodation"
          icon={<AccessibilityIcon size={48} />}
        >
          <p>
            High-quality housing designed for participants with extreme
            functional impairment or very high support needs, promoting safety,
            comfort, and independence.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Support Coordination"
          cardKey="support-coordination"
          icon={<RefreshCcwDotIcon size={48} />}
        >
          <p>
            Helping you navigate the NDIS, connect with services, and build
            skills to manage your own support with confidence.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Community Nursing Care"
          cardKey="community-nursing-care"
          icon={<HeartHandshakeIcon size={48} />}
        >
          <p className="text-green-800 mb-1">Including High-intensity</p>
          <p>
            Professional nursing care in the home or community, including
            medication management, wound care, and complex health support.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Community Participation"
          cardKey="community-participation"
          icon={<UsersRoundIcon size={48} />}
        >
          <p>
            Engage in social, educational, or recreational activities with our
            support, strengthening skills and building community connections.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Assistance with Personal Activities"
          cardKey="assistance-with-personal-activities"
          icon={<HandshakeIcon size={48} />}
        >
          <p className="text-green-800 mb-1">Standard & High</p>
          <p>
            Dignified, person-centered daily care for all levels of need - from
            routine self-care to complex, high- intensity supports
          </p>
        </ServiceCard>
        <ServiceCard
          label="Group & Centre-Based Activities"
          cardKey="group-and-centre-based-activities"
          icon={<UsersIcon size={48} />}
        >
          <p>
            Structured programs in group settings to encourage social
            interaction, skill-building, and a sense of belonging.
          </p>
        </ServiceCard>
        {/* <ServiceCard
          label="Household Tasks and Home Maintenance"
          cardKey="household-tasks-and-home-maintenance"
          icon={<HousePlusIcon size={48} />}
        >
          <p>
            Reliable assistance with everyday tasks such as cleaning, laundry,
            and meal preparation, ensuring your home remains safe and welcoming.
          </p>
        </ServiceCard> */}
        <ServiceCard
          label="Travel & Transport Assistance"
          cardKey="travel-and-transport-assistance"
          icon={<AmbulanceIcon size={48} />}
        >
          <p>
            Safe, reliable transport options to get you to appointments, social
            events, and community activities with confidence.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Complex Behavourial & Forensic Supports"
          cardKey="complex-behavourial-and-forensic-supports"
          icon={<BrainIcon size={48} />}
        >
          <p>
            Specialised care for participants with complex behaviours or
            justice-related needs, delivered with respect, skill, and
            understanding.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Transition Supports"
          cardKey="transition-supports"
          icon={<HospitalIcon size={48} />}
        >
          <p className="text-green-800 mb-1">
            Hospital-to-Home, Youth-to-Adult
          </p>
          <p>
            Guidance and support to help you navigate major life transitions
            smoothly, whether moving from hospital to home or transitioning
            through age-based services.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Development of Life Skills"
          cardKey="development-of-life-skills"
          icon={<HandHelpingIcon size={48} />}
        >
          <p>
            Programs that build capacity for everyday living, including
            communication, budgeting, travel training, and problem-solving
            skills.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Assistive Technology & Home Modifications"
          cardKey="assistive-technology-and-home-modifications"
          icon={<HousePlugIcon size={48} />}
        >
          <p>
            Advice, setup, and training on devices and equipment to help you
            achieve greater independence in daily life.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Personal Mobility Equipment"
          cardKey="personal-mobility-equipment"
          icon={<HousePlugIcon size={48} />}
        >
          <p>
            Provision and support for mobility aids, helping you move safely and
            freely in your community.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Household Equipment & Assistive Products"
          cardKey="household-equipment-and-assistive-products"
          icon={<HousePlugIcon size={48} />}
        >
          <p>
            Access to tools and products that support your day-to-day living
            needs and enhance your quality of life.
          </p>
        </ServiceCard>
        {/* <ServiceCard
          label="Daily Tasks and Shared Living"
          cardKey="daily-tasks-and-shared-living"
          icon={<HeartHandshakeIcon size={48} />}
        >
          <p>
            Support with personal and household tasks in shared living or family
            homes, helping you maintain a comfortable and healthy routine.
          </p>
        </ServiceCard> */}
        <ServiceCard
          label="Palliative Care"
          cardKey="palliative-care"
          icon={<HeartHandshakeIcon size={48} />}
        >
          <p>
            Compassionate, respectful end-of-life care delivered in your home or
            supported accommodation, focused on dignity and comfort.
          </p>
        </ServiceCard>
        <ServiceCard
          label="Innovative Community Participation"
          cardKey="innovative-community-participation"
          icon={<UsersRoundIcon size={48} />}
        >
          <p>
            Creative, flexible supports to help you try new activities, develop
            skills, and build confidence in community life.
          </p>
        </ServiceCard>
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

const ServiceCard = ({
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
    <Link href={`/services/${cardKey}`} className="group">
      <div
        className={cn(
          "px-4 lg:px-6 py-8 lg:py-6 h-full rounded-sm flex gap-x-4 items-center justify-between w-full gap-y-6 bg-zinc-100 lg:bg-zinc-50 group-hover:bg-teal-50 transition-all",
          highlightLinks ? "border-2 border-zinc-500" : "border border-zinc-200"
        )}
        key={cardKey}
      >
        <div className="flex justify-start gap-x-4 items-start">
          <p className="text-green-700 mt-[6px]">{icon}</p>
          <div>
            <p className="text-lg md:text-xl text-green-900 font-medium">
              {label}
            </p>
            <div className="text-teal-950 hidden lg:block">{children}</div>
          </div>
        </div>
        <ChevronRight className="text-green-700" size={24} />
        {/* <Link
        href={`/services/${cardKey}`}
        className="underline underline-offset-4 hover:text-sky-600 mt-2 inline-block text-green-700"
      >
        Learn More
      </Link> */}
      </div>
    </Link>
  );
};

export default ServiceListSection;
