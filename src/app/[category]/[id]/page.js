import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Phone, MessageCircle, Send, BadgeCheck, MapPin, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { findListingById, categoryLabel } from "@/data/listings";

export default async function ListingDetailPage({ params }) {
  const { category, id } = await params;
  const listing = findListingById(category, id);

  if (!listing) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
          <Link
            href={`/${category}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-rose-600 hover:text-rose-700"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            Back to search
          </Link>

          <p className="mt-4 text-sm text-slate-500">
            <Link href="/" className="text-rose-600 hover:text-rose-700">Amora</Link>
            {" / "}
            <Link href={`/${category}`} className="text-rose-600 hover:text-rose-700">
              {categoryLabel(category)}
            </Link>
            {" / "}
            {listing.name}
          </p>

          <p className="mt-3 text-xs font-semibold text-slate-500">
            {listing.date} - Ad ID: {listing.adId}
          </p>

          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold text-rose-600">{listing.name}</h1>
              {listing.topBadge && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded bg-sky-600 px-2 py-1 text-xs font-bold text-white">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {listing.topBadge}
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700">
                <User className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
                {listing.age} years
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700">
                <MapPin className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
                {listing.location}
              </span>
            </div>

            <h2 className="mt-4 text-lg font-bold text-slate-900">{listing.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{listing.description}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={listing.phone}
                className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-rose-700 transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {listing.phoneDisplay}
              </a>
              <a
                href={listing.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp
              </a>
              <a
                href={listing.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-sky-600 transition-colors"
              >
                <Send className="h-4 w-4" strokeWidth={2.5} />
                Telegram
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: listing.photoCount }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-rose-200 via-rose-100 to-violet-200 grid place-items-center"
              >
                <span className="text-3xl font-bold text-white/70">{listing.name.charAt(0)}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
