import Image from "next/image";

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
    <div className="mt-10 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-800">
          Branding &amp; Identity
        </h1>
        <p className="text-sm text-slate-500">
          Guidelines and assets to represent August consistently.
        </p>
      </div>

      {/* Brand Book */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Brand Book
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-800">
          The August Brand
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Our brand book is the definitive guide to how August looks, feels, and
          speaks. Review it before creating any branded materials.
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          <a
            href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="block w-full max-w-[200px] shrink-0 transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/images/august-brand_book-cover.png"
              alt="August brand book cover"
              width={520}
              height={700}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
            />
          </a>

          <div className="space-y-3 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">
              What&apos;s inside
            </p>
            <ul className="list-inside list-disc space-y-1.5">
              <li>Logo usage, placement, and clear-space rules</li>
              <li>Colour palette with primary and secondary tones</li>
              <li>Typography hierarchy and pairing guidance</li>
              <li>Photography style and image treatment</li>
              <li>Tone of voice and messaging principles</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#326354] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a5044]"
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
        </div>
      </section>

      {/* Typography */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Typography
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-800">
          Fonts &amp; Type Hierarchy
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Consistent typography reinforces our brand across every touchpoint.
          Always use these typefaces in branded materials.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Headings
            </p>
            <p
              className="mt-3 text-2xl text-slate-800"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Cormorant Garamond
            </p>
            <p
              className="mt-1 text-sm text-slate-500"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              AaBbCcDdEeFfGg 0123456789
            </p>
            <a
              href="https://fonts.google.com/specimen/Cormorant+Garamond"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              View on Google Fonts &rarr;
            </a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Body Text
            </p>
            <p className="mt-3 text-2xl text-slate-800">Plus Jakarta Sans</p>
            <p className="mt-1 text-sm text-slate-500">
              AaBbCcDdEeFfGg 0123456789
            </p>
            <a
              href="https://fonts.google.com/specimen/Plus+Jakarta+Sans"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              View on Google Fonts &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Colour Palette */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Colour Palette
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-800">
          Brand Colours
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Use the palette established in the brand book. These are the core
          colours that define August&apos;s visual identity.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brandColors.map((color) => (
            <div key={color.hex} className="text-center">
              <div
                className="mx-auto aspect-square w-full max-w-[100px] rounded-2xl border border-slate-200 shadow-sm"
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-2 text-xs font-semibold text-slate-700">
                {color.name}
              </p>
              <p className="font-mono text-[11px] uppercase text-slate-400">
                {color.hex}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Usage Guidelines */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Guidelines
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-800">
          Logo Usage
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          The August logo is our most recognisable asset. Follow these rules to
          keep it looking its best.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/50 p-8">
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
          <div className="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/50 p-8">
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

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-green-700">Do</p>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-slate-600">
              <li>Use the logo files provided in the brand book</li>
              <li>Maintain clear space around the logo</li>
              <li>Use approved colour variations only</li>
              <li>Scale proportionally — never stretch or distort</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-red-600">Don&apos;t</p>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-slate-600">
              <li>Alter the logo colours or add effects</li>
              <li>Place the logo on busy or clashing backgrounds</li>
              <li>Recreate or approximate the logo with other fonts</li>
              <li>Use outdated versions of the logo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assets & Downloads */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Assets
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-800">
          Downloads &amp; Resources
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Approved brand assets for use across digital and print. Always use the
          latest files from these links.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-[#326354]/30 hover:bg-[#326354]/5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#326354]/10 text-[#326354]">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Brand Book
              </p>
              <p className="text-xs text-slate-500">
                Full brand guidelines PDF
              </p>
            </div>
          </a>

          <a
            href="https://drive.google.com/drive/folders/1LTH6wC7HROneCfoYbCy8Iciidp5C2uGy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-[#326354]/30 hover:bg-[#326354]/5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#326354]/10 text-[#326354]">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                LinkedIn Banners
              </p>
              <p className="text-xs text-slate-500">
                Profile banners for the team
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
