"use client";

import { useState } from "react";
import SearchModal from "./SearchModal";

export default function HeroSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-3 rounded-full bg-white px-6 py-4 shadow-xl text-left"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 shrink-0 text-slate-400">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <span className="flex-1 text-sm text-slate-400">Search by City, Category...</span>
      </button>

      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
