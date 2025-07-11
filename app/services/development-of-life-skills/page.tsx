import Image from "next/image";
import DoLSImage from "@/public/images/DoLS.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function DevelopmentOfLifeSkills() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Development of Life Skills
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Development of Life Skills program is
          designed to support participants in building the skills needed for
          greater independence, confidence, and community participation.
        </p>
        <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={DoLSImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access These Supports?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants aiming to improve daily living, social, or
            vocational skills
          </li>
          <li>
            Individuals seeking personalised support to achieve their goals and
            aspirations
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Life Skills Development Services
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Training in communication, budgeting, and personal organisation
          </li>
          <li>Support with meal preparation and nutrition education</li>
          <li>Assistance with time management and appointment keeping</li>
          <li>Social skills development and community navigation</li>
          <li>Goal setting and progress review</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Tailored programs that reflect your interests and priorities</li>
          <li>Supportive, patient, and encouraging staff</li>
          <li>Focus on practical skills for real-world independence</li>
          <li>Collaborative planning with you and your support network</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Empowering you to live confidently and achieve your personal goals
          </li>
          <li>Regular monitoring and flexible adjustments to your program</li>
          <li>Creating a positive, motivating learning environment</li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we are committed to helping you grow your
          skills and live the life you choose.
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
