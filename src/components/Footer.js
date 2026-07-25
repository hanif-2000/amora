import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "#", label: "About us" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Help center" },
      { href: "#", label: "Safety tips" },
      { href: "#", label: "Contact us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Terms of service" },
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Cookie policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-3 text-sm text-slate-500 max-w-xs">
              Real connections, made simple. Meet people who are actually looking for the same thing you are.
            </p>
          </div>

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

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Amora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
