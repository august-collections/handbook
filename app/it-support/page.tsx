import Link from "next/link";

const items = [
  { href: "/it-support/ai-policy", title: "AI Policy", body: "Guidelines for responsible use of AI tools at August." },
  { href: "/it-support/accounts-sso-passwords", title: "Accounts, SSO, Passwords", body: "SSO setup, password policies, and 1Password guidance." },
  { href: "/it-support/applications", title: "Applications", body: "Recommended apps, licenses, and Google Workspace." },
  { href: "/it-support/device-setup", title: "Device Setup", body: "Laptop setup, Heimdal installation, and initial configuration." },
  { href: "/it-support/security", title: "Security", body: "2FA, authenticator apps, and stolen laptop procedures." },
  { href: "/it-support/support", title: "Support", body: "Office Ready portal, support tickets, and escalation steps." },
  { href: "/it-support/use-policy", title: "Use Policy", body: "Acceptable Use Policy for laptops and company equipment." },
];

export default function ITSupportPage() {
  return (
    <div className="mt-4 space-y-6">
      <div className="p-6">
        <h1 className="text-lg font-semibold text-slate-800">IT &amp; Support</h1>
        <hr className="mt-2 border-t-[0.7px] border-slate-300" />
        <p className="mt-2 text-sm text-slate-500">
          Tools, access, and device support for day-to-day work.
        </p>
      </div>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-3xl p-6 transition hover:-translate-y-0.5"
          >
            <h2 className="text-lg font-semibold text-slate-800">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{item.body}</p>
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
