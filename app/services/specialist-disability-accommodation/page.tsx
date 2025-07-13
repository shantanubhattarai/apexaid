import ContactDetails from "@/components/contact/ContactDetails";
import Image from "next/image";
import SDAImage from "@/public/images/SDA.jpg";
import SDA01 from "@/public/images/SDA01.png";
import SDA02 from "@/public/images/SDA02.png";
import Banner from "@/components/common/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Disability Accommodation | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function SDA() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Specialist Disability Accommodation
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we understand that a safe, accessible, and
          purpose-designed home can transform a person&apos;s quality of life.
          Our SDA services provide high-quality housing solutions for NDIS
          participants with significant functional impairment or very high
          support needs, giving people a place to live comfortably, safely, and
          independently.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={SDAImage}
            alt="sda"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is SDA?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Purpose-built, specialist housing for people with significant
            disabilities
          </li>
          <li>Designed to meet strict NDIS SDA Design Standards</li>
          <li>
            Includes modifications and features to support safety,
            accessibility, and independence
          </li>
          <li>
            Works alongside other funded supports like Supported Independent
            Living (SIL)
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What makes SDA different?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Built specifically for people with complex or high physical support
            needs
          </li>
          <li>
            Designed with:
            <ul className="list-[circle] list-inside ml-8 text-zinc-800">
              <li>Customised accessibility layouts</li>
              <li>Advanced assistive technologies</li>
              <li>Safety features and durable materials</li>
            </ul>
          </li>
          <li>
            Promotes independence while ensuring 24/7 support options if
            required
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Types of SDA Homes we Offer
        </h3>
        <div className="flex flex-col xl:flex-row gap-4 xl:justify-between mt-2">
          <ul className="text-zinc-800 space-y-2">
            <li>
              <span className="font-medium">Private Apartments</span>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>
                  Ideal for people seeking greater independence in a managed
                  complex
                </li>
                <li>Self-contained, modern, and secure</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Townhouses or Villas</span>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>Balance of privacy and community connection</li>
                <li>Shared amenities with personal living space</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Standalone Homes</span>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>
                  Tailored for individuals needing highly customised spaces
                </li>
                <li>Greater privacy and support flexibility</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Group Living Arragements</span>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>Shared homes with supportive housemates</li>
                <li>
                  Staff available to deliver daily assistance and encourage
                  social connection
                </li>
              </ul>
            </li>
          </ul>
          <div className="w-full xl:w-xl h-84 relative shrink-0">
            <Image
              className="rounded-md object-cover object-center"
              fill
              src={SDA02}
              alt="sda homes"
            />
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment to SDA Design Standards
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Properties designed in line with NDIS SDA Design Standards</li>
          <li>Safety, functionality, and comfort prioritised</li>
          <li>Tailored environments to suit each person&apos;s needs</li>
          <li>Inclusive, culturally safe, and welcoming</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our SDA Housing Categories
        </h3>
        <div className="mt-2 flex flex-col xl:flex-row xl:justify-between items-start gap-4">
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Sensory-Friendly Living Spaces</p>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>Supports people with sensory or cognitive impairments</li>
                <li>Clear visual cues, calm design, supportive lighting</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Mobility-Enhanced Homes</p>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>Seamless access for wheelchair or mobility aid users</li>
                <li>
                  Wide doorways, step-free bathrooms, easy-to-reach fittings
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Durable and Secure Environments</p>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>Designed for people with complex behaviours</li>
                <li>Robust materials and low-stimulation layouts</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Advanced Support-Ready Properties</p>
              <ul className="list-disc list-inside ml-2 text-zinc-800">
                <li>Ceiling hoists, reinforced structures, smart systems</li>
                <li>Tailored for high physical support requirements</li>
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-xl h-80 relative shrink-0">
            <Image
              src={SDA01}
              alt="Design standards"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access SDA?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>NDIS participants aged 18+</li>
          <li>People with permanent and significant disability</li>
          <li>Participants with high or very high support needs</li>
          <li>Those with approved SDA funding in their NDIS plan</li>
          <li>
            Our team can help you determine eligibility and guide you through
            the process
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Benefits of SDA with Apex Aid Health Care
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Homes built for independence, safety, and dignity</li>
          <li>Integration with SIL and other supports</li>
          <li>Choice and control over how you live</li>
          <li>Compassionate, experienced support teams</li>
          <li>Community-oriented environments that foster inclusion</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Ready to Find your Specialist Home?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Apex Aid Health Care can help you find SDA housing that suits your
            lifestyle and your goals
          </li>
          <li>
            Let us walk you through your options, eligibility, and the
            application process
          </li>
          <li>
            Together, we will help you live safely, comfortably, and on your own
            terms
          </li>
        </ul>
      </section>
      <section className="py-12">
        <Banner
          mainText={<ContactDetails horizontal />}
          url="/contact"
          urlText="Enquire Now"
        />
      </section>
    </article>
  );
}
