import Link from "next/link";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="mt-4 space-y-10">
      <section className="overflow-hidden rounded-[32px]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 lg:p-12">
            <h1 className="text-[36px] font-semibold text-slate-800">Welcome</h1>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <p>
                Welcome. August is the premier co-ownership platform for European
                holiday homes. This August Handbook is our company wiki for new
                starters and staff alike, to learn more about the company and its
                respective policies, process and goals.
              </p>
              <p>Use the navigation to explore the handbook and its information.</p>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image
              src="/images/SP9_64.avif"
              alt="August collection"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <hr className="mx-auto w-1/2 border-[#2a5044]" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/welcome/founders-vision",
              title: "Founders' Vision",
              body: "Understand the Why behind August and the model we built.",
            },
            {
              href: "/welcome/the-august-ethos",
              title: "The August Ethos",
              body: "Dive into the August ethos and what makes our community special.",
            },
            {
              href: "/welcome/our-values",
              title: "Our Values",
              body: "The principles that guide how we work and show up.",
            },
            {
              href: "/wiki/new-starters",
              title: "Onboarding",
              body: "Your onboarding timeline, training, and check-ins.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-3xl p-6 transition hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]">
                Read More
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
