import Image from "next/image";
import Link from "next/link";

const properties = [
  { city: "Mallorca", bedrooms: 4, bathrooms: 3 },
  { city: "Tuscany", bedrooms: 4, bathrooms: 4 },
  { city: "Provence", bedrooms: 4, bathrooms: 3 },
  { city: "Algarve", bedrooms: 4, bathrooms: 4 },
];

export default function PremiumCollectionPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-end overflow-hidden px-6 pb-12 pt-48 sm:pt-64">
        <Image
          src="/images/collection-premium.jpg"
          alt="Premium collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-[11px] sm:tracking-[0.22em]">
            <Link href="/" className="text-white/60 transition hover:text-white">HANDBOOK</Link>
            &nbsp;/&nbsp;
            <Link href="/wiki" className="text-white/60 transition hover:text-white">WIKI</Link>
            &nbsp;/&nbsp;
            <Link href="/wiki/collections" className="text-white/60 transition hover:text-white">COLLECTIONS</Link>
            &nbsp;/&nbsp;
            PREMIUM
          </p>
          <h1
            className="text-center text-[36px] font-normal text-white sm:text-[56px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Premium
          </h1>
          <p className="text-center text-[15px] italic text-white/70 sm:text-[18px]">
            An invitation to entertain
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#326354]">
        <div className="mx-auto grid max-w-[800px] grid-cols-3 divide-x divide-white/20 px-6 py-6 sm:py-8">
          <div className="flex flex-col items-center gap-1 px-2">
            <p
              className="text-[22px] font-normal text-white sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              from €775,000
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-[11px]">
              Per Share
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 px-2">
            <p
              className="text-[22px] font-normal text-white sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              17
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-[11px]">
              Owners
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 px-2">
            <p
              className="text-[22px] font-normal text-white sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              4
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-[11px]">
              Properties
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Overview */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              Overview
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Collection Details
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#eae6e1] px-5 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Bedrooms
              </p>
              <p
                className="mt-1 text-[24px] font-normal text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                4
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-5 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Properties
              </p>
              <p
                className="mt-1 text-[24px] font-normal text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                4
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-5 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Annual Contribution
              </p>
              <p
                className="mt-1 text-[24px] font-normal text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                €22,500
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Properties */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              Properties
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Homes in the Collection
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {properties.map((property) => (
              <div
                key={property.city}
                className="rounded-2xl bg-[#eae6e1] px-6 py-5"
              >
                <h3
                  className="text-[20px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {property.city}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-[13px] text-slate-500">
                  <span>{property.bedrooms} bedroom{property.bedrooms !== 1 ? "s" : ""}</span>
                  <span className="h-3 w-px bg-slate-300" />
                  <span>{property.bathrooms} bathroom{property.bathrooms !== 1 ? "s" : ""}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="flex justify-center pt-4">
          <Link
            href="/wiki/collections"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#326354] transition hover:text-[#2a5044]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Back to Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
