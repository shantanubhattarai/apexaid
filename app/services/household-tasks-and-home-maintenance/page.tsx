import Image from "next/image";
import HouseholdImage from "@/public/images/Household.jpg";
import Household01Image from "@/public/images/Household_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function HouseholdTasksAndHomeMaintenance() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Household Taks and Home Maintenance
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we understand that maintaining a clean, safe,
          and comfortable home is essential to your wellbeing. Our Household
          Assistance and Home Maintenance services provide practical,
          personalised support to help you manage daily chores, promoting a
          healthy and organised living environment.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={HouseholdImage}
            alt="sda"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access Household Assistance and Home Maintenance?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>NDIS participants with Core Supports funding</li>
          <li>
            Individuals who need help managing household tasks due to
            disability, health challenges, or other support needs
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Services
        </h3>
        <div className="mt-2 flex flex-col xl:flex-row xl:justify-between items-start gap-4">
          <ul className="list-disc list-inside mt-2 text-zinc-800">
            <li>
              Cleaning and tidying living spaces, kitchens, bathrooms, and
              bedrooms
            </li>
            <li>
              Laundry tasks including washing, drying, folding, and ironing
            </li>
            <li>Dishwashing and kitchen maintenance</li>
            <li>Organising and maintaining clutter-free, safe environments</li>
            <li>
              Assistance with shopping, meal preparation, and pantry
              organisation
            </li>
            <li>Support with minor home maintenance and safety checks</li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[640px] relative">
          <Image
            src={Household01Image}
            alt="What do we offer?"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Person-centred approach respecting your preferences, routines, and
            lifestyle
          </li>
          <li>
            Reliable, respectful, and trained staff experienced in culturally
            aware care
          </li>
          <li>Flexible scheduling tailored to your needs</li>
          <li>
            Commitment to safety, hygiene, and high-quality service delivery
          </li>
          <li>
            Collaborative planning with you and your support network, with
            ongoing reviews to meet your evolving needs
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Supporting your independence and confidence at home</li>
          <li>
            Providing consistent, trustworthy assistance with household tasks
          </li>
          <li>
            Helping maintain a clean, safe, and pleasant living environment
          </li>
        </ul>
      </section>
      <section className="pt-4">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we are dedicated to helping you live
          comfortably and confidently in your home with the practical support
          you deserve.
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
