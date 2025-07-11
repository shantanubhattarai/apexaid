// import Image from "next/image";
// import STAImage from "@/public/images/PalliativeCare.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function PalliativeCare() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Innovative Community Participation
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is Innovative Community Participation?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            A capacity-building program designed to boost social participation
            and independence
          </li>
          <li>
            Uses non-traditional, flexible, and creative activities to help
            people engage with their community
          </li>
          <li>
            Supports personal development, confidence, and skills for greater
            autonomy
          </li>
        </ul>
        {/* <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={STAImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div> */}
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access Innovative Community Participation?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants with funding under Capacity Building supports
          </li>
          <li>
            Individuals seeking new pathways to community participation and
            personal growth
          </li>
          <li>
            Participants who want to try alternative or creative skill-building
            activities
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Innovative Community Participant Services
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Mentoring & Coaching</p>
            <p className="text-zinc-800">
              One-on-one or small group mentoring to develop social skills, life
              skills, and personal confidence
            </p>
          </div>
          <div>
            <p className="font-medium">Skill-Building Workshops</p>
            <p className="text-zinc-800">
              Programs focusing on communication, problem-solving, teamwork, or
              leadership
            </p>
          </div>
          <div>
            <p className="font-medium">Volunteering & Community Projects</p>
            <p className="text-zinc-800">
              Opportunities to contribute to meaningful causes and build a sense
              of purpose
            </p>
          </div>
          <div>
            <p className="font-medium">Employment Readiness</p>
            <p className="text-zinc-800">
              Activities to build pre-employment skills, confidence, and
              motivation
            </p>
          </div>
          <div>
            <p className="font-medium">Creative & Cultural Programs</p>
            <p className="text-zinc-800">
              Engaging workshops in arts, music, storytelling, cultural
              exchange, and more
            </p>
          </div>
          <div>
            <p className="font-medium">Mainstream Community Linkages</p>
            <p className="text-zinc-800">
              Helping participants access and connect with local groups, clubs,
              and services
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Person-centred and flexible approach tailored to your interests and
            goals
          </li>
          <li>Highly skilled and culturally sensitive staff</li>
          <li>Proven focus on capacity-building outcomes</li>
          <li>Safe, inclusive, and empowering environments</li>
          <li>
            Collaborative planning with participants, families, and support
            coordinators
          </li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we see every person as capable of living a
          fulfilling life with the right opportunities and support. Through
          innovative community participation, we are here to open new doors and
          help you build the skills and confidence to thrive.
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
