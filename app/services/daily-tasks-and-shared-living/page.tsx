import Image from "next/image";
import FDSImage from "@/public/images/FDS.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function DailyTasksAndSharedLiving() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Daily Tasks and Shared Living
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Daily Tasks and Shared Living services
          support participants to manage everyday activities while enjoying the
          benefits of community and companionship in shared living environments.
        </p>
        <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={FDSImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access Daily Tasks & Shared Living?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants who require assistance with daily living tasks
          </li>
          <li>
            Individuals living in group or shared homes seeking support with
            household and personal care
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Daily Tasks & Shared Living Services
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Assistance with personal care such as grooming, dressing, and
            hygiene
          </li>
          <li>Support with meal preparation and nutrition</li>
          <li>Help with cleaning, laundry, and household management</li>
          <li>Facilitating social connection and community involvement</li>
          <li>Coordination of support within shared living arrangements</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Respectful, person-centred care tailored to individual preferences
          </li>
          <li>
            Experienced staff skilled in both personal and household support
          </li>
          <li>
            Focus on fostering independence while encouraging community
            engagement
          </li>
          <li>Supportive environments that promote safety and belonging</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Helping you achieve balance between independence and support</li>
          <li>Creating nurturing shared living spaces that feel like home</li>
          <li>Encouraging skill development and personal growth</li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we aim to make everyday living easier and
          more fulfilling—whether you live independently or in shared
          accommodation.
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
