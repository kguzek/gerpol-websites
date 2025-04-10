"use server";

import type { Attachment } from "nodemailer/lib/mailer";
import { validateTurnstileToken } from "next-turnstile";
import nodemailer from "nodemailer";

import type { ContactFormSchema } from "./lib/schemas";
import {
  EMAIL_RECIPIENT,
  TURNSTILE_SANDBOX_MODE_ENABLED,
  TURNSTILE_SECRET_KEY,
} from "./lib/constants";

// Using the resend SDK causes the docker build to fail with a webpack error
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

const fileToBuffer = async (file: File) => Buffer.from(await file.arrayBuffer());

export async function sendContactEmail(
  { name, email, message, company, phone, token, attachments }: ContactFormSchema,
  from: string,
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

  const emailAttachments: Attachment[] = await Promise.all(
    attachments.map(async (file) => ({
      filename: file.name,
      type: file.type,
      content: await fileToBuffer(file),
    })),
  );

  const emailResult = await transporter.sendMail({
    from,
    to: [EMAIL_RECIPIENT],
    subject: `Neue Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`,
    text: `${message}\n\n-----------\nKundenname: ${name}\nKundenfirma: ${company || "<keine>"}\nKontakt-E-Mail: ${email}\nKontakttelefon: ${phone}`,
    replyTo: email,
    attachments: emailAttachments,
  });
  // if (emailResult.error) {
  //   throw emailResult.error;
  // }
  return emailResult;
}
