import Image from "next/image";
import TransportImage from "@/public/images/Transport.jpg";
import Transport01Image from "@/public/images/Transport_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function TransportAssistance() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Travel & Transport Assistance
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we recognise how vital accessible, safe
          transport is to staying connected with your community, attending
          appointments, and living a full life. Our Transport Assistance
          services support people with disabilities to travel confidently,
          safely, and on time — whether for daily needs or special occasions.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={TransportImage}
            alt="transport assistance"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is Transport Assistance?
        </h3>
        <div className="text-zinc-800">
          <p>Transport Assistance helps NDIS participants travel to:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Medical and allied health appointments</li>
            <li>Day programs, schools, or training facilities</li>
            <li>Social, recreational, or cultural activities</li>
            <li>Community events and personal errands</li>
            <li>Employment, volunteer work, or job interviews</li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access Transport Assistance?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants requiring support to access medical, educational,
            or community activities
          </li>
          <li>
            Individuals with limited or no access to private or public transport
          </li>
          <li>
            Those who need assistance with travel planning or mobility support
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Funding for Transport Assistance
        </h3>
        <ul className="list-disc list-inside mt-2">
          <li className="font-medium">Core Supports - Transport Allowance</li>
          <li className="font-medium">
            Support Worker Time - Assistance with Community Access (including
            transport)
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          How We Support You
        </h3>
        <p className="text-zinc-800">
          We customize transport to your needs and preferences through:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Door-to-Door Pickups</p>
            <p>Safe, timely transport from home to destination and back</p>
          </div>
          <div>
            <p className="font-medium">Supported Travel</p>
            <p>
              Qualified support workers accompany you to provide assistance,
              reassurance, or physical support as needed
            </p>
          </div>
          <div>
            <p className="font-medium">Special Vehicle Access</p>
            <p>
              Accessible vehicles for wheelchair users or those with mobility
              aids
            </p>
          </div>
          <div>
            <p className="font-medium">Public Transport Training</p>
            <p>
              Building skills and confidence to use buses, trains, and trams
              independently
            </p>
          </div>
          <div>
            <p className="font-medium">Flexible Scheduling</p>
            <p>
              Regular or one-off trips, short or longer journeys — all tailored
              to your schedule
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="w-full h-96 lg:h-[720px] relative">
          <Image
            src={Transport01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid for Transport?
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Reliable, Safe Vehicles</p>
            <p>Our fleet meets strict safety and accessibility standards</p>
          </div>
          <div>
            <p className="font-medium">Experienced, Trustworthy Staff</p>
            <p>
              All drivers and support workers hold valid licenses, NDIS Worker
              Screening, and First Aid certification
            </p>
          </div>
          <div>
            <p className="font-medium">Empowering Independence</p>
            <p>
              We focus on skill-building to increase your confidence in
              travelling independently
            </p>
          </div>
          <div>
            <p className="font-medium">Respectful and Inclusive Service</p>
            <p>
              Prioritising dignity, punctuality, and clear communication on
              every journey
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Making Every Journey Matter
        </h3>
        <p className="mt-2 text-zinc-800">
          Transport is more than moving from point A to B — it&apos;s about
          freedom, choice, and connection. Whether you&apos;re heading to an
          appointment, a class, or meeting friends, Apex Aid Health Care ensures
          you travel safely and with support designed around you.
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
