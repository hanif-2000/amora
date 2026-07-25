import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-violet-600 text-white shadow-sm">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.42 1.2 6.9 4.1 5.06c2.31-1.46 5.05-.86 6.9 1.02L12 7.1l1-.02c1.85-1.88 4.59-2.48 6.9-1.02 2.9 1.84 3.24 5.36 1.53 7.88C18.72 16.65 12 21 12 21z" />
        </svg>
      </span>
      <span className="text-xl font-bold tracking-tight text-slate-900">
        Amora
      </span>
    </Link>
  );
}
