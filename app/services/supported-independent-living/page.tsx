import Image from "next/image";
import SILImage from "@/public/images/SIL.jpg";
// import SIL_01 from "@/public/images/SIL_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Independent Living | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function SIL() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Supported Independent Living
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Supported Independent Living (SIL)
          services are designed to empower individuals with disabilities to live
          confidently and independently while receiving the support they need.
          We provide tailored assistance in shared or individual living
          environments, guided by each participant&apos;s NDIS goals, routines,
          and preferences.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={SILImage}
            alt="sda"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What we offer
        </h3>
        <div className="text-zinc-800 flex flex-col gap-4">
          <div>
            <p className="font-medium">Daily Living Assistance</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>Personal Care</li>
              <li>Meal Preparation</li>
              <li>Cleaning, Laundry and Home Organization</li>
              <li>Delivered with respect for autonomy and routine</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">24/7 On-Site Support</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>Qualified, compassionate staff</li>
              <li>Round-the-clock help based on individual needs</li>
              <li>Ensuring safety, security, and peace of mind</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Skill Building and Development</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>Cooking, budgeting, shopping</li>
              <li>Appointment management</li>
              <li>Using public transport</li>
              <li>Boosting confidence and lifelong independence</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Medication and Health Management</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>Medication prompts</li>
              <li>Health monitoring</li>
              <li>Coordination with health professionals</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Person-Centred Planning</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>
                Collaborative planning with participants, families, and
                coordinators
              </li>
              <li>
                Individualised plans reflecting personal vision and life goals
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Safe, Supportive Homes</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>Welcoming, inclusive, and secure</li>
              <li>A sense of belonging and community</li>
              <li>Respecting privacy and independence</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Social and Community Engagement</p>
            <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
              <li>
                Participation in social, recreational, and community activities
              </li>
              <li>Building meaningful connections</li>
              <li>Reducing isolation</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Empowering Independence, Every Step of the Way
        </h3>
        <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
          <li>Everyone deserves the right to live life on their own terms</li>
          <li>Our mission: build pathways, not just provide support</li>
          <li>
            We support you to develop skills, manage routines, and connect with
            the community.
          </li>
          <li>
            Independence is about <i>having the right support</i> to do things
            your way.
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Shared Accommodation: Finding the Right Fit
        </h3>
        <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
          <li>
            Choosing shared accommodation is about safety, respect, and
            inclusion
          </li>
          <li>
            Housemates matched carefully by:
            <ul className="list-[circle] list-inside ml-8 text-zinc-800">
              <li>Lifestyle</li>
              <li>Personality</li>
              <li>Daily Routines</li>
              <li>Support Needs</li>
            </ul>
          </li>
          <li>Positive, harmonious shared living environments</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Holistic Supported Accommodation: Integrating SIL and SDA
        </h3>
        <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
          <li>Supported accommodation is more than just housing</li>
          <li>
            We combine <b>Specialist Disability Accommodation(SDA)</b> and
            <b> Supported Independent Living(SIL)</b>
          </li>
          <li>Flexible, personalized supports</li>
          <li>Designed to promote independence, wellbeing, and belonging</li>
          <li>Enabling choice and control</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access SIL?
        </h3>
        <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
          <li>NDIS participant with SIL funding</li>
          <li>Need support for daily personal tasks</li>
          <li>Working towards independent living</li>
          <li>
            Our team can help you navigate eligibility and NDIS proceesses
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Ready to Explore your SIL Options?
        </h3>
        <ul className="list-disc list-inside ml-1 mt-2 text-zinc-800">
          <li>
            Whether you are starting your journey or have funding in place, we
            are here to help
          </li>
          <li>
            Let&apos;s find a supported living arrangement that suits you and
            feels like home
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
