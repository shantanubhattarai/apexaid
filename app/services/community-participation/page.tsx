import Image from "next/image";
import SCPImage from "@/public/images/SCP.jpg";
import SCP01Image from "@/public/images/SCP_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Participation | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function CommunityParticipation() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Community Participation
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we believe everyone deserves to feel
          connected, included, and valued in their community. Our Community
          Participation services are designed to support people with
          disabilities to build confidence, develop skills, and enjoy meaningful
          experiences — supporting you to live a richer, more fulfilling life.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={SCPImage}
            alt="Social and Community Participation"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is Community Participation?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Support to engage in community, social, or recreational activities
          </li>
          <li>
            Encourages friendships, social skills, and a sense of belonging
          </li>
          <li>
            Flexible and tailored to individual interests, routines, and
            cultural backgrounds
          </li>
          <li>
            Delivered one-on-one or in small groups, depending on your
            preference
          </li>
          <li>
            Supports building capacity and confidence to participate more
            independently over time
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who can Access Community Participation?
        </h3>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li>NDIS participants with community participation funding</li>
          <li>People wanting to build confidence and social networks</li>
          <li>
            Individuals with physical, cognitive, or psychosocial disabilities
          </li>
          <li>
            Participants working toward their goals of inclusion and community
            connection
          </li>
          <li>
            Our team can help you coordinate funding and plan suitable
            activities
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What Community Participants Supports can Include
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Social & Recreational Activities</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Visiting cafes, cinemas, or local events</li>
              <li>Attending sports or hobby groups</li>
              <li>Enjoying community festivals or markets</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Skill Development</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Learning to use public transport</li>
              <li>Managing money in the community</li>
              <li>Improving personal safety and communication</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Volunteering & Employment Preparation</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Exploring volunteer roles</li>
              <li>Gaining confidence for work pathways</li>
              <li>Building employability skills</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Cultural & Spiritual Engagement</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                Participating in religious, cultural, or traditional activities
              </li>
              <li>Staying connected to your background and identity</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Community Access</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Getting to appointments and community services</li>
              <li>Linking with other community groups and supports</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[640px] relative">
          <Image
            src={SCP01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Benefits of Community Participation
        </h3>
        <div className="text-zinc-800">
          <ul className="list-disc list-inside mt-2">
            <li>Builds confidence and social skills</li>
            <li>Strengthens sense of belonging and reduces isolation</li>
            <li>Encourages positive mental health and wellbeing</li>
            <li>Supports you to achieve personal goals</li>
            <li>Promotes independence and decision-making skills</li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Person-Centred</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                We work with you, your family, and your support coordinator to
                tailor activities to your goals and interests
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Culturally Safe & Inclusive</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>Respect for your culture, traditions, and identity</li>
              <li>Creating safe, welcoming environments</li>
            </ul>
          </div>
          <div>
            <p className="classNamefont-medium">
              Experienced, Supportive Staff
            </p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                Skilled in supporting social skills, confidence, and
                participation
              </li>
              <li>Responsive to your preferences and flexible to your needs</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Positive, Meaningful Outcomes</p>
            <ul className="list-disc list-inside ml-2 text-zinc-800">
              <li>
                We focus on helping you build skills, independence, and
                long-term connections
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Ready to Get Involved?
        </h3>
        <div className="text-zinc-800">
          <ul className="list-disc list-inside mt-2">
            <li>
              Contact us to explore how we can help you build connections and
              confidence
            </li>
            <li>
              Let us support your journey toward a more fulfilling, socially
              connected life
            </li>
            <li>Your community is waiting — let&apos;s explore it together</li>
          </ul>
        </div>
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
