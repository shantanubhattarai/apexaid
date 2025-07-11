import ContactDetails from "../contact/ContactDetails";
import ContactForm from "../contact/ContactForm";

const ContactSection = () => {
  return (
    <section className="mt-4 mb-8 px-0 lg:px-12 py-4 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-96 rounded-md lg:bg-zinc-50">
      <div className="text-white bg-green-900 bg-noise bg-blend-multiply rounded-md py-12 px-8">
        <h3 className="text-2xl lg:text-4xl mb-4 font-medium">Contact Us</h3>
        <ContactDetails />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
