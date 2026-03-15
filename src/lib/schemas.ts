import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty({ message: "Bitte geben Sie Ihren Namen ein." }),
  company: z.string(),
  email: z
    .string()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  phone: z
    .string()
    .nonempty({ message: "Bitte geben Sie Ihre Telefonnummer ein." })
    .min(5, { message: "Bitte geben Sie eine gültige Telefonnummer ein." })
    .max(20, { message: "Bitte geben Sie eine gültige Telefonnummer ein." })
    .refine((val) => /^\+?\d+(?:[\s-]?\d)*$/.test(val), {
      message: "Bitte geben Sie eine gültige Telefonnummer ein.",
    }),
  message: z.string().nonempty({ message: "Bitte geben Sie eine Nachricht ein." }),
  attachments: z.array(z.instanceof(File)),
  token: z.string().nonempty({ message: "Bitte mit Cloudflare verifizieren." }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
