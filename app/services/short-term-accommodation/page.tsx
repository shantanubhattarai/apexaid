import Image from "next/image";
import STAImage from "@/public/images/STA.jpg";
import STA01Image from "@/public/images/STA_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function STA() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Short-Term Accommodation (STA) & Respite
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we know how important it is for both
          participants and carers to have a break. Our Short-Term Accommodation
          (STA), also known as respite care, provides safe, supportive, and
          flexible temporary accommodation for people with disabilities — giving
          carers time to rest while participants continue to receive
          high-quality support in a welcoming environment.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is Short-Term Accommodation?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Temporary supported housing for people with disabilities</li>
          <li>Provides relief and peace of mind for families and carers</li>
          <li>
            Offers participants the chance to build confidence and experience
            new environments
          </li>
          <li>
            Available from overnight stays to several weeks, depending on NDIS
            funding and personal needs
          </li>
        </ul>
        <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={STAImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access STA?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Participants with an active NDIS plan including funding for STA
            (Core Supports)
          </li>
          <li>
            Individuals who need short-term accommodation due to a carer being
            unavailable
          </li>
          <li>
            Participants wanting to trial supported living before making
            longer-term decisions
          </li>
          <li>People recovering after hospitalisation or health setbacks</li>
          <li>
            Those needing a safe environment to develop skills or social
            connections
          </li>
          <li>
            Our team can help you confirm eligibility and navigate your NDIS
            options
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          How to access STA through the NDIS
        </h3>
        <p className="text-zinc-800">
          Accessing STA through the NDIS usually involves the following steps:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Review your NDIS Plan</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                Look under <i>Core Supports</i> or{" "}
                <i>Assistance with Daily Living</i>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium">
              Speak with your NDIS Planner or Support Coordinator
            </p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Discuss needs and explore adding STA funding</li>
              <li>Request a plan review if required</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Choose a Provider</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                Apex Aid Health Care is a registered NDIS provider with
                flexible, participant-focused STA services
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Booking and Coordination</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                Once approved, we will help you plan, book, and coordinate your
                STA stay
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What can STA be used for?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Providing carers with a break or time to rest</li>
          <li>Testing new living arrangements</li>
          <li>Supporting transition from hospital to home</li>
          <li>Building independence and daily living skills</li>
          <li>
            Participating in social, community, or recreational activities with
            extra support
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What to expect at Apex Aid Health Care Respite
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, our STA services are designed to be
          comfortable, safe, and empowering. Here&apos;s what you can expect:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Person-Centered Supports</p>
            <p>
              Services tailored to your goals, preferences, and daily routines
            </p>
          </div>
          <div>
            <p className="font-medium">Qualified and Compassionate Staff</p>
            <p>
              Respectful, culturally aware, and responsive care, available 24/7
              if needed
            </p>
          </div>
          <div>
            <p className="font-medium">
              Accessible and Comfortable Accommodation
            </p>
            <p>
              Designed to SDA standards for safety, comfort, and inclusivity
            </p>
          </div>
          <div>
            <p className="font-medium">
              Engaging Activities and Social Opportunities
            </p>
            <p>Encouraging community connections, wellbeing, and enjoyment</p>
          </div>
          <div>
            <p className="font-medium">Flexible Stay Durations</p>
            <p>
              From a single night to multiple weeks, based on your needs and
              funding
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[720px] relative">
          <Image
            src={STA01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          For more Independent Participants
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Increased independence and choice in daily routines</li>
          <li>
            Opportunities to practise life skills in a supported environment
          </li>
          <li>Freedom to socialise or enjoy quiet time in communal spaces</li>
          <li>Flexible supports that respect privacy while ensuring safety</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Holistic Approach
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>STA services connect seamlessly with our other supports</li>
          <li>
            Can be combined with <b>Supported Independent Living (SIL)</b> or
            <b> Specialist Disability Accommodation (SDA)</b>
          </li>
          <li>
            Designed to promote independence, wellbeing, and a sense of
            belonging
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Skilled, respectful, and supportive team</li>
          <li>Consistent, dependable, high-quality care</li>
          <li>Person-centred, flexible plans to match your goals</li>
          <li>Inclusive and culturally aware approach</li>
          <li>Commitment to empowering participants to live confidently</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Ready to Learn More?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Our team can help you explore your STA options, funding, and booking
          </li>
          <li>
            We are here to guide you through the NDIS process, making it simple
            and stress-free
          </li>
          <li>
            Experience short-term accommodation that builds your confidence and
            supports your independence
          </li>
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
