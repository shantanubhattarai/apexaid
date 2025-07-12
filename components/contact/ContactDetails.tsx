"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactDetails = ({ horizontal }: { horizontal?: boolean }) => {
  const { highlightLinks } = usePrefs();
  return (
    <ul
      className={cn(
        "flex gap-4",
        horizontal
          ? "flex-col lg:flex-row items-center md:items-start mb-4 lg:mb-0"
          : "flex-col"
      )}
    >
      <li className="flex gap-2 items-center">
        <MapPin size={20} />
        <span>12/17 Sunset Drive, Coconut Grove, NT, 0810</span>
      </li>
      <Link
        className={cn(
          "flex gap-2 items-center underline underline-offset-2",
          highlightLinks && "font-semibold"
        )}
        href="tel:+61451421606"
      >
        <Phone size={18} />
        <span>+61451421606</span>
      </Link>
      <Link
        className={cn(
          "flex gap-2 items-center underline underline-offset-2",
          highlightLinks && "font-semibold"
        )}
        href="mailto:info@apexaid.com.au?subject=Enquiry%20Request"
      >
        <Mail size={18} />
        <span>info@apexaid.com.au</span>
      </Link>
    </ul>
  );
};

export default ContactDetails;
