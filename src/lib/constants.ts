export const EMAIL_ADDRESS = "machulec.gerpol@gmail.com";
export const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || EMAIL_ADDRESS;

export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
export const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

export const TURNSTILE_SANDBOX_MODE_ENABLED = process.env.NODE_ENV === "development";

export const DAS_PROFITEAM = "das-profiteam-berlin.de";
export const TRAUM_BAD = "traum-bad-berlin.de";
