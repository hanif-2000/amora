"use client";

import Link from "next/link";
import { ArrowUp, ChevronsUpDown, CreditCard } from "lucide-react";
import Logo from "./Logo";

const columns = [
  {
    title: "Legal",
    links: [
      { href: "#", label: "Terms of service" },
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Cookie policy" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Contact us" },
      { href: "#", label: "Help center" },
      { href: "#", label: "Blog" },
    ],
  },
  {
    title: "Security",
    links: [{ href: "#", label: "How to report an issue" }],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About us" },
      { href: "#", label: "Careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-slate-500 max-w-xs">
              Real connections, made simple. Meet people who are actually looking for the same thing you are.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-slate-900">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Boost your visibility</h3>
            <Link
              href="/login?next=/post-insert"
              className="mt-3 block w-full rounded-full bg-gradient-to-r from-rose-500 to-violet-600 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:opacity-90 transition-opacity sm:max-w-xs"
            >
              Post your ad
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Country</h3>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-between rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 sm:max-w-xs"
            >
              <span className="flex items-center gap-2">🇮🇳 India</span>
              <ChevronsUpDown className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <CreditCard className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Amora. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors sm:self-auto"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
