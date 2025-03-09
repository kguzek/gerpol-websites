"use server";

import { validateTurnstileToken } from "next-turnstile";

// import { Resend } from "resend";
import type { ContactFormSchema } from "./lib/schemas";
import { EMAIL_RECIPIENT, TURNSTILE_SECRET_KEY } from "./lib/constants";

// const resend = new Resend(process.env.RESEND_API_KEY);

const resend = {
  emails: {
    send: (values: {
      from: string;
      to: string[];
      subject: string;
      text: string;
      replyTo: string;
    }) => {
      console.log("Sending email", values);
      return { data: null, error: new Error("not implemented") };
    },
  },
};

export async function sendContactEmail({
  name,
  email,
  message,
  company,
  phone,
  token,
}: ContactFormSchema) {
  if (!TURNSTILE_SECRET_KEY) {
    throw new Error("TURNSTILE_SECRET_KEY is not set");
  }
  const verifyResult = await validateTurnstileToken({
    token,
    secretKey: TURNSTILE_SECRET_KEY,
  });

  if (!verifyResult.success) {
    throw new Error(
      `Token validation failed: ${verifyResult.error_codes?.join(", ") ?? "Unknown error"}`,
    );
  }

  const emailResult = await resend.emails.send({
    from: "Das Profiteam <noreply@das-profiteam-berlin.de>",
    to: [EMAIL_RECIPIENT],
    subject: `Neue Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`,
    text: `${message}\n\n-----------\nKundenname: ${name}\nKundenfirma: ${company || "<keine>"}\nKontakt-E-Mail: ${email}\nKontakttelefon: ${phone}`,
    replyTo: email,
  });
  if (emailResult.error) {
    throw emailResult.error;
  }
  return emailResult.data;
}
