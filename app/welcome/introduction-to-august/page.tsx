import Image from "next/image";
import Link from "next/link";

export default function AugustIntroPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/welcome" className="text-slate-400 transition hover:text-slate-600">WELCOME</Link>
        </p>
        <h1
          className="text-center text-[36px] font-normal leading-[1.15] text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          An Introduction
          <br />
          to August
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Welcome to August — the premier co-ownership platform
          <br />
          for European holiday homes.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Hero Image — full bleed mobile, capped at 1440px desktop */}
      <div className="relative ml-[calc(50%-50vw)] h-[260px] w-screen overflow-hidden sm:ml-[-24px] sm:mr-[-24px] sm:h-[520px] sm:w-[calc(100%+48px)]">
        <Image
          src="/images/handbook-an_introduction_to_august-1024x768.avif"
          alt="An introduction to August"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
          priority
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Intro */}
        <div className="space-y-8">
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Own a Collection of five quintessential holiday homes in
            Europe&apos;s most iconic destinations. With August, we make the
            process hassle-free and turnkey with a co-ownership model
            that&apos;s simple and rewarding.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            We truly create and curate Collections of homes — and that&apos;s no
            accident. Each of our Collections is unique and differentiated by
            design. While we carefully secure homes in highly desirable areas
            and create a consistent standard and experience, the homes and
            Collections remain as unique as the homeowners themselves.
          </p>
        </div>

        {/* Boutique Callout */}
        <div className="space-y-6 rounded-2xl bg-[#eae6e1] p-7 sm:p-10">
          <p
            className="text-[22px] leading-[1.4] text-slate-800 italic sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            We are boutique in our offering and approach.
          </p>
          <p className="text-[13px] leading-[1.8] text-slate-500 sm:text-[14px]">
            We only launch six Collections each year to maintain our standards
            and high-touch service. Due to high demand, we curate an
            ever-growing waiting list of families who aspire to join our
            Collections as homeowners every year.
          </p>
        </div>

        {/* London paragraph */}
        <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
          With our headquarters in London, we serve owners from around the
          world, including the US, UK and Europe. We are personal and deliberate
          in everything we do as a proudly independent, founder-led business. We
          focus on delivering exceptional experiences and lasting value to our
          August homeowners.
        </p>

        {/* Why August */}
        <section className="space-y-10">
          <div className="space-y-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              WHY AUGUST
            </p>
            <h2
              className="text-[26px] leading-[1.3] text-slate-800 sm:text-[36px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              August purchases, renovates, interior designs, maintains and
              manages your homes — at exceptional value.
            </h2>
            <hr className="border-slate-200" />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[480px]">
              <Image
                src="/images/why_august-frontdoor.jpg"
                alt="August home front door"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-7">
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Second-home ownership can be full of challenges. From sourcing
                the right home, negotiating a fair price and navigating foreign
                legal and financial requirements to managing a renovation and
                upkeep abroad — it all requires time, money and energy.
              </p>
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                August addresses all these barriers with one clever, turnkey
                solution. Our expert team carefully acquires and renovates
                desirable homes in the most iconic European locations.
              </p>
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Each home is renovated and refurbished to our August standards,
                leveraging our team of architects, interior designers and local
                suppliers to deliver beautiful, lasting results.
              </p>
            </div>
          </div>
        </section>

        {/* Maintenance & Stats */}
        <section className="space-y-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px]">
            <div className="space-y-7">
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Finally, we fully maintain, manage and service the homes for all
                homeowners. On average, our owners can enjoy 8 weeks in their
                Collection per year when travelling in mid to peak season.
              </p>
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Owners who travel off-peak can enjoy upwards of 12–14 weeks
                per year.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "8+", label: "weeks per year\npeak season" },
                  { num: "12–14", label: "weeks per year\noff-peak travel" },
                  { num: "6", label: "collections\neach year" },
                ].map((stat) => (
                  <div
                    key={stat.num}
                    className="space-y-1 py-5"
                  >
                    <p
                      className="text-[28px] font-semibold text-[#326354] sm:text-[32px]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {stat.num}
                    </p>
                    <p className="whitespace-pre-line text-[11px] leading-[1.5] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px]">
              <Image
                src="/images/why_august-beach-brollys.jpg"
                alt="Beach umbrellas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
          </div>
        </section>

        {/* Read Next */}
        <div className="border-t border-slate-200 pt-10 text-right">
          <Link
            href="/welcome/founders-vision"
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 transition hover:text-slate-800 sm:text-[15px]"
          >
            Read &lsquo;The Founders&apos; Vision&rsquo; next
            <span className="transition group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
