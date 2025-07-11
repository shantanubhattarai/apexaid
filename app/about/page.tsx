import Banner from "@/components/common/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Apex Aid Services",
  description: "Care that Uplifts, Support that Endures",
};

const About = () => {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            About Us
          </h2>
        </div>
      </section>
      <section className="pt-12 lg:pt-24 pb-8">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Welcome to Apex Health Care
        </h3>
        <p className="text-green-800 mb-8 text-lg">
          Your trusted partner in person-centered disability support
        </p>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we deliver high-quality, person-centred
          disability supports that empower individuals to live safely,
          independently, and with dignity.
        </p>
        <p className="text-zinc-800 mt-1">
          As a registered NDIS provider, we proudly serve people of all
          backgrounds and abilities, including those with complex needs.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who We Are
        </h3>
        <p className="text-zinc-800">
          Our skilled team of support workers, nurses, allied health
          professionals, and specialist carers is dedicated to raising the
          standard of disability care. We provide tailored, reliable supports
          that make a genuine difference.
        </p>
        <p className="text-zinc-800 mt-2">Our services include:</p>
        <ul className="py-1 text-zinc-800 list-disc list-inside">
          <li>Supported Independent Living (SIL)</li>
          <li>Specialist Disability Accommodation (SDA)</li>
          <li>Short-Term Accommodation (STA) / Respite</li>
          <li>Community Nursing Care (including High-Intensity)</li>
          <li>Innovative Community Participation</li>
          <li>Group & Centre-Based Activities</li>
          <li>Assist Personal Activities (Standard & High)</li>
          <li>Complex Behavioural & Forensic Supports</li>
          <li>Transition Programs (Hospital to Home, Youth to Adult Care)</li>
          <li>Development of Life Skills</li>
          <li>Travel & Transport Assistance</li>
          <li>Assistive Technology</li>
          <li>Personal Mobility Equipment</li>
          <li>Home Modifications</li>
          <li>Household Equipment & Assistive Products</li>
          <li>Support Co-ordination</li>
          <li>Palliative Care</li>
        </ul>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Approach
        </h3>
        <p className="text-zinc-800">
          We focus on individual needs, working collaboratively with
          participants, families, and professionals to deliver respectful,
          effective supports.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Key Principles
        </h3>
        <ul className="py-1 text-zinc-800 list-disc list-inside">
          <li>Individualized Plans</li>
          <li>Culturally Safe, Trauma-Informed Care</li>
          <li>24/7 Flexible Support Options</li>
          <li>Genuine Community Engagement</li>
          <li>Outcome-Driven Services</li>
        </ul>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Mission
        </h3>
        <p className="text-zinc-800">
          To empower people with disabilities through personal, reliable, and
          respectful care.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Vision
        </h3>
        <p className="text-zinc-800">
          To be a trusted leader in compassionate, person-centered disability
          and community health services.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Values
        </h3>
        <ul className="text-zinc-800 list-decimal list-inside">
          <li>
            <span className="font-medium">Dignity & Respect - </span>Honouring
            every person&apos;s worth and choice
          </li>
          <li>
            <span className="font-medium">Empowerment - </span>Building
            confidence and independence
          </li>
          <li>
            <span className="font-medium">Inclusion - </span>Creating true
            belonging
          </li>
          <li>
            <span className="font-medium">Integrity - </span>Acting with honesty
            and accountability
          </li>
          <li>
            <span className="font-medium">Person-centred - </span>
            Seeing the person first, not the disability
          </li>
        </ul>
      </section>
      <section className="py-16">
        {/* <h3 className="text-2xl lg:text-4xl font-medium text-green-700 text-center mb-6">
          People Who Care
        </h3> */}
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          People Who Care
        </h3>
        <p className="text-zinc-800">
          Our diverse and qualified team is passionate about making a difference
          in the lives of the people we support. From experienced disability
          support workers to dedicated coordinators and allied health
          professionals, every member of Apex Aid Health Care shares a
          commitment to your safety, wellbeing, and empowerment.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-8">
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">John Doe</p>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Mary Sue</p>
              <p>General Manager</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Lisa Lee</p>
              <p>CTO</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Rajesh</p>
              <p>Engineering Manager</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Shannon Saint Raven</p>
              <p>Human Resources Manager</p>
            </div>
          </div>
        </div> */}
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Your Registered NDIS Provider
        </h3>
        <p className="text-zinc-800">
          We are a fully registered NDIS provider, meeting all required quality
          and safeguarding standards. Our team is trained to deliver safe,
          evidence-based supports that comply with the NDIS Practice Standards,
          giving you peace of mind.
        </p>
        <p className="mt-2 text-zinc-800">
          <span className="mr-2">Registered NDIS Provider ID:</span>
          <span>4-KQIEHWQ</span>
        </p>
      </section>
      <section className="pt-16 pb-4">
        <Banner
          mainText="Want to learn more about our supports or how we can help you?"
          urlText="Explore our Services"
          url="/services"
        />
      </section>
    </article>
  );
};

export default About;
