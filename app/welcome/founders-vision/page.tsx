import Image from "next/image";
import Link from "next/link";

export default function FoundersVisionPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/welcome" className="text-slate-400 transition hover:text-slate-600">WELCOME</Link>
          &nbsp;/&nbsp;
          FOUNDERS&apos; VISION
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          The Founders&apos; Vision
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          How Mélie &amp; Nico set out to transform
          <br />
          European holiday home ownership.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Founders Row */}
      <section className="mx-auto max-w-[1040px] px-6 pb-16 sm:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[460px_1fr]">
          {/* Photo */}
          <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[560px]">
            <Image
              src="/images/founders-melie_and_nico.avif"
              alt="Founders Mélie and Nico"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 460px"
              priority
            />
          </div>

          {/* Quote */}
          <div className="space-y-8">
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              &ldquo;We witnessed how difficult it was for to-be holiday
              homeowners to succeed in buying, renovating, and managing homes in
              foreign countries.
            </p>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Having delivered real estate projects for individual clients and
              large hospitality groups across Europe, we knew with our expertise
              we could streamline the process.
            </p>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              We created a transparent and trusted model that eliminates pain
              points, making it much easier to enjoy the lifestyle our customers
              wanted.&rdquo;
            </p>
            <p className="text-[14px] font-semibold tracking-wide text-[#326354]">
              — Mélie &amp; Nico
            </p>
          </div>
        </div>
      </section>

      {/* Read Next */}
      <div className="mx-auto max-w-[1040px] border-t border-slate-200 px-6 py-10 text-right sm:px-12">
        <Link
          href="/welcome/the-august-ethos"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 transition hover:text-slate-800 sm:text-[15px]"
        >
          Read &lsquo;The August Ethos&rsquo; next
          <span className="transition group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
