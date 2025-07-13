import Image from "next/image";
import CNImage from "@/public/images/CN.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Nursing Care | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function CN() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Community Nursing Care
          </h2>
          <p className="text-zinc-200 leading-5">Including High-Intensity</p>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Community Nursing services deliver
          compassionate, professional, and clinically sound care to individuals
          living with disability, chronic illness, or complex health needs. We
          believe high-quality nursing support should be accessible in the place
          you feel most comfortable — your own home or supported accommodation.
        </p>
        <p className="text-zinc-800 mt-2">
          Whether you need short-term post-hospital support or long-term
          clinical care, our team of qualified, AHPRA-registered nurses is
          committed to providing safe, respectful, and person-centred services
          that prioritise your dignity, health, and independence.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={CNImage}
            alt="Community Nursing"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who do we support?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Individuals requiring complex medical care at home</li>
          <li>Participants transitioning from hospital to home</li>
          <li>
            People with wounds, pressure injuries, or chronic health conditions
          </li>
          <li>Those needing medication, continence, or health assessments</li>
          <li>
            Participants funded under the NDIS, aged care, or other disability
            programs
          </li>
          <li>
            Anyone seeking quality, trusted clinical support in the community
          </li>
        </ul>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Community Nursing Services
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">
              Wound Care & Pressure Injury Management
            </p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Expert assessment and treatment</li>
              <li>Support for faster healing and infection prevention</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Medication Management</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Safe administration</li>
              <li>Dosage monitoring and education</li>
              <li>Medication reviews</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">
              Diabetes & Chronic Condition Monitoring
            </p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Blood sugar checks and insulin administration</li>
              <li>Chronic condition education and monitoring</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">
              Continence Assessments & Catheter Care
            </p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Professional continence support</li>
              <li>Catheter maintenance and hygiene education</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">PEG Feeding & Enteral Nutrition</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Safe and hygienic tube feeding support</li>
              <li>Ongoing monitoring for nutrition and hydration</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Health Assessments & Risk Monitoring</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Routine clinical reviews</li>
              <li>Early identification of risks or complications</li>
              <li>Collaborative care planning</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Post-Hospital Clinical Support</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                Short-term recovery care after surgery, illness, or injury
              </li>
              <li>
                Reducing hospital readmissions through coordinated nursing
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          NDIS and Community Nursing Care
        </h3>
        <p className="mt-2 text-zinc-800">
          Community Nursing Care can be funded through:
        </p>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li className="font-medium">
            Capacity Building - Improved Daily Living
          </li>
          <li>
            <span className="font-medium">
              Core Supports -Assistance with Daily Life{" "}
            </span>{" "}
            (especially in SIL/supported accommodation)
          </li>
        </ul>
        <p className="mt-2 text-zinc-800">
          We collaborate with families, support coordinators, and plan managers
          to ensure every participant&apos;s support aligns with their NDIS
          goals and health requirements.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Qualified, Registered Nurses</p>
            <p>
              All care is delivered by AHPRA-registered nurses with disability
              and community care experience
            </p>
          </div>
          <div>
            <p className="font-medium">Respectful & Person-Centred Approach</p>
            <p>
              Tailored support that values your voice, culture, and preferences
            </p>
          </div>
          <div>
            <p className="font-medium">Seamless Coordination</p>
            <p>
              Close collaboration with your GP, allied health professionals, and
              other supports for continuity of care
            </p>
          </div>
          <div>
            <p className="font-medium">Reliable & Responsive</p>
            <p>Flexible, timely services built around your changing needs</p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside ml-2 text-zinc-800">
          <li>To support your health, independence, and confidence</li>
          <li>To treat you with respect, dignity, and cultural sensitivity</li>
          <li>To deliver safe, high-quality care right where you live</li>
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
