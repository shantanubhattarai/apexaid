interface ReferralTemplateProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  contactPreference?: string;
  enquiry: string;
}

export function ReferralEmailTemplate({
  fullName,
  email,
  phoneNumber,
  contactPreference,
  enquiry,
}: ReferralTemplateProps) {
  return (
    <div>
      <p>
        <b>Enquiry from:</b>
        {fullName}
      </p>
      <p>
        <b>Email:</b>
        {email}
      </p>
      <p>
        <b>Phone No.</b>
        {phoneNumber}
      </p>
      <p>
        <b>Request for:</b>
        {contactPreference}
      </p>
      <p>
        <b>Enquiry:</b>
      </p>
      <p>{enquiry}</p>
    </div>
  );
}
