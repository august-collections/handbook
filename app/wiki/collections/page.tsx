import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Pied a Terre",
    subtitle: "A Slice of the City",
    price: "from EUR 405,000 per share",
    image: "/images/collection-pied_a_terre.jpg",
    href: "/wiki/collections/pied-a-terre",
  },
  {
    title: "Grand Pied a Terre",
    subtitle: "Elevate Your Urban Retreat",
    price: "from EUR 665,000 per share",
    image: "/images/collection-grand_pied_a_terre.jpg",
    href: "/wiki/collections/grand-pied-a-terre",
  },
  {
    title: "Signature",
    subtitle: "Our Most Popular Collection",
    price: "from EUR 480,000 per share",
    image: "/images/collection-signature.png",
    href: "/wiki/collections/signature",
  },
  {
    title: "Premium",
    subtitle: "An Invitation to Entertain",
    price: "from EUR 775,000 per share",
    image: "/images/collection-premium.jpg",
    href: "/wiki/collections/premium",
  },
  {
    title: "Prime",
    subtitle: "Simply the Best",
    price: "from EUR 1.8m per share",
    image: "/images/collection-prime.png",
    href: "/wiki/collections/prime",
  },
];

const tocItems = [
  { label: "How Collections Work", anchor: "#how-collections-work" },
  { label: "Our Collections", anchor: "#our-collections" },
  { label: "The Directors: Roles & Responsibilities", anchor: "#directors" },
  { label: "Property Approval: The Process", anchor: "#property-approval" },
  { label: "Legal Onboarding Process", anchor: "#legal-onboarding" },
  { label: "Resources", anchor: "#resources" },
  { label: "Building the Collection", anchor: "#roadmap" },
];

function BackToTop() {
  return (
    <div className="flex justify-center pt-2">
      <a
        href="#top"
        className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:text-slate-500"
      >
        Back to top
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </a>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section id="top" className="flex scroll-mt-24 flex-col items-center gap-3 px-6 pb-6 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          COLLECTIONS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Collections
        </h1>
        <p className="max-w-[520px] text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Five distinct collections, each designed for a different lifestyle
          and budget.
        </p>
        <div className="mt-1 h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1040px] space-y-16 px-6 pt-4 pb-10">
        {/* Table of Contents */}
        <nav className="rounded-2xl bg-[#eae6e1] px-6 py-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
            On This Page
          </p>
          <ul className="mt-2.5 columns-1 gap-x-8 sm:columns-2">
            {tocItems.map((item) => (
              <li key={item.anchor} className="py-[3px]">
                <a
                  href={item.anchor}
                  className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overview */}
        <section id="how-collections-work" className="scroll-mt-24 space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Overview
          </p>
          <h2
            className="text-[28px] font-semibold text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            How Collections Work
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]">
            Each collection is a carefully curated group of holiday homes,
            designed to offer a consistent and premium experience. Collections
            are made up of 4 or 5 homes, with multiple homeowners sharing
            ownership in each: 4-home collections are owned collectively by 17
            homeowners or 5-home Collections are owned collectively by 21
            homeowners.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]">
            August offers 5 types of Collections, each uniquely suited to your
            budget, lifestyle, travel preferences and family size. Discover
            which one is right for you.
          </p>
          <BackToTop />
        </section>

        {/* Collection Cards */}
        <section id="our-collections" className="scroll-mt-24 space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Our Collections
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {collections.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block overflow-hidden rounded-2xl bg-[#eae6e1] transition hover:-translate-y-0.5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={320}
                  className="h-[220px] w-full object-cover"
                />
                <div className="space-y-1 px-5 py-4">
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] italic text-slate-500">
                    {item.subtitle}
                  </p>
                  <p className="text-[13px] font-medium text-[#326354]">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div id="resources" className="scroll-mt-24 space-y-2 pt-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Resources
            </p>
            <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500 sm:text-[15px]">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1nxVwXLsuTzM7_LCVc1hvLtG85TLLtE7hqZjsh59YkTQ/edit?gid=306863466#gid=306863466run"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Collections Overview Spreadsheet
                </a>
              </li>
            </ul>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Directors */}
        <section id="directors" className="scroll-mt-24 space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Who Are the Directors?
          </p>
          <h2
            className="text-[28px] font-semibold text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The Directors: Roles &amp; Responsibilities
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]">
            Each collection has three directors responsible for key decisions.
          </p>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <li>Ensure August performs its obligations.</li>
            <li>Approve home purchases.</li>
            <li>Review key financial updates presented by August and sign off on statutory accounts.</li>
            <li>Agree any increase in the AMC.</li>
            <li>Approve expenditure outside of the AMC (Sinking Fund, Build Surplus &amp; HIRF).</li>
            <li>Approve share resales and new shareholders.</li>
            <li>Agree any new Management Contract with August.</li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Property Approval */}
        <section id="property-approval" className="scroll-mt-24 space-y-8">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Property Approval
            </p>
            <h2
              className="text-[28px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The Process
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 1
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Offer
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                The acquisition process begins when the team identifies an August home for your Collection and submits a non-binding offer. This is followed by preliminary legal and structural due diligence.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 2
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Board Meetings
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                The acquisition process begins when the team identifies an August home for your Collection and submits a non-binding offer. This is followed by preliminary legal and structural due diligence.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 3
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Due Diligence Checks &amp; Forms Completed
              </h3>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 4
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Preliminary Contract &amp; Payment of 10% Deposit
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                Once the property is fully approved, August will sign the first binding contract on your behalf and pay the 10% deposit.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 5
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Property Report &amp; Board Approval
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                After approval, our team and advisors conduct full due diligence and provide a Property Report outlining findings and the final budget. The Board will review this, along with August&apos;s risk assessment, and give final approval via written resolution.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 6
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Final Deed, Payment &amp; Stamp Duty
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                On completion, final checks are made, a property visit is conducted, the deed is signed, and funds are transferred to the seller.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 7
              </p>
              <h3
                className="mt-2 text-[20px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Renovation Begins
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                After completion, we collect the keys and our renovation and design team starts work on the property.
              </p>
            </div>
          </div>

          <div className="space-y-1 text-[12px] leading-[1.7] text-slate-400">
            <p>*At times the August team may purchase a property through ANAM and a different approval method is followed.</p>
            <p>**The process above is based on August presenting one property per home to the board as per the JVA framework. Additional work on property searches will incur additional costs.</p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Legal Onboarding Process */}
        <section id="legal-onboarding" className="scroll-mt-24 space-y-8">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Workflows - Onboarding Processes
            </p>
            <h2
              className="text-[28px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Due Diligence Checks &amp; Forms Completed
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 1
              </p>
              <p
                className="mt-2 text-[18px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Reservation Agreement
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 2
              </p>
              <p
                className="mt-2 text-[18px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Pay 10% Deposit
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-6 py-5 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Step 3
              </p>
              <p
                className="mt-2 text-[18px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Due Diligence Checks &amp; Forms Completed
              </p>
            </div>
          </div>

          <p className="text-[12px] leading-[1.7] text-slate-400">
            For further detail, please refer to the example{" "}
            <a
              href="https://drive.google.com/drive/folders/12klMipxZht_LDX0JKf5o2nvaCFr5eJO0?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-[#326354] transition hover:text-[#2a5044]"
            >
              onboarding PDFs
            </a>{" "}
            shared by the legal team prior to onboarding. These documents include a rough timeline for onboarding steps, illustrating the comprehensive process for Group 1 versus the other Groups.
          </p>

          <hr className="border-slate-200" />

          {/* Legal Onboarding */}
          <div className="space-y-4">
            <h2
              className="text-[28px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Legal Onboarding Process
            </h2>
          </div>

          {/* Group 1 */}
          <div className="space-y-4">
            <h3
              className="text-[20px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Group 1
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Collection Company Incorporation",
                "Bank Acc. Opening & Subscription Agreements",
                "JVA Signed",
                "Joint Venture & Subscription Agreements Signed",
                "Fund Transfer",
                "Part Share Transfers & Share Certificates",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl bg-[#eae6e1] px-5 py-4 text-center"
                >
                  <p className="text-[14px] font-medium text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Groups 2-5 */}
          <div className="space-y-4">
            <h3
              className="text-[20px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Group 2, 3, 4 &amp; 5
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Fund Transfer",
                "Board Approval",
                "Share Certificates",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl bg-[#eae6e1] px-5 py-4 text-center"
                >
                  <p className="text-[14px] font-medium text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Roadmap */}
        <section id="roadmap" className="scroll-mt-24 space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Internal Roadmap
          </p>
          <h2
            className="text-[28px] font-semibold text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Building the Collection
          </h2>
          <div className="flex justify-center">
            <Image
              src="/images/building_the_collection-an_internal_roadmap.png"
              alt="Building the collection internal roadmap"
              width={1100}
              height={620}
              className="h-auto w-full max-w-[1100px]"
            />
          </div>
          <BackToTop />
        </section>
      </div>
    </div>
  );
}
