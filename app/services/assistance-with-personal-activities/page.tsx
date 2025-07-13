import Image from "next/image";
import ADLImage from "@/public/images/ADL.jpg";
import ADL01Image from "@/public/images/ADL_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assitance with Personal Activities | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function AssistanceWithPersonalActivities() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Assistance with Personal Activities
          </h2>
          <p className="text-zinc-200 leading-5">Standard and High</p>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we provide tailored Assistance with Personal
          Activities to help people with disabilities manage everyday tasks with
          confidence, independence, and dignity. Our goal is to empower you to
          live life on your own terms—safely and comfortably at home or in the
          community.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={ADLImage}
            alt="Assistance with Daily Living"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is Assistance with Personal Activities?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Support with essential daily tasks that may be challenging due to
            physical, cognitive, or psychosocial disabilities
          </li>
          <li>
            Delivered in your own home, shared accommodation, or while
            participating in community activities
          </li>
          <li>Focused on promoting independence, choice, and wellbeing</li>
        </ul>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Standard Personal Activities Assistance
        </h3>
        <p className="text-zinc-800">
          Our experienced and compassionate support workers assist with:
        </p>
        <div className="mt-2 flex flex-col xl:flex-row items-start gap-4">
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Personal Care</p>
              <p>
                Bathing, grooming, dressing, oral hygiene, and toileting in
                respectfully and discreetly.
              </p>
            </div>
            <div>
              <p className="font-medium">Meal Preparation & Feeding</p>
              <p>
                Preparing nutritious meals, feeding support, and dietary
                planning tailored to your preferences and needs
              </p>
            </div>
            <div>
              <p className="font-medium">Mobility & Transfers</p>
              <p>
                Safe assistance with moving around your home, including use of
                hoists, walking aids, or wheelchair transfers
              </p>
            </div>
            <div>
              <p className="font-medium">Household Tasks</p>
              <p>
                Light cleaning, laundry, dishwashing, and general tidying to
                keep your living environment comfortable
              </p>
            </div>
            <div>
              <p className="font-medium">
                Medication Prompts & Health Routines
              </p>
              <p>
                Reminders and support to manage medications and follow health
                routines as directed by your healthcare team
              </p>
            </div>
            <div>
              <p className="font-medium">Transport & Community Access</p>
              <p>
                Assistance attending appointments, running errands, and
                participating in social or community events
              </p>
            </div>
          </div>
          <div className="w-full xl:w-xl h-96 relative shrink-0">
            <Image
              src={ADL01Image}
              alt="Design standards"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          High-Intensity Personal Activities Assistance
        </h3>
        <p className="text-zinc-800">
          For participants with complex health needs, we provide advanced care
          delivered by trained and qualified staff, including:
        </p>
        <ul className="list-disc list-inside mt-2 ml-4 text-zinc-800">
          <li>Complex bowel care</li>
          <li>Enteral feeding (PEG/NG tubes)</li>
          <li>Urinary catheter care (in-dwelling, in-out, suprapubic)</li>
          <li>Subcutaneous injections</li>
          <li>Complex wound care</li>
          <li>Other high-risk personal care tasks as required</li>
        </ul>
        <p className="mt-2 text-zinc-800">
          All high-intensity supports follow strict policies, risk assessments,
          and evidence-based best practices, with oversight from experienced
          registered nurses and allied health professionals.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          NDIS and Daily Living Support
        </h3>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li>
            <span className="font-medium">Person-Centred Support - </span>
            Your choices, preferences, and goals guide all aspects of care
          </li>
          <li>
            <span className="font-medium">Experienced, Friendly Staff - </span>
            Trained in safe, respectful, inclusive, and culturally aware support
            practices
          </li>
          <li>
            <span className="font-medium">Flexible Scheduling - </span>
            From a few hours per week to 24/7 assistance, we work around your
            life
          </li>
          <li>
            <span className="font-medium">Holistic Care Approach - </span>
            Coordination with allied health professionals and families for
            consistent quality care
          </li>
        </ul>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we believe that every person deserves to live
          with dignity, independence, and choice. Our personal care services are
          designed to support your daily living while empowering you to achieve
          your goals and maintain your lifestyle.
        </p>
        <p className="mt-2 text-zinc-800">
          At Apex Aid Health Care, we don&apos;t just support your daily tasks —
          we support your independence, wellbeing, and confidence every step of
          the way.
        </p>
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
