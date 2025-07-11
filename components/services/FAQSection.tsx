"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <>
      <section className="mt-12 mb-8 px-0 lg:px-8 py-4 lg:py-8 rounded-md lg:bg-zinc-50">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Frequently Asked Questions
        </h3>
        <div className="py-4">
          <Accordion type="multiple">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                Who can access services at Apex Aid Health Care?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  Our services are available to NDIS participants with approved
                  funding, as well as individuals requiring support due to
                  disability, chronic health conditions, or age-related needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                How do I get started with Apex Aid Health Care?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  You can contact us directly via phone, email, or through our
                  referral page. We will guide you through the process,
                  including eligibility, service options, and personalised
                  planning.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                What types of support do we provide?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  We offer a wide range of supports including Specialist
                  Disability Accommodation (SDA), Supported Independent Living
                  (SIL), Respite Care, Community Nursing, Daily Living
                  Assistance, Transport, Community Participation, and more.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                How do we tailor services to individual needs?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  We use a person-centred planning approach, collaborating
                  closely with participants, families, support coordinators, and
                  healthcare professionals to design supports that align with
                  everyone’s goals and preferences.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                Are our staff qualified and trained?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  Yes, all our staff undergo thorough training and hold relevant
                  qualifications. We prioritise cultural awareness, respect, and
                  professionalism in all service delivery.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                Can services be adjusted if my needs change?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  Absolutely. We regularly review and adapt support plans to
                  ensure they continue to meet your evolving needs and
                  aspirations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                How do we ensure safety and quality?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  Apex Aid Health Care follows strict policies and complies with
                  NDIS Practice Standards. We conduct ongoing training, risk
                  assessments, and audits to maintain the highest quality of
                  care.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                Do we support culturally diverse communities?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  Yes, we are committed to providing culturally safe and
                  inclusive services for people from all backgrounds, including
                  Aboriginal and Torres Strait Islander communities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                Can I choose the times and locations for support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  We offer flexible scheduling and work with you to provide
                  support at times and places that suit your lifestyle and
                  preferences.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10">
              <AccordionTrigger className="font-medium text-lg text-zinc-800">
                How do I provide feedback or make a complaint?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-900 text-md">
                  We encourage open communication. You can provide feedback or
                  lodge a complaint through our website, by phone, or directly
                  with our management team. All feedback is taken seriously and
                  handled confidentially.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Link
          className={cn(
            "mt-3 font-medium bg-green-700 ring ring-green-600 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-700 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide",
            highlightLinks && "underline underline-offset-2"
          )}
          href="/contact"
        >
          Contact Our Team
        </Link>
      </section>
    </>
  );
};

export default FAQSection;
