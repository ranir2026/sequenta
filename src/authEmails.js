// Password reset needs Supabase to send email to anyone who signs up, which takes a custom email
// provider (Authentication, Emails, SMTP Settings). sequenta sends through Resend, so it's on. On a
// project without one, VITE_PASSWORD_RESET=off in .env.local hides "Forgot password?" and everything
// that points to it.
export function passwordResetEnabled() {
  return import.meta.env.VITE_PASSWORD_RESET !== "off";
}
