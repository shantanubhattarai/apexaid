// import Image from "next/image";
// import FDSImage from "@/public/images/FDS.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesronal Mobility Equipment | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function PersonalMobilityEquipment() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Personal Mobility Equipment
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we provide access to high-quality personal
          mobility equipment designed to enhance your independence, safety, and
          comfort in daily activities.
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
          Who Can Access Personal Mobility Equipment?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>NDIS participants with approved funding for mobility aids</li>
          <li>
            Individuals requiring equipment to support mobility, posture, or
            physical function
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Personal Mobility Equipment Services
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Assessment and advice on suitable mobility aids</li>
          <li>
            Provision and maintenance of equipment such as wheelchairs, walkers,
            and scooters
          </li>
          <li>Support with fitting and training on equipment use</li>
          <li>
            Coordination with allied health professionals for optimal outcomes
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Access to a wide range of quality mobility products</li>
          <li>
            Experienced staff knowledgeable in equipment selection and care
          </li>
          <li>Commitment to personalised solutions based on your needs</li>
          <li>Ongoing support and equipment servicing</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Helping you achieve greater independence and mobility</li>
          <li>Ensuring your safety and comfort with the right equipment</li>
          <li>Working closely with your support team for seamless care</li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we are here to help you move freely and
          confidently every day.
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
