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
            Palliative Care
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we believe everyone deserves dignity,
          comfort, and compassionate support during advanced illness or
          end-of-life stages. Our palliative care services are designed to
          enhance quality of life, ease symptoms, and provide respectful,
          holistic care in familiar surroundings — whether at home or in
          supported accommodation.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What is Palliative Care?
        </h3>
        <p className="mt-2 text-zinc-800">
          Palliative care focuses on relieving pain, managing symptoms, and
          addressing the physical, emotional, cultural, and spiritual needs of
          people with serious or life-limiting conditions. It also supports
          family members and carers through education, respite, and emotional
          guidance.
        </p>
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
          Who can Access Palliative Care?
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
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our Palliative Care Services
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Pain and Symptom Management</p>
            <p className="text-zinc-800">
              Skilled nursing support to manage pain, nausea, breathlessness,
              and other symptoms to ensure comfort
            </p>
          </div>
          <div>
            <p className="font-medium">Personal Care Assistance</p>
            <p className="text-zinc-800">
              Support with bathing, dressing, mobility, hygiene, and other
              personal tasks in a gentle, respectful manner
            </p>
          </div>
          <div>
            <p className="font-medium">Medication Support</p>
            <p className="text-zinc-800">
              Medication administration, monitoring, and coordination with
              medical teams to ensure safe, effective treatment
            </p>
          </div>
          <div>
            <p className="font-medium">Psychosocial and Emotional Support</p>
            <p className="text-zinc-800">
              Compassionate care addressing anxiety, grief, and emotional
              wellbeing for both participants and their loved ones
            </p>
          </div>
          <div>
            <p className="font-medium">Family and Carer Support</p>
            <p className="text-zinc-800">
              Guidance, respite, and practical advice to help family members and
              carers feel supported during difficult times
            </p>
          </div>
          <div>
            <p className="font-medium">Spiritual and Cultural Respect</p>
            <p className="text-zinc-800">
              Care delivered with deep respect for individual beliefs,
              traditions, and cultural practices
            </p>
          </div>
          <div>
            <p className="font-medium">
              Coordination with Health Professionals
            </p>
            <p className="text-zinc-800">
              Seamless collaboration with GPs, palliative care specialists,
              allied health providers, and hospitals to ensure consistent,
              integrated care
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Why Choose Apex Aid Health Care?
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Qualified, experienced nurses and support staff</li>
          <li>Sensitive, person-centred approach to dignity and comfort</li>
          <li>Flexible care in the participant&apos;s preferred setting</li>
          <li>24/7 responsive support available as needed</li>
          <li>
            Strong collaboration with families and other service providers
          </li>
        </ul>
        <p className="text-zinc-800 mt-4">
          At Apex Aid Health Care, we honour each person&apos;s journey with
          compassion, empathy, and respect — helping people live as fully and
          comfortably as possible during every stage of life.
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
