import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="space-y-0">
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          RESOURCES
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Resources
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
          Templates, assets, downloads, and{"\n"}shared team resources.
        </p>
      </section>

      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              TRAINING
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Webinar Recording
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Watch a super informative recording of a live webinar to get up to speed at your own
              pace,{" "}
              <a
                href="https://www.augustcollections.com/august-information-webinar-overview"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                here on the August web site
              </a>
              . Or watch the embedded video below.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#eae6e1]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0OHDxMlsS8k?si=uMpMmF5lNi86Xb5y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[320px] w-full"
            ></iframe>
          </div>
        </section>

        <hr className="border-slate-200" />

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              LIVE SESSIONS
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Join Us Live
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Join a live session to see how the Advisory Team presents August and ask questions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
