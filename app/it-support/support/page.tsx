import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/it-support" className="text-slate-400 transition hover:text-slate-600">IT &amp; SUPPORT</Link>
          &nbsp;/&nbsp;
          SUPPORT
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Support
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          How to get help &mdash; IT support channels,
          <br />
          escalation, and FAQs.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[800px] px-6 pb-16">
        <div className="rounded-2xl bg-[#eae6e1] p-8">
          <p className="text-sm text-slate-500">Content coming soon.</p>
        </div>
      </section>
    </div>
  );
}
