"use server";

import { validateTurnstileToken } from "next-turnstile";
import nodemailer from "nodemailer";

// import { Resend } from "resend";
import type { ContactFormSchema } from "./lib/schemas";
import {
  EMAIL_RECIPIENT,
  TURNSTILE_SANDBOX_MODE_ENABLED,
  TURNSTILE_SECRET_KEY,
} from "./lib/constants";

// Using the resend SDK causes the docker build to fail with a webpack error
// const resend = new Resend(process.env.RESEND_API_KEY);

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

export async function sendContactEmail(
  { name, email, message, company, phone, token }: ContactFormSchema,
  from: string = "Das Profiteam <noreply@das-profiteam-berlin.de>",
) {
  if (!TURNSTILE_SANDBOX_MODE_ENABLED) {
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
  }

  const emailResult = await transporter.sendMail({
    from,
    to: [EMAIL_RECIPIENT],
    subject: `Neue Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`,
    text: `${message}\n\n-----------\nKundenname: ${name}\nKundenfirma: ${company || "<keine>"}\nKontakt-E-Mail: ${email}\nKontakttelefon: ${phone}`,
    replyTo: email,
  });
  // if (emailResult.error) {
  //   throw emailResult.error;
  // }
  return emailResult;
}
