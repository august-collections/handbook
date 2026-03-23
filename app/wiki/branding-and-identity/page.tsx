import Image from "next/image";
import Link from "next/link";

const brandColors = [
  { name: "August Green", hex: "#326354", textLight: true },
  { name: "Deep Green", hex: "#2a5044", textLight: true },
  { name: "Warm Sand", hex: "#f4f0ec", textLight: false },
  { name: "Slate 800", hex: "#1e293b", textLight: true },
  { name: "Slate 500", hex: "#64748b", textLight: true },
  { name: "White", hex: "#ffffff", textLight: false },
];

export default function BrandingIdentityPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          BRANDING &amp; IDENTITY
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Branding &amp; Identity
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Guidelines and assets to represent
          <br />
          August consistently.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Brand Book */}
        <section id="brand-book" className="space-y-6 scroll-mt-24">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              BRAND BOOK
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The August Brand
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Our brand book is the definitive guide to how August looks, feels,
              and speaks. Review it before creating any branded materials.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="block w-[200px] transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/images/august-brand_book-cover.png"
                alt="August brand book cover"
                width={520}
                height={700}
                className="h-auto w-full rounded-xl shadow-md"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#326354] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2a5044]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              View Brand Book
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#eae6e1]">
            <div className="p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-[14px] font-semibold text-slate-800">
                  What&apos;s inside
                </p>
                <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
                  <li>Logo usage, placement, and clear-space rules</li>
                  <li>Colour palette with primary and secondary tones</li>
                  <li>Typography hierarchy and pairing guidance</li>
                  <li>Photography style and image treatment</li>
                  <li>Tone of voice and messaging principles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Typography */}
        <section id="typography" className="space-y-6 scroll-mt-24">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              TYPOGRAPHY
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Fonts &amp; Type Hierarchy
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Consistent typography reinforces our brand across every touchpoint.
              Always use these typefaces in branded materials.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eae6e1] p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Headings
              </p>
              <p
                className="mt-4 text-[24px] text-slate-800"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Cormorant Garamond
              </p>
              <p
                className="mt-1 text-[14px] text-slate-500"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                AaBbCcDdEeFfGg 0123456789
              </p>
              <a
                href="https://fonts.google.com/specimen/Cormorant+Garamond"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354] transition hover:text-[#2a5044]"
              >
                VIEW ON GOOGLE FONTS →
              </a>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Body Text
              </p>
              <p className="mt-4 text-[24px] text-slate-800">
                Plus Jakarta Sans
              </p>
              <p className="mt-1 text-[14px] text-slate-500">
                AaBbCcDdEeFfGg 0123456789
              </p>
              <a
                href="https://fonts.google.com/specimen/Plus+Jakarta+Sans"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354] transition hover:text-[#2a5044]"
              >
                VIEW ON GOOGLE FONTS →
              </a>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Colour Palette */}
        <section id="colour-palette" className="space-y-6 scroll-mt-24">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              COLOUR PALETTE
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Brand Colours
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Use the palette established in the brand book. These are the core
              colours that define August&apos;s visual identity.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {brandColors.map((color) => (
              <div key={color.hex} className="text-center">
                <div
                  className={`mx-auto aspect-square w-full rounded-2xl ${
                    color.hex === "#ffffff" ? "border border-slate-200" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <p className="mt-2 text-[12px] font-semibold text-slate-700">
                  {color.name}
                </p>
                <p className="font-mono text-[11px] uppercase text-slate-400">
                  {color.hex}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Logo Usage */}
        <section id="guidelines" className="space-y-6 scroll-mt-24">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              GUIDELINES
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Logo Usage
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              The August logo is our most recognisable asset. Follow these rules
              to keep it looking its best.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl bg-[#eae6e1] p-8">
              <Image
                src="/guides/logo-august-script-2596x827.png"
                alt="August script logo"
                width={2596}
                height={827}
                className="h-auto w-full max-w-md"
              />
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-[#2a5044] p-8">
              <Image
                src="/guides/logo-august-script-2596x827.png"
                alt="August script logo on dark background"
                width={2596}
                height={827}
                className="h-auto w-full max-w-md brightness-0 invert"
              />
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-[#eae6e1] p-8">
              <Image
                src="/guides/logo-a-script-222x176.png"
                alt="August A script logo"
                width={222}
                height={176}
                className="h-auto w-full max-w-[111px]"
              />
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-[#2a5044] p-8">
              <Image
                src="/guides/logo-a-script-222x176.png"
                alt="August A script logo on dark background"
                width={222}
                height={176}
                className="h-auto w-full max-w-[111px] brightness-0 invert"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-[14px] font-semibold text-[#326354]">Do</p>
              <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
                <li>Use the logo files provided in the brand book</li>
                <li>Maintain clear space around the logo</li>
                <li>Use approved colour variations only</li>
                <li>Scale proportionally — never stretch or distort</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-[14px] font-semibold text-red-500">Don&apos;t</p>
              <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
                <li>Alter the logo colours or add effects</li>
                <li>Place the logo on busy or clashing backgrounds</li>
                <li>Recreate or approximate the logo with other fonts</li>
                <li>Use outdated versions of the logo</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Assets & Downloads */}
        <section id="assets" className="space-y-6 scroll-mt-24">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              ASSETS
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Downloads &amp; Resources
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Approved brand assets for use across digital and print. Always use
              the latest files from these links.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl bg-[#eae6e1] px-7 py-6 transition hover:-translate-y-0.5"
            >
              <p className="text-[14px] font-semibold text-slate-800">
                Brand Book
              </p>
              <div className="mt-2 h-0.5 w-8 bg-[#326354]" />
              <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">
                Full brand guidelines PDF
              </p>
              <span className="mt-3 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354]">
                DOWNLOAD →
              </span>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1LTH6wC7HROneCfoYbCy8Iciidp5C2uGy"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl bg-[#eae6e1] px-7 py-6 transition hover:-translate-y-0.5"
            >
              <p className="text-[14px] font-semibold text-slate-800">
                LinkedIn Banners
              </p>
              <div className="mt-2 h-0.5 w-8 bg-[#326354]" />
              <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">
                Profile banners for the team
              </p>
              <span className="mt-3 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354]">
                DOWNLOAD →
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
