import Image from "next/image";
import SupportImage from "@/public/images/SupportCoordination.jpg";
import Support01Image from "@/public/images/SupportCoordination_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function SupportCoordination() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Support Coordination
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Support Coordination service assists you
          in understanding and implementing your NDIS plan, helping you connect
          with the right providers and maximise your funding.
        </p>
        <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={SupportImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access Support Coordination?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants with Support Coordination funding in their plan
          </li>
          <li>
            Individuals needing guidance to navigate the NDIS and access
            services
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Support Coordination Services Include
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Assistance understanding your NDIS plan and goals</li>
          <li>Connecting you with appropriate service providers</li>
          <li>Coordinating multiple supports to work together smoothly</li>
          <li>Building your capacity to manage supports independently</li>
          <li>Advocacy and problem-solving support</li>
        </ul>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[720px] relative">
          <Image
            src={Support01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Experienced coordinators with deep knowledge of the NDIS system
          </li>
          <li>Person-centred approach focused on your goals and preferences</li>
          <li>Clear communication and timely support</li>
          <li>Commitment to empowering your independence</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Providing reliable, flexible, and personalised coordination</li>
          <li>Supporting you to achieve your best outcomes</li>
          <li>Regular progress reviews and plan adjustments</li>
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
