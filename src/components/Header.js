"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import SearchModal from "./SearchModal";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
            <Link
              href="/login"
              aria-label="Log in"
              className="grid h-9 w-9 place-items-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" strokeLinecap="round" />
              </svg>
            </Link>
            <Link
              href="/login?next=/post-insert"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              POST YOUR AD
            </Link>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
