"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "next-turnstile";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { ContactFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/actions";
import { TURNSTILE_SANDBOX_MODE_ENABLED, TURNSTILE_SITE_KEY } from "@/lib/constants";
import { contactFormSchema } from "@/lib/schemas";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { FileInput, UploadShad } from "../uploadshad";

const DUMMY_INITIAL_VALUES: ContactFormSchema = {
  company: "",
  name: "Test",
  phone: "+491234567890",
  email: "hans@mail.de",
  message: "Test Nachricht",
  attachments: [],
  token: "",
};

export function ContactForm({ fromEmail }: { fromEmail: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAttachmentsSection, setShowAttachmentsSection] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues:
      process.env.NODE_ENV === "development"
        ? DUMMY_INITIAL_VALUES
        : {
            company: "",
            name: "",
            phone: "",
            email: "",
            message: "",
            attachments: [],
            token: "",
          },
  });

  async function onSubmit(values: ContactFormSchema) {
    setIsSubmitting(true);
    try {
      await sendContactEmail(values, fromEmail);
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
    form.reset({ token: values.token, attachments: values.attachments });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          toast.promise(onSubmit(values), {
            loading: "Nachricht wird gesendet...",
            success: "Nachricht gesendet!",
            error: "Fehler beim Senden der Nachricht",
          }),
        )}
        className="grid grid-cols-1 items-start gap-2 sm:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firma (Optional)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2 mb-4">
          <Label className="cursor-pointer">
            Ich möchte Dateien anhängen
            <Switch
              checked={showAttachmentsSection}
              onCheckedChange={setShowAttachmentsSection}
            />
          </Label>
        </div>
        {showAttachmentsSection && (
          <FormField
            control={form.control}
            name="attachments"
            render={() => (
              <FormItem className="mb-6 flex w-full flex-col items-start sm:col-span-2">
                <FormControl className="w-full">
                  <UploadShad
                    handleChange={(files) => {
                      form.setValue("attachments", files); // store files to Form State
                    }}
                  >
                    <FileInput maxfiles={5} maxsize={5 * 1024 * 1024} />
                  </UploadShad>
                </FormControl>
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="token"
          render={() => (
            <FormItem className="sm:col-span-2">
              <FormControl>
                <Turnstile
                  siteKey={TURNSTILE_SITE_KEY}
                  onVerify={(token) => form.setValue("token", token)}
                  language="de"
                  onExpire={() => form.setValue("token", "")}
                  onError={(error) => toast.error(`Cloudflare Fehler: ${error}`)}
                  sandbox={TURNSTILE_SANDBOX_MODE_ENABLED}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="sm:col-span-2"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Senden
        </Button>
      </form>
    </Form>
  );
}
