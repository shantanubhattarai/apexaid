"use client";

import { useState } from "react";
import { Resend } from "resend";
import { ContactEmailTemplate } from "../contact-template";

const resend = new Resend("re_CPFXvto2_35CHSpogtBnJ8xmJmvFKsoVJ");

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formDataObject = Object.fromEntries(formData);
    const { fullName, email, phoneNumber, contactPreference, enquiry } =
      formDataObject;

    setLoading(true);

    try {
      setLoading(true);
      const result = await resend.emails.send({
        from: "noreply@apexaid.com.au",
        to: ["delivered@resend.dev"],
        // to: ["info@apexaid.com.au"],
        subject: "",
        react: ContactEmailTemplate({
          fullName: fullName as string,
          email: email as string,
          phoneNumber: phoneNumber as string,
          contactPreference: contactPreference as string,
          enquiry: enquiry as string,
        }),
      });

      if (result && result.data) {
        setSuccess("Email sent to Apex Aid Services.");
        setLoading(false);
      }
    } catch {
      setError("Could not send email.");
    }
    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Name<span className="text-red-700">*</span>
        </label>
        <input
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full"
          placeholder="Your name"
          required
          name="fullName"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Email<span className="text-red-700">*</span>
        </label>
        <input
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full"
          required
          placeholder="Your email address"
          name="email"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Phone Number<span className="text-red-700">*</span>
        </label>
        <input
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full"
          required
          placeholder="Your phone number"
          name="phoneNumber"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Contact Preference
        </label>
        <div className="flex flex-col md:flex-row lg:space-x-2 wrap">
          <div className="flex space-x-1 items-center">
            <input
              className="border border-zinc-300 bg-white"
              type="radio"
              id="callback"
              name="contactPreference"
            />
            <label htmlFor="contact-callback" className="text-zinc-800">
              Request for Callback
            </label>
          </div>
          <div className="flex space-x-1 items-center">
            <input
              className="border border-zinc-300 bg-white"
              type="radio"
              id="email"
              name="contactPreference"
            />
            <label htmlFor="contact-email" className="text-zinc-800">
              Request for email
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Enquiry
        </label>
        <textarea
          placeholder="Any additional information you would like to send"
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full resize-none"
          rows={5}
          name="enquiry"
        />
      </div>
      <button
        className="font-medium bg-green-700 ring ring-green-600 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-700 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide cursor-pointer transition-all"
        type="submit"
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {success && (
        <div className="px-3 py-1 bg-green-100 border-green-200 text-green-900">
          {success}
        </div>
      )}
      {error && (
        <div className="px-3 py-1 bg-red-100 border-red-200 text-red-900">
          {error}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
