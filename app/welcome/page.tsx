import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    href: "/welcome/founders-vision",
    title: "Founders' Vision",
    body: "Understand the Why behind August and the model we built together.",
  },
  {
    href: "/welcome/the-august-ethos",
    title: "The August Ethos",
    body: "Dive into the August ethos and what makes our community so special.",
  },
  {
    href: "/welcome/our-values",
    title: "Our Values",
    body: "The principles that guide how we work, lead, and show up every day.",
  },
  {
    href: "/wiki/new-starters",
    title: "Onboarding",
    body: "Your onboarding timeline, training, and check-ins for new starters.",
  },
];

export default function WelcomePage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Welcome
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Get to know August — our story, values,
          <br />
          and the ethos behind everything we do.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Hero Image — full bleed mobile, capped at 1440px desktop */}
      <div className="relative ml-[calc(50%-50vw)] h-[260px] w-screen overflow-hidden sm:ml-[-24px] sm:mr-[-24px] sm:h-[480px] sm:w-[calc(100%+48px)]">
        <Image
          src="/images/welcome-hero-1080x720.jpg"
          alt="European countryside estate"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
          priority
        />
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[1040px] space-y-8 px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block rounded-2xl bg-[#eae6e1] px-8 py-9 transition hover:-translate-y-0.5"
            >
              <h2
                className="text-[24px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {card.title}
              </h2>
              <div className="mt-3 h-0.5 w-8 bg-[#326354]" />
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-500">
                {card.body}
              </p>
              <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354]">
                READ MORE →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
