import Image from "next/image";
import AssistiveTechImage from "@/public/images/AssistiveTech.jpeg";
import Assistive01TechImage from "@/public/images/AssistiveTech01.jpeg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function AssistiveTechnologyAndHomeModifications() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Assistive Technology & Home Modifications
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we recognise that the right technology and
          home modifications can transform daily living—enhancing independence,
          safety, and comfort for people with disabilities.
        </p>
        <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={AssistiveTechImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access Assistive Technology & Home Modifications?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants with approved funding for assistive products or
            home modifications
          </li>
          <li>
            Individuals seeking tailored solutions to support mobility,
            communication, or daily tasks
          </li>
        </ul>
      </section>
      <section className="pt-12 flex flex-col lg:flex-row justify-between">
        <div>
          <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
            Our Services
          </h3>
          <ul className="list-disc list-inside mt-2 text-zinc-800">
            <li>
              Assessment and advice on suitable assistive technologies and
              equipment
            </li>
            <li>
              Coordination and installation of home modifications to improve
              accessibility and safety
            </li>
            <li>
              Support with devices suchorith as mobility aids, communication
              tools, and adaptive equipment
            </li>
            <li>
              Collaboration with occupational therapists and other specialists
              to ensure personalised solutions
            </li>
            <li>
              Ongoing maintenance, training, and adjustments for optimal use
            </li>
          </ul>
          <div className="pt-12">
            <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
              Why Choose Apex Aid Health Care?
            </h3>
            <ul className="list-disc list-inside mt-2 text-zinc-800">
              <li>Expert guidance from experienced professionals</li>
              <li>
                Person-centred approach tailored to your unique needs and goals
              </li>
              <li>
                High-quality products and safe, reliable installation services
              </li>
              <li>
                Coordination with your NDIS plan and healthcare team for
                seamless support
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-96 lg:max-w-1/2 relative mt-6 lg:pt-0">
          <Image
            src={Assistive01TechImage}
            alt="Hospital to home"
            fill
            className="rounded-md object-contain object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Empowering you to live more independently and comfortably</li>
          <li>Enhancing safety and accessibility in your home environment</li>
          <li>Providing responsive and ongoing support to maximise benefits</li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we are dedicated to helping you access the
          technology and home modifications that make everyday life easier and
          more enjoyable.
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
