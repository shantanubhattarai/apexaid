import Image from "next/image";
import GroupImage from "@/public/images/GroupAndCentre.jpg";
import Group01Image from "@/public/images/Group.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group and Centre-Based Activities | Apex Aid Health Care",
  description: "Person-centered, high-quality NDIS Services",
};

export default function GroupActivities() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Group and Centre-Based Activities
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Group and Centre-Based Activities offer
          engaging, structured programs that promote social connection, skill
          development, and personal growth in a supportive, inclusive
          environment.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={GroupImage}
            alt="group activities"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who Can Access Group and Centre-Based Activities?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            NDIS participants looking to build social skills and community
            participation
          </li>
          <li>
            Individuals seeking opportunities for learning, creativity, and fun
            in a group setting
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Activities
        </h3>
        <div className="mt-2 flex flex-col xl:flex-row items-start gap-4">
          <div className="w-full xl:w-xl h-96 relative shrink-0">
            <Image
              src={Group01Image}
              alt="What do we offer?"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Creative Arts & Crafts</p>
              <p>
                Painting, pottery, drawing, and hands-on projects to express
                creativity
              </p>
            </div>

            <div>
              <p className="font-medium">Cooking Classes</p>
              <p>Learn meal preparation, nutrition, and kitchen independence</p>
            </div>

            <div>
              <p className="font-medium">Music & Dance Workshops</p>
              <p>
                Enjoy rhythm, movement, and musical expression in a lively
                setting
              </p>
            </div>

            <div>
              <p className="font-medium">Life Skills & Personal Development</p>
              <p>
                Group sessions on communication, budgeting, self-care, and goal
                setting
              </p>
            </div>

            <div>
              <p className="font-medium">Outdoor & Nature Activities</p>
              <p>
                Group walks, gardening, excursions to parks and nature reserves
              </p>
            </div>

            <div>
              <p className="font-medium">Social Games & Movie Nights</p>
              <p>
                Relaxed settings to socialise, laugh, and unwind with others
              </p>
            </div>

            <div>
              <p className="font-medium">Cultural & Community Events</p>
              <p>
                Celebrate holidays, festivals, and multicultural traditions
                together
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <div className="text-zinc-800">
          <ul className="list-disc list-inside mt-2">
            <li>
              Person-centred and tailored programs designed around your
              interests and goals
            </li>
            <li>
              Qualified facilitators who provide support, encouragement, and
              safety
            </li>
            <li>Safe, accessible venues that foster comfort and engagement</li>
            <li>
              Fun, inclusive experiences that build confidence and reduce
              isolation
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Commitment
        </h3>
        <ul className="list-disc list-inside mt-2">
          <li>Helping you develop friendships and social skills</li>
          <li>Encouraging new experiences and personal achievement</li>
          <li>Creating a welcoming space to grow, learn, and belong</li>
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
