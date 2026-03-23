import Link from "next/link";

const relatedBrands = [
  {
    name: "Villa Valeria",
    href: "https://www.villa-valeria.com/",
    description:
      "Villa Valeria is a creator & producer of high-quality food and beauty products inspired by the August regions.",
    sections: [
      { title: "Villa Valeria Ownership", body: "August founders are shareholders." },
      {
        title: "Villa Valeria & the Collections",
        body: "Villa Valeria supplies bath/shower products and olive oil to the collections that enhance the authentic high quality August brand experience.",
      },
      {
        title: "The Villa Valeria Deal",
        body: "The collections purchase VV products at a discounted rate v RRP according to a rate card. Procurement contracts are negotiated at arm\u2019s length.",
      },
    ],
  },
  {
    name: "Studio RIO London",
    href: "https://www.studioriolondon.com/",
    description:
      "Studio RIO London is an internationally acclaimed interior architecture and design studio based in London.",
    sections: [
      { title: "Studio RIO London Ownership", body: "August founders are shareholders." },
      {
        title: "Studio RIO London & the Collections",
        body: "Studio RIO London provides interior architecture and design services (including the procurement of furniture) in line with August values and DNA.",
      },
      {
        title: "The Studio RIO London Deal",
        body: "SRL is paid a design fee per home renovated (depending on design scope) and a margin of 30% on furniture procurement. (SLR charges a margin of 20% on replacement items).",
      },
    ],
  },
  {
    name: "Anam Capital",
    description:
      "Anam Capital is a French property company specialising in luxury property renovation in the SoF and Alps.",
    sections: [
      { title: "Anam Capital Ownership", body: "August founders are shareholders." },
      {
        title: "Anam Capital & the Collections",
        body: "AC sells pre-renovated French properties to some collections in line with August\u2019s demanding brand standards. This enables collections to access properties faster, with less risk, and that require larger renovations.",
      },
      {
        title: "The Anam Capital Deal",
        body: "Anam properties are sold to collections on an arm\u2019s length basis supported by independent valuations.",
      },
    ],
  },
];

export default function RelatedBrandsPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          RELATED BRANDS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Related Brands
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Partner brands, affiliated services, and
          <br />
          the wider August ecosystem.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Sister Brands */}
        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              OUR ECOSYSTEM
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Sister Brands
            </h2>
          </div>

          <div className="space-y-6">
            {relatedBrands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-2xl bg-[#eae6e1] px-7 py-7"
              >
                <h3
                  className="text-[20px] font-semibold text-slate-800 sm:text-[24px]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {brand.href ? (
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-800 transition hover:text-[#326354]"
                    >
                      {brand.name}
                    </a>
                  ) : (
                    brand.name
                  )}
                </h3>
                <div className="mt-2 h-0.5 w-8 bg-[#326354]" />
                <p className="mt-3 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  {brand.description}
                </p>

                <div className="mt-6 space-y-5">
                  {brand.sections.map((section) => (
                    <div key={section.title}>
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                        {section.title}
                      </p>
                      <p className="mt-1.5 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
