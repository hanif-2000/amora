"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Zap, Eye, EyeOff } from "lucide-react";
import AuthHeader from "@/components/AuthHeader";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";
  const isPostingAd = next.startsWith("/post-insert");

  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      router.push(next);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      <div className="mx-auto w-full max-w-md px-6 py-14">
        <h1 className="text-center text-3xl font-bold text-slate-900">
          Get into Amora!
        </h1>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-slate-500">
          <Zap className="h-4 w-4" strokeWidth={2.5} />
          {isPostingAd
            ? "Log in to publish and manage your ad."
            : "Log in to keep the conversation going."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email"
              className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-800">
              Password
            </label>
            <div className="relative mt-1.5">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full rounded-md border border-slate-300 px-4 py-3 pr-11 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-pink-700 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:bg-pink-800 transition-colors disabled:opacity-60"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>

          <Link
            href="/forgot-password"
            className="block text-center text-sm font-semibold text-pink-700 hover:text-pink-800"
          >
            Forgot your password?
          </Link>

          <div className="border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-600">Don&apos;t have an account?</p>
            <Link
              href="/signup"
              className="mt-4 block w-full rounded-md border-2 border-pink-700 py-3 text-sm font-bold uppercase tracking-wide text-pink-700 hover:bg-pink-50 transition-colors"
            >
              Sign up!
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
