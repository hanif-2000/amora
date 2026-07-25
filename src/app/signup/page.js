"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Eye, EyeOff, Check } from "lucide-react";
import AuthHeader from "@/components/AuthHeader";
import Footer from "@/components/Footer";

const PASSWORD_RULES = [
  { key: "lower", label: "A lowercase letter", test: (v) => /[a-z]/.test(v) },
  { key: "upper", label: "An uppercase letter", test: (v) => /[A-Z]/.test(v) },
  { key: "number", label: "A number", test: (v) => /[0-9]/.test(v) },
  { key: "length", label: "Minimum 8 characters", test: (v) => v.length >= 8 },
];

function ToggleSwitch({ checked, onChange, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        aria-pressed={checked}
        className={`relative mt-0.5 inline-flex h-6 w-12 shrink-0 items-center rounded-full text-[10px] font-bold transition-colors ${
          checked ? "bg-pink-700 justify-start pl-2 text-white" : "bg-slate-300 justify-end pr-2 text-slate-600"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-6" : "translate-x-0.5"
          }`}
        />
        <span className="relative z-0">{checked ? "YES" : "NO"}</span>
      </button>
      <p className="text-sm text-slate-600">
        <span className="font-semibold text-slate-800">{title}</span>
        <br />
        {description}
      </p>
    </div>
  );
}

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const passwordValid = PASSWORD_RULES.every((rule) => rule.test(password));

  function handleSubmit(e) {
    e.preventDefault();
    if (!termsAgreed) return;
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      <div className="mx-auto w-full max-w-md px-6 py-14">
        <h1 className="text-center text-3xl font-bold text-slate-900">
          Join Amora
        </h1>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-slate-500">
          <Zap className="h-4 w-4" strokeWidth={2.5} />
          Discover all our news
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">Your password must have:</p>
              <ul className="mt-2 space-y-1.5">
                {PASSWORD_RULES.map((rule) => {
                  const ok = rule.test(password);
                  return (
                    <li
                      key={rule.key}
                      className={`flex items-center gap-2 text-xs ${
                        ok ? "text-emerald-600" : "text-slate-400"
                      }`}
                    >
                      <Check className={`h-3.5 w-3.5 ${ok ? "opacity-100" : "opacity-40"}`} strokeWidth={3} />
                      {rule.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-5">
            <ToggleSwitch
              checked={termsAgreed}
              onChange={setTermsAgreed}
              title="Terms, Conditions and Privacy Policy"
              description={
                <>
                  I have read the{" "}
                  <Link href="#" className="font-semibold text-pink-700 hover:text-pink-800">
                    Terms and Conditions
                  </Link>{" "}
                  of use and{" "}
                  <Link href="#" className="font-semibold text-pink-700 hover:text-pink-800">
                    Privacy Policy
                  </Link>{" "}
                  and I hereby authorise the processing of my personal data for the purpose of
                  providing this web service.
                </>
              }
            />
            <ToggleSwitch
              checked={marketingAgreed}
              onChange={setMarketingAgreed}
              title="Marketing Communications"
              description={
                <>
                  I authorise the processing by the Company of my contact details for marketing
                  and advertising purposes (
                  <Link href="#" className="font-semibold text-pink-700 hover:text-pink-800">
                    Privacy Policy
                  </Link>
                  ).
                </>
              }
            />
            <p className="text-xs text-slate-400">
              Consent is optional, for more information or to withdraw the consent see our{" "}
              <Link href="#" className="font-semibold text-pink-700 hover:text-pink-800">
                Privacy Policy
              </Link>
              . Any withdrawal will not affect the data processing carried out before that.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting || !passwordValid || !termsAgreed}
            className="w-full rounded-md bg-pink-700 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:bg-pink-800 transition-colors disabled:opacity-40"
          >
            {submitting ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-pink-700 hover:text-pink-800">
            Log in
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}
