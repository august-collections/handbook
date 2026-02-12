import Link from "next/link";

const topics = [
  { href: "/wiki/branding-and-identity", title: "Branding & Identity", body: "Brand guidelines, fonts, colours, and LinkedIn banners." },
  { href: "/wiki/collections", title: "Collections", body: "Our 5 collection types and the internal roadmap." },
  { href: "/wiki/financials", title: "Financials", body: "Revenue model, sources of capital, and financial structure." },
  { href: "/wiki/homeowners", title: "Homeowners", body: "Homeowner journey, experience, and access schedules." },
  { href: "/wiki/how-to", title: "How To", body: "Step-by-step instructions for everyday workflows." },
  { href: "/wiki/how-we-work", title: "How We Work", body: "Quarterly presentations, cadences, and leadership expectations." },
  { href: "/wiki/hr-and-people", title: "HR & People", body: "HR support, wellbeing, IT help, and the company handbook." },
  { href: "/wiki/legal", title: "Legal", body: "Legal onboarding and the acquisition process." },
  { href: "/wiki/new-starters", title: "New Starters", body: "Onboarding timeline, first 90 days, and manager responsibilities." },
  { href: "/wiki/regions", title: "Regions", body: "Explore our 10 European destinations." },
  { href: "/wiki/related-brands", title: "Related Brands", body: "Villa Valeria, Rio London, and Anam Capital." },
  { href: "/wiki/resources", title: "Resources", body: "Webinar recordings and live session information." },
  { href: "/wiki/team", title: "Team", body: "Executive team, department heads, and org chart." },
];

export default function WikiPage() {
  return (
    <div className="mt-4 space-y-6">
      <div className="p-6">
        <h1 className="text-lg font-semibold text-slate-800">Wiki</h1>
        <hr className="mt-2 border-t-[0.7px] border-slate-300" />
        <p className="mt-2 text-sm text-slate-500">
          Explore company knowledge, operations, and resources.
        </p>
      </div>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="group flex flex-col rounded-3xl p-6 transition hover:-translate-y-0.5"
          >
            <h2 className="text-lg font-semibold text-slate-800">{topic.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{topic.body}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] group-hover:text-[#2a5044]">
              Read More
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
