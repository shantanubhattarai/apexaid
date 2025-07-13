import Alert from "@/components/contact/Alert";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact | Apex Aid Health Care",
  description: "Reach out to Apex Aid Health Care anytime",
};

const Contact = () => {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Contact Apex Aid Health Care
          </h2>
          <p className="text-zinc-200 leading-5">
            We are here to help — reach out anytime.
          </p>
        </div>
      </section>
      <section className="pt-24 py-12">
        <div className="max-w-xl">
          <Suspense fallback={null}>
            <Alert content="Your enquiry has been sent." />
          </Suspense>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <aside>
            <div className="bg-teal-50 text-teal-950 rounded-md py-8 px-6 w-full md:w-fit h-fit md:mt-4">
              <ContactDetails />
            </div>
          </aside>
        </div>
      </section>
      <section className="py-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.2778288593254!2d130.85721117734101!3d-12.4312001878368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc093e0f830ab83%3A0xe0d43c3ec7551e6a!2sCharlton%20Ct%2C%20Woolner%20NT%200820%2C%20Australia!5e0!3m2!1sen!2snp!4v1746720319233!5m2!1sen!2snp"
          className="border-0 w-full h-96 rounded-sm"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </article>
  );
};

export default Contact;
