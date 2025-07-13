// import Image from "next/image";
// import FDSImage from "@/public/images/FDS.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complex Behavioural & Forensic Supports | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function FDS() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Complex Behavioural & Forensic Supports
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we provide specialised support for
          individuals with complex behavioural needs, including those involved
          with forensic or justice systems. Our services are tailored to promote
          safety, wellbeing, and positive behavioural outcomes.
        </p>
        {/* <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={FDSImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div> */}
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access These Supports?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>NDIS participants with complex behavioural support needs</li>
          <li>
            Individuals requiring specialised interventions due to forensic or
            legal involvement
          </li>
          <li>
            Participants needing support to manage behaviours of concern safely
            and effectively
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Complex Behavioural & Forensic Supports Include
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Individualised behaviour support planning and implementation</li>
          <li>Crisis prevention and de-escalation strategies</li>
          <li>
            Collaborative work with allied health professionals, psychologists,
            and legal representatives
          </li>
          <li>
            Assistance with skill-building for emotional regulation and social
            interaction
          </li>
          <li>
            Support during community and residential activities to maintain
            safety and inclusion
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Experienced, trained staff with expertise in complex behaviour
            support
          </li>
          <li>Person-centred and trauma-informed care approaches</li>
          <li>Strong focus on safety, respect, and dignity</li>
          <li>Collaborative, multidisciplinary teamwork</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Tailored strategies based on each person&apos;s unique needs and
            goals
          </li>
          <li>
            Transparent communication with families, legal teams, and support
            networks
          </li>
          <li>
            Ongoing review and adaptation of supports for continuous improvement
          </li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we are dedicated to providing safe,
          effective, and compassionate behavioural supports that help
          participants live fulfilling lives with dignity.
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
