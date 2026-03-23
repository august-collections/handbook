import Link from "next/link";

export default function HowWeWorkPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          HOW WE WORK
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          How We Work
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">
          Our ways of working, meeting cadences,{"\n"}and team rituals.
        </p>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Quarterly Presentations */}
        <section className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Company Rhythm
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Quarterly Presentations
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            At the end of each quarter, we gather for our <strong className="text-slate-700">All Hands meeting</strong> to
            present wins, work in progress, and next moves. It&apos;s a chance for the whole team to
            reconnect with our shared goals.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            All members are expected to join. If joining online, please turn on your camera to
            keep the session engaging.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Presentations should be concise and focused on what is relevant to the whole team.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* Cadences */}
        <section className="space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Meeting Cadences
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Cadences
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[14px] font-semibold text-slate-800 sm:text-[15px]">Weekly 1:1s</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                A dedicated space with your manager to check in,
                align on priorities, ask questions, and get support.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[14px] font-semibold text-slate-800 sm:text-[15px]">Quarterly Reviews</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Sessions to review OKRs and performance.
                This is the ideal moment to discuss career progression and development goals.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[14px] font-semibold text-slate-800 sm:text-[15px]">Salary Review Cycles</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Formal reviews take place twice a year
                (H1 &amp; H2). While pay can be discussed quarterly, adjustments happen during
                these cycles.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Leadership Expectations */}
        <section className="space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Leadership
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Leadership Expectations
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            An overview of your key responsibilities and touchpoints as a leader at August.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                The Meeting
              </p>
              <p className="mt-3 text-[15px] font-semibold text-slate-800">
                Monthly Business Review (MBR)
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Active attendance required.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Timing
              </p>
              <p className="mt-3 text-[15px] font-semibold text-slate-800">
                First Monday of Every Month
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Recurring monthly session with the leadership team.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Preparation &amp; Deliverables
            </p>
            <div className="mt-4 space-y-5">
              <div>
                <p className="text-[15px] font-semibold text-slate-800">Look for Reminders</p>
                <p className="mt-1 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  Melie will send prompts ahead of the meeting outlining specific preparation
                  needs.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-slate-800">Prepare Your Report</p>
                <p className="mt-1 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  Create a Monthly Business Report covering your department&apos;s key metrics and
                  updates.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-slate-800">Submit One Day Prior</p>
                <p className="mt-1 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  Share your report with Melie and Nico the day before the meeting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
