import Image from "next/image";
import HtoHImage from "@/public/images/HtoH.jpg";
import HtoH01Image from "@/public/images/HtoH_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function TransitionSupports() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Transition Supports
          </h2>
          <p className="text-zinc-200 leading-5">
            Life Stage & Hospital-to-Home
          </p>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Life Stage and Transition Supports assist
          participants navigating important changes—whether moving from youth to
          adulthood, starting a new living arrangement, or adjusting to new
          roles and responsibilities.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={HtoHImage}
            alt="hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access Life Stage & Transition Supports?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>NDIS participants experiencing significant life transitions</li>
          <li>
            Individuals needing guidance and support through changes in care,
            living, or community involvement
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Life Stage & Transition Services
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Tailored planning and coordination during key transitions</li>
          <li>Skill development to build confidence and independence</li>
          <li>Support with education, employment, and social integration</li>
          <li>Collaboration with families, schools, and other providers</li>
          <li>Emotional and practical assistance to manage change</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Person-centred approach respecting your goals and pace</li>
          <li>Experienced staff skilled in transition support and planning</li>
          <li>Strong focus on empowerment and resilience building</li>
          <li>Collaborative partnerships for seamless support</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our commitment
        </h3>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li>
            Supporting you through life&apos;s milestones with care and
            expertise
          </li>
          <li>Helping you achieve smooth, positive transitions</li>
          <li>
            Building a foundation for long-term wellbeing and independence
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[480px] relative">
          <Image
            src={HtoH01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Hospital to Home Support
        </h3>
        <p className="mt-2 text-zinc-800">
          At Apex Aid Health Care, our Hospital to Home service provides
          short-term support to ease your transition from hospital care back to
          your home environment, promoting recovery, safety, and independence.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access Hospital to Home Support?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants returning home from hospital or rehabilitation
          </li>
          <li>
            Individuals needing assistance with health management and daily
            tasks post-discharge
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Hospital to Home Services
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Medication management and health monitoring</li>
          <li>Personal care and assistance with daily living activities</li>
          <li>Support with mobility, therapy exercises, and equipment use</li>
          <li>Coordination with healthcare professionals and family</li>
          <li>Temporary support tailored to recovery needs</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Compassionate, qualified staff experienced in post-hospital care
          </li>
          <li>Flexible services adapting to your recovery journey</li>
          <li>Focus on safety, comfort, and dignity</li>
          <li>Clear communication with your health team</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Helping you regain independence and confidence at home</li>
          <li>Providing seamless, supportive care during recovery</li>
          <li>Ensuring your health and wellbeing are prioritised</li>
        </ul>
        <p className="mt-4 text-zinc-800">
          At Apex Aid Health Care, we are committed to supporting you through
          every transition—making change manageable and life better.
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
