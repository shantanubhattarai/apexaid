import Alert from "@/components/contact/Alert";
import ReferralForm from "@/components/referral/ReferralForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Referral | Apex Aid Health Care",
  description: "Easy and simple referral to Apex Aid Health Care",
};

const Referral = () => {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Make a Referral
          </h2>
          <p className="text-zinc-200 leading-5">
            Making a referral to Apex Aid Health Care is easy and simple.
            <br />
            Complete the below form and a friendly team member will get in
            contact with you.
          </p>
        </div>
      </section>
      <section className="pt-24 py-12 lg:max-w-2xl">
        <Suspense fallback={null}>
          <Alert content="Your referral request has been sent." />
        </Suspense>
        <ReferralForm />
      </section>
    </article>
  );
};

export default Referral;
