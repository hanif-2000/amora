"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Images, Phone, MessageCircle, BadgeCheck, MapPin } from "lucide-react";

export default function ListingCard({ listing, href }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((i) => (i - 1 + listing.photoCount) % listing.photoCount);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((i) => (i + 1) % listing.photoCount);
  };

  return (
    <div className="flex flex-col sm:flex-row rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:border-rose-300 transition-colors">
      <div className="relative h-56 sm:h-auto sm:w-64 shrink-0 bg-gradient-to-br from-rose-200 via-rose-100 to-violet-200">
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-4xl font-bold text-white/70">
            {listing.title.charAt(0)}
          </span>
        </div>

        {listing.badge && (
          <span className="absolute top-3 left-3 rounded bg-rose-600 px-2 py-1 text-xs font-bold text-white">
            {listing.badge}
          </span>
        )}

        {listing.topBadge && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded bg-sky-600 px-2 py-1 text-xs font-bold text-white">
            <BadgeCheck className="h-3.5 w-3.5" />
            {listing.topBadge}
          </span>
        )}

        {listing.photoCount > 1 && (
          <>
            <button
              type="button"
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-slate-700 hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-slate-700 hover:bg-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </>
        )}

        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
          <Images className="h-3.5 w-3.5" />
          {listing.photoCount}
        </span>
      </div>

      <div className="relative flex-1 p-5">
        <h3 className="text-lg font-bold pr-16">
          <Link href={href} className="text-rose-600 hover:text-rose-700 transition-colors">
            {listing.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{listing.description}</p>

        <div className="mt-4 space-y-1.5 text-sm">
          <p className="text-slate-700">
            <span className="font-bold">{listing.age} years</span>
          </p>
          <p className="flex items-center gap-1.5 text-slate-700">
            <MapPin className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
            <span className="font-bold">{listing.location}</span>
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 sm:absolute sm:bottom-5 sm:right-5 sm:mt-0">
          <a
            href={listing.phone}
            aria-label="Call"
            className="grid h-10 w-10 place-items-center rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-colors"
          >
            <Phone className="h-4.5 w-4.5" strokeWidth={2.5} />
          </a>
          <a
            href={listing.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            <MessageCircle className="h-4.5 w-4.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
