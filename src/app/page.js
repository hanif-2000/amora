import Link from "next/link";
import { Smile, Flower2, Mars, Transgender, Martini } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";

const CATEGORIES = [
  {
    name: "Call Girls",
    icon: Smile,
    color: "from-rose-500 to-pink-600",
    desc: "Call girls and escort ads. Independent girls and escorts waiting to satisfy your sexual fantasies. Escort and women seeking men W4M. Enjoy their erotic services",
    cities: ["Hyderabad", "Bangalore", "Delhi"],
  },
  {
    name: "Massages",
    icon: Flower2,
    color: "from-violet-500 to-indigo-600",
    desc: "Enjoy the best erotic massages ads. All sexual services. The hottest girls offer you a relaxing and hot massage. Full body massages",
    cities: ["Hyderabad", "Bangalore", "Delhi"],
  },
  {
    name: "Male Escorts",
    icon: Mars,
    color: "from-sky-500 to-blue-600",
    desc: "Male escort services, gigolos, gay escorts and call boys. Models and male adult services. Dating with male escorts",
    cities: ["Hyderabad", "Bangalore", "Delhi"],
  },
  {
    name: "Transsexual",
    icon: Transgender,
    color: "from-amber-500 to-orange-600",
    desc: "Transsexual dating. Discover the new sexual services with the sexiest transsexual in India. Shemale, ladyboy and TS escorts",
    cities: ["Hyderabad", "Bangalore", "Delhi"],
  },
  {
    name: "Adult Meetings",
    icon: Martini,
    color: "from-emerald-500 to-teal-600",
    desc: "Casual dating, find your true love or NSA. Chat with local singles, girls or boys for a meeting. Meet with them and find a dating partner",
    cities: ["Hyderabad", "Bangalore", "Delhi"],
  },
];

const stats = [
  { label: "Active members", value: "2.4M+" },
  { label: "Cities worldwide", value: "180+" },
  { label: "Average rating", value: "4.8 / 5" },
];

const steps = [
  {
    title: "Create your profile",
    desc: "Add a few photos and tell people what you're actually looking for. Takes less than 3 minutes.",
    emoji: "✨",
  },
  {
    title: "Discover your matches",
    desc: "Our matching gets smarter the more you use it, so the people you see actually fit what you want.",
    emoji: "🔍",
  },
  {
    title: "Start the conversation",
    desc: "Matched? Say hi. No games, no pressure — just a real conversation with someone who's interested too.",
    emoji: "💬",
  },
];

const features = [
  {
    title: "Verified profiles",
    desc: "Every profile goes through photo verification, so who you see is who you get.",
    emoji: "✅",
  },
  {
    title: "Smart matching",
    desc: "We learn your preferences over time to keep surfacing people you'll actually click with.",
    emoji: "🎯",
  },
  {
    title: "Privacy first",
    desc: "You control who sees your profile and your info is never sold or shared.",
    emoji: "🔒",
  },
  {
    title: "Built for real dating",
    desc: "No bots, no spam accounts — just people looking for genuine connections nearby.",
    emoji: "❤️",
  },
];

const stories = [
  {
    name: "Ritika & Arjun",
    quote:
      "We matched on Amora three months ago and now we can't imagine not talking every day. It just felt easy from the start.",
    initials: "RA",
  },
  {
    name: "Sana",
    quote:
      "I liked that profiles are actually verified. It made the whole thing feel a lot less exhausting than other apps.",
    initials: "S",
  },
  {
    name: "Vikram & Meher",
    quote:
      "Met up for coffee within a week of matching. A year later we just moved in together. Wild how that worked out.",
    initials: "VM",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-rose-900">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 pt-16 pb-10 sm:pt-20 sm:pb-12 text-center">
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Single? Taken? Curious?
              <br />
              Amora is for everyone.
            </h1>
          </div>

          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 pb-10 sm:pb-14">
            <HeroSearch />
          </div>
        </section>


        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 sm:pt-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Hot meetings in your city
            </h2>
            <p className="mt-3 text-slate-600">Find your favourite Escort in Amora</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <div
                    className={`relative h-44 bg-gradient-to-br ${cat.color} flex items-end p-5`}
                  >
                    <div className="flex items-center gap-2.5 text-white">
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                      <span className="text-xl font-bold">{cat.name}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-base text-slate-600">{cat.desc}</p>

                    <div className="mt-4 space-y-2.5">
                      {cat.cities.map((city) => (
                        <Link
                          key={city}
                          href="#"
                          className="block rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-500 hover:border-rose-300 transition-colors"
                        >
                          {cat.name}
                          <br />
                          <span className="font-bold text-rose-600">{city}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="stories" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Real stories from Amora</h2>
            <p className="mt-3 text-slate-600">A few of the people who found their match here.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <figure key={s.name} className="rounded-2xl border border-slate-200 p-6">
                <blockquote className="text-slate-700 text-sm leading-relaxed">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-violet-600 text-white text-sm font-bold">
                    {s.initials}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{s.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
          <div className="rounded-3xl bg-gradient-to-r from-rose-500 to-violet-600 px-8 py-14 text-center sm:px-16">
            <h2 className="text-3xl font-bold text-white">Ready to meet someone real?</h2>
            <p className="mt-3 text-rose-50 max-w-lg mx-auto">
              Join for free and start seeing people who are actually a good match for you.
            </p>
            <Link
              href="/signup"
              className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-600 shadow-sm hover:bg-rose-50 transition-colors"
            >
              Create your free account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
