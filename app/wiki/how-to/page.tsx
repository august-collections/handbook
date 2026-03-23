import Link from "next/link";

export default function HowToPage() {
  return (
    <div className="space-y-0">
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          HOW TO
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          How To
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
          Step-by-step guides for common tasks,{"\n"}tools, and internal workflows.
        </p>
      </section>

      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              POPULAR GUIDES
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Everyday Workflows
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              The most-used guides across the team — from expenses to brand assets.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[14px] font-medium text-slate-800 sm:text-[15px]">
                Submit expenses and track approvals
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[14px] font-medium text-slate-800 sm:text-[15px]">
                Request time off and update calendars
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[14px] font-medium text-slate-800 sm:text-[15px]">
                Prepare reports for weekly reviews
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[14px] font-medium text-slate-800 sm:text-[15px]">
                Find brand assets and templates
              </p>
            </div>

            <Link href="/wiki/how-to/email" className="block rounded-2xl bg-[#eae6e1] px-7 py-6 transition hover:bg-[#e2ded9]">
              <p className="text-[14px] font-medium text-[#326354] sm:text-[15px]">
                Set up your August Collections email
              </p>
            </Link>

            <Link href="/wiki/how-to/email#signature" className="block rounded-2xl bg-[#eae6e1] px-7 py-6 transition hover:bg-[#e2ded9]">
              <p className="text-[14px] font-medium text-[#326354] sm:text-[15px]">
                Add your email signature
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
