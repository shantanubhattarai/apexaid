"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const interestedServices = [
  {
    value: "Supported Independent Living (SIL)",
    label: "Supported Independent Living (SIL)",
  },
  {
    value: "Specialist Disability Accommodation (SDA)",
    label: "Specialist Disability Accommodation (SDA)",
  },
  {
    value: "Short-Term Accommodation (STA) / Respite",
    label: "Short-Term Accommodation (STA) / Respite",
  },
  {
    value: "Community Nursing Care (including High-Intensity)",
    label: "Community Nursing Care (including High-Intensity)",
  },
  {
    value: "Community Participation",
    label: "Community Participation",
  },
  {
    value: "Group & Centre-Based Activities",
    label: "Group & Centre-Based Activities",
  },
  {
    value: "Assistance with Personal Activities (Standard & High)",
    label: "Assistance with Personal Activities (Standard & High)",
  },
  {
    value: "Complex Behavioural & Forensic Supports",
    label: "Complex Behavioural & Forensic Supports",
  },
  {
    value: "Transition Programs (Hospital to Home, Youth to Adult Care)",
    label: "Transition Programs (Hospital to Home, Youth to Adult Care)",
  },
  {
    value: "Development of Life Skills",
    label: "Development of Life Skills",
  },
  {
    value: "Travel & Transport Assistance",
    label: "Travel & Transport Assistance",
  },
  {
    value: "Assistive Technology",
    label: "Assistive Technology",
  },
  {
    value: "Personal Mobility Equipment",
    label: "Personal Mobility Equipment",
  },
  {
    value: "Home Modifications",
    label: "Home Modifications",
  },
  {
    value: "Household Equipment & Assistive Products",
    label: "Household Equipment & Assistive Products",
  },
  {
    value: "Support Co-ordination",
    label: "Support Co-ordination",
  },
  {
    value: "Palliative Care",
    label: "Palliative Care",
  },
  {
    value: "Innovative Community Participation",
    label: "Innovative Community Participation",
  },
];

const ReferralForm = () => {
  const [date, setDate] = useState<Date>();
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [gender, setGender] = useState<string>("");
  const [heard, setHeard] = useState<string>("");
  const [contactWho, setContactWho] = useState<string>("");
  const [pickedServices, setPickedServices] = useState<string[]>([]);

  return (
    <form
      className="flex flex-col gap-4"
      target="_blank"
      action={"https://formsubmit.co/info@apexaid.com.au"}
      method="post"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_subject" value="New Referral Request" />
      <input
        type="hidden"
        name="_next"
        value="https://apexaid.com.au/referral?status=success"
      />
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="border border-zinc-300 rounded-sm p-2 flex items-center justify-start gap-2 w-full">
                <CalendarIcon size={16} className="text-zinc-500" />
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className="text-zinc-500">Pick a date</span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <section className="flex flex-col gap-4 mt-4">
        <input
          type="hidden"
          name="date"
          value={(date && format(date, "PPP")) || ""}
          readOnly
        />
        <h4 className="border-b pb-2">Referrer Details</h4>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Full Name<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Referrer name"
            name="referrer-name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Organization<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Referrer organization"
            name="referrer-organization"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Phone Number<span className="text-red-700">*</span>
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Referrer phone number"
              required
              name="referrer-phone"
            />
          </div>
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Email<span className="text-red-700">*</span>
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Referrer email address"
              required
              name="referrer-email"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            What services are you interested in?
          </label>
          <input
            type="hidden"
            name="Interested Services"
            value={pickedServices.join(",") || ""}
            readOnly
          />
          <ul>
            {interestedServices.map((item) => (
              <li
                key={`interested-service-${item.value}`}
                className="flex items-start md:items-center space-x-2"
              >
                <input
                  type="checkbox"
                  id={`check-${item.value}`}
                  className="mt-1 md:mt-0"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setPickedServices((prev) => [...prev, item.value]);
                    } else {
                      setPickedServices((prev) =>
                        prev.filter((service) => service === item.value)
                      );
                    }
                  }}
                />
                <label
                  htmlFor={`check-${item.value}`}
                  className="text-zinc-800"
                >
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <h4 className="border-b pb-2">Participant Details</h4>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Full Name<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Participant name"
            name="participant-name"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Date of Birth<span className="text-red-700">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="border border-zinc-300 rounded-sm p-2 flex items-center justify-start gap-2 w-full">
                  <CalendarIcon size={16} className="text-zinc-500" />
                  {dateOfBirth ? (
                    format(dateOfBirth, "PPP")
                  ) : (
                    <span className="text-zinc-500">Pick a date</span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={setDateOfBirth}
                />
              </PopoverContent>
            </Popover>
            <input
              type="hidden"
              name="dateOfBirth"
              value={(dateOfBirth && format(dateOfBirth, "PPP")) || ""}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Gender
            </label>
            <div className="flex space-x-2 wrap">
              <input
                type="hidden"
                name="Participant Gender"
                value={gender || ""}
                readOnly
              />
              <div className="flex space-x-1 items-center">
                <input
                  className="border border-zinc-300"
                  type="radio"
                  id="gender-male"
                  onChange={(e) => e.target.value === "on" && setGender("Male")}
                />
                <label htmlFor="gender-male" className="text-zinc-800">
                  Male
                </label>
              </div>
              <div className="flex space-x-1 items-center">
                <input
                  className="border border-zinc-300"
                  type="radio"
                  id="gender-female"
                  onChange={(e) =>
                    e.target.value === "on" && setGender("Female")
                  }
                />
                <label htmlFor="gender-female" className="text-zinc-800">
                  Female
                </label>
              </div>
              <div className="flex space-x-1 items-center grow">
                <input
                  className="border border-zinc-300"
                  type="radio"
                  id="gender-unanswered"
                  onChange={(e) =>
                    e.target.value === "on" && setGender("Prefer Not to Say")
                  }
                />
                <label htmlFor="gender-unanswered" className="text-zinc-800">
                  Prefer not to say
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Phone Number
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Participant phone number"
              name="participant-phone"
            />
          </div>
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Email
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Participant email address"
              name="participant-email"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Address
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Participant address"
            name="participant-address"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Reason for referral<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="What is the reason for referral?"
            required
            name="reason"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            What is the disability?<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="What is the disability?"
            required
            name="disability"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Where did you hear about us?
          </label>
          <div className="flex flex-col md:flex-row space-x-2 wrap">
            <input
              type="hidden"
              name="Heard about us"
              value={heard || ""}
              readOnly
            />
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-google"
                onChange={(e) => e.target.value === "on" && setHeard("Google")}
              />
              <label htmlFor="heard-google" className="text-zinc-800">
                Google
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-facebook"
                onChange={(e) =>
                  e.target.value === "on" && setHeard("Facebook")
                }
              />
              <label htmlFor="heard-facebook" className="text-zinc-800">
                Facebook
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-instagram"
                name="heard"
                onChange={(e) =>
                  e.target.value === "on" && setHeard("Instagram")
                }
              />
              <label htmlFor="heard-instagram" className="text-zinc-800">
                Instagram
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-colleague"
                name="heard"
                onChange={(e) =>
                  e.target.value === "on" && setHeard("Colleague or Friend")
                }
              />
              <label htmlFor="heard-colleague" className="text-zinc-800">
                Colleague or Friend
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Enquiry<span className="text-red-700">*</span>
          </label>
          <textarea
            placeholder="Any additional information you would like to send"
            className="border border-zinc-300 rounded-sm p-2 block w-full resize-none"
            rows={5}
            name="enquiry"
            required
          />
        </div>
        <div>
          <input
            type="hidden"
            name="Contact Prefernce"
            value={contactWho || ""}
            readOnly
          />
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Who should we contact?
          </label>
          <div className="flex flex-col md:flex-row space-x-2 wrap">
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="contact-participant"
                onChange={(e) =>
                  e.target.value === "on" &&
                  setContactWho("Contact participant directly")
                }
              />
              <label htmlFor="contact-participant" className="text-zinc-800">
                Contact participant directly
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="contact-referrer"
                onChange={(e) =>
                  e.target.value === "on" && setContactWho("Contact referrer")
                }
              />
              <label htmlFor="contact-referrer" className="text-zinc-800">
                Contact referrer
              </label>
            </div>
          </div>
        </div>
      </section>
      <button
        className="font-medium bg-green-700 ring ring-green-600 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-700 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide cursor-pointer transition-all"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ReferralForm;
