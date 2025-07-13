// import Image from "next/image";
// import FDSImage from "@/public/images/FDS.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household Equipment and Assistive Products | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function HouseholdEquipmentAndAssistiveProducts() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Household Equipment and Assistive Products
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we provide a range of assistive products
          designed to help you manage household tasks more easily and safely,
          promoting independence and comfort in your daily life.
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
          Who Can Access Assistive Products for Household Tasks?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants with funding for assistive technology or equipment
          </li>
          <li>
            Individuals needing aids to support daily household activities
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Assistive Products Services
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Provision of tools and devices for cleaning, cooking, and household
            management
          </li>
          <li>Adaptive equipment for kitchen safety and accessibility</li>
          <li>Equipment for mobility and reach assistance within the home</li>
          <li>
            Advice, fitting, and training on using assistive products
            effectively
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Wide selection of high-quality, durable assistive products</li>
          <li>Expert guidance to match products with your specific needs</li>
          <li>Ongoing support to ensure safe and effective use</li>
          <li>Collaboration with allied health professionals</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Empowering you to perform household tasks with greater ease and
            independence
          </li>
          <li>
            Ensuring products are tailored to your lifestyle and abilities
          </li>
          <li>Responsive service and timely support</li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we are dedicated to enhancing your daily
          living through practical and personalised assistive solutions.
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
