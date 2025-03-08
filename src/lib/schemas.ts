import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty({ message: "Bitte geben Sie Ihren Namen ein." }),
  company: z.string().nonempty({ message: "Bitte geben Sie Ihren Firmennamen ein." }),
  email: z
    .string()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  phone: z.string().nonempty({ message: "Bitte geben Sie Ihre Telefonnummer ein." }),
  message: z.string().nonempty({ message: "Bitte geben Sie eine Nachricht ein." }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
