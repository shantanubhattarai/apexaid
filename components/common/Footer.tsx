"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
// import { SquareArrowOutUpRight } from "lucide-react";
import NDISImage from "@/public/ndis2.png";
import Logo from "@/public/logoalpha.png";

import Link from "next/link";
import Image from "next/image";
import ContactDetails from "../contact/ContactDetails";
import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { highlightLinks } = usePrefs();
  return (
    <footer className="mt-12 pt-16 pb-8 bg-green-900 bg-noise bg-blend-multiply bg-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-start gap-x-4 lg:gap-x-16 gap-y-4 text-zinc-200 mb-12">
        <div className="flex flex-col gap-y-8 justify-start items-start">
          <div>
            <Link href="/" className="font-semibold text-2xl">
              <Image
                src={Logo}
                alt="Apex Aid Health Care"
                width={96}
                className="mb-2"
              />
            </Link>
            <ContactDetails />
          </div>
          <ul className="flex gap-3 md:gap-6 items-center justify-end -ml-1">
            <Link
              href={"https://www.facebook.com/profile.php?id=61566110080866"}
              className={cn(highlightLinks && "border-b-2 pb-1")}
            >
              <IconBrandFacebook stroke={1.5} className="hover:text-white" />
            </Link>
            <Link
              href={"https://www.instagram.com/apex_aid2025"}
              className={cn(highlightLinks && "border-b-2 pb-1")}
            >
              <IconBrandInstagram stroke={1.5} className="hover:text-white" />
            </Link>
            <IconBrandWhatsapp stroke={1.5} />
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <h3 className="font-medium text-lg mb-4">Links</h3>
          <ul
            className={cn(
              "flex flex-col gap-2 text-zinc-300",
              highlightLinks && "underline underline-offset-2 font-semibold"
            )}
          >
            <Link href="/" className="hover:underline hover:underline-offset-2">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:underline hover:underline-offset-2"
            >
              Services
            </Link>
            <Link
              href="/referral"
              className="hover:underline hover:underline-offset-2"
            >
              Make a referral
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:underline-offset-2"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-start gap-x-4 lg:gap-x-16 gap-y-4 text-zinc-200 mb-12">
        <div>
          <h3 className="font-medium text-lg mb-4">Services</h3>
          <div className="flex flex-col lg:flex-row justify-start items-start gap-x-4 lg:gap-x-16 gap-y-2">
            <ul
              className={cn(
                "flex flex-col gap-2 text-zinc-300",
                highlightLinks && "underline underline-offset-2 font-semibold"
              )}
            >
              <Link
                href="/services/supported-independent-living"
                className="hover:underline hover:underline-offset-2"
              >
                Supported Independent Living
              </Link>
              <Link
                href="/services/short-term-accommodation"
                className="hover:underline hover:underline-offset-2"
              >
                Short-Term Accommodation / Respite
              </Link>
              <Link
                href="/services/specialist-disability-accommodation"
                className="hover:underline hover:underline-offset-2"
              >
                Specialist Disability Accommodation
              </Link>
              <Link
                href="/services/support-coordination"
                className="hover:underline hover:underline-offset-2"
              >
                Support Coordination
              </Link>
              <Link
                href="/services/community-nursing-care"
                className="hover:underline hover:underline-offset-2"
              >
                Community Nursing Care
              </Link>
              <Link
                href="/services/community-participation"
                className="hover:underline hover:underline-offset-2"
              >
                Community Participation
              </Link>
              <Link
                href="/services/assistance-with-personal-activities"
                className="hover:underline hover:underline-offset-2"
              >
                Assistance with Personal Activities
              </Link>
              <Link
                href="/services/group-and-centre-based-activities"
                className="hover:underline hover:underline-offset-2"
              >
                Group & Centre-Based Activities
              </Link>
              {/* <Link
                href="/services/household-tasks-and-home-maintenance"
                className="hover:underline hover:underline-offset-2"
              >
                Household Tasks & Home Maintenance
              </Link> */}
              <Link
                href="/services/travel-and-transport-assistance"
                className="hover:underline hover:underline-offset-2"
              >
                Travel & Transport Assistance
              </Link>
            </ul>
            <ul
              className={cn(
                "flex flex-col gap-2 text-zinc-300",
                highlightLinks && "underline underline-offset-2 font-semibold"
              )}
            >
              <Link
                href="/services/complex-behavourial-and-forensic-supports"
                className="hover:underline hover:underline-offset-2"
              >
                Complex Behavioural & Forensic Supports
              </Link>
              <Link
                href="/services/transition-supports"
                className="hover:underline hover:underline-offset-2"
              >
                Transition Supports
              </Link>
              <Link
                href="/services/development-of-life-skills"
                className="hover:underline hover:underline-offset-2"
              >
                Development of Life Skills
              </Link>
              <Link
                href="/services/assistive-technology-and-home-modifications"
                className="hover:underline hover:underline-offset-2"
              >
                Assistive Technology & Home Modifications
              </Link>
              <Link
                href="/services/personal-mobility-equipment"
                className="hover:underline hover:underline-offset-2"
              >
                Personal Mobility Equipment
              </Link>
              <Link
                href="/services/household-equipment-and-assistive-products"
                className="hover:underline hover:underline-offset-2"
              >
                Household Equipment & Assistive Products
              </Link>
              {/* <Link
                href="/services/daily-tasks-and-shared-living"
                className="hover:underline hover:underline-offset-2"
              >
                Daily Tasks and Shared Living
              </Link> */}
              <Link
                href="/services/palliative-care"
                className="hover:underline hover:underline-offset-2"
              >
                Palliative Care
              </Link>
              <Link
                href="/services/innovative-community-participation"
                className="hover:underline hover:underline-offset-2"
              >
                Innovative Community Participation
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 mb-8 rounded-sm md:bg-green-950 text-zinc-200">
        <p className="font-medium text-xl mb-1">Empowering your NDIS Journey</p>
        <p className="text-zinc-200 text-lg">
          What makes Apex Aid Health Care stand out?
        </p>
        <div className="text-zinc-300 flex flex-col gap-2 mt-4">
          <div>
            <p className="font-medium text-zinc-200 text-lg">
              Skilled and Supportive Team
            </p>
            <p>
              Our experienced staff are committed to delivering compassionate
              and respectful care that supports participants to live
              independently and confidently.
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-200 text-lg">
              Care Tailored to You
            </p>
            <p>
              We develop flexible, person-centred support plans that align with
              your goals, lifestyle, and preferences.
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-200 text-lg">
              Dependable Service Delivery
            </p>
            <p>
              We pride ourselves on reliability, responsiveness, and consistent
              support — ensuring peace of mind for you and your family.
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-200 text-lg">
              Inclusive and Culturally Aware Approach
            </p>
            <p>
              We recognise and value the diversity of the people we support,
              ensuring culturally safe and inclusive services.
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-200 text-lg">
              Participant-Focused Outcomes
            </p>
            <p>
              Our goal is to help you achieve meaningful progress — whether
              that&apos;s building daily living skills, increasing social
              participation, or reaching your personal milestones.
            </p>
          </div>
          <p>
            Let us support your goals - contact us to find out how we can help.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 my-8 rounded-sm md:bg-green-950 text-zinc-200">
        <p>
          In the spirit of reconciliation, Apex Aid Health Care acknowledges the
          Traditional Custodians of the lands on which we live and provide care.
          We recognize and respect the enduring connection that Aboriginal and
          Torres Strait Islander peoples have to country, culture, community and
          spiritually.
        </p>
        <p className="mt-2">
          We pay our respects to Elders past, present, and emerging, and honour
          their resilience, leadership, and contributions across generations.
        </p>
        <p className="mt-2">
          Apex Aid Health Care is committed to walking alongside First Nations
          peoples on the path to reconciliation. We strive to foster meaningful
          relationships, promote inclusive practices, and celebrate the rich
          histories, cultures, and achievements of Aboriginal and Torres Strait
          Islander communities.
        </p>
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-between items-center py-4 mt-8 bg-green-950 rounded-sm">
          <p className="pl-3 lg:pl-0">
            <Image src={NDISImage} alt="Registered NDIS Provider" height={96} />
          </p>
          <div className="container mx-auto px-4 text-center lg:text-right text-zinc-300">
            <p>&copy; 2025 Apex Aid Services. All rights reserved.</p>
            <p>
              <span className="mr-2">ABN</span>
              <span>84 677 907 881</span>
            </p>
            <p>
              <span className="mr-2">Registered NDIS Provider ID:</span>
              <span>4-KQIEHWQ</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
