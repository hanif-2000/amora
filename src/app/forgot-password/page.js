"use client";

import { useState } from "react";
import Link from "next/link";
import AuthHeader from "@/components/AuthHeader";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      <div className="mx-auto w-full max-w-md px-6 py-14">
        <h1 className="text-center text-3xl font-bold text-slate-900">
          Forgot your password?
        </h1>
        <p className="mt-3 text-center text-sm text-slate-500">
          Don&apos;t worry, it happens to everyone 🙂
        </p>
        <p className="mt-1 text-center text-sm text-slate-500">
          Please enter your email address and we&apos;ll send you a link to reset your password.
        </p>

        {sent ? (
          <div className="mt-8 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
            Check your inbox — we&apos;ve sent a reset link to {email}.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600/20"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-pink-400 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:bg-pink-500 transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Reset password"}
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-sm text-slate-600">
          Remembered it?{" "}
          <Link href="/login" className="font-semibold text-pink-700 hover:text-pink-800">
            Log in
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}
