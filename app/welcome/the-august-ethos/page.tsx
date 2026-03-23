import Image from "next/image";
import Link from "next/link";

export default function AugustEthosPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/welcome" className="text-slate-400 transition hover:text-slate-600">WELCOME</Link>
          &nbsp;/&nbsp;
          THE AUGUST ETHOS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          The August Ethos
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          A global homeowner community celebrating
          <br />
          unique European real estate.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Hero Image — full bleed mobile, capped at 1440px desktop */}
      <div className="relative ml-[calc(50%-50vw)] h-[260px] w-screen overflow-hidden sm:ml-[-24px] sm:mr-[-24px] sm:h-[520px] sm:w-[calc(100%+48px)]">
        <Image
          src="/images/the-august-ethos-hero.png"
          alt="Provençal countryside with terracotta rooftops"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
          priority
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Quote Card */}
        <div className="rounded-2xl bg-[#eae6e1] px-7 py-8 sm:px-14 sm:py-12">
          <p
            className="text-center text-[17px] leading-[1.8] text-slate-800 italic sm:text-[22px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            &ldquo;We are a global homeowner community that comes together to
            celebrate unique real estate. Our families make memories while
            enjoying the charming countryside of Provence, the picturesque
            beaches of the Mallorcan coast and the idyllic streets of Tuscany,
            sharing their experiences and recommendations as they go.&rdquo;
          </p>
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-10">
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Everything we do is carefully considered, and our decision to remain
            independent allows us to ensure a personal touch is felt at every
            stage of the August journey. This means we can focus on the highest
            levels of quality for our homeowners and their residences.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            That is what makes each Collection so special and that is no
            accident; they are, by design, unique thanks to the destinations,
            their interiors and the families that inhabit them.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            As an exclusive lifestyle community, we only launch a select few
            Collections each year, which means we carefully curate an
            ever-growing waitlist of like-minded families who aspire to join the
            August community.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Families are invited to join following a thorough vetting process (on
            both sides!) to ensure homeowners align with the August values and
            vision. Since we founded August, we have had the pleasure of
            sourcing and renovating many special homes all over Europe, helping
            hundreds of families to realize their dream of owning a
            second home.
          </p>
        </div>
        {/* Read Next */}
        <div className="border-t border-slate-200 pt-10 text-right">
          <Link
            href="/welcome/our-values"
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 transition hover:text-slate-800 sm:text-[15px]"
          >
            Read &lsquo;Our Values&rsquo; next
            <span className="transition group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
