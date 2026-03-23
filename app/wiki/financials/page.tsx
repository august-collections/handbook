import Link from "next/link";

const revenueColumns = [
  {
    num: "01",
    title: "Collection Setup Fees",
    items: [
      {
        title: "August Fee",
        desc: "Initial set-up fee for putting together the collection; Marketing, Sales, Legal, Finance, Real Estate and Hospitality/Operational set up: 15% + VAT.",
      },
      {
        title: "Project Management",
        desc: "A fee charged to cover the costs of managing the renovation and setup phase.",
      },
      {
        title: "Design Fee (Rio London)",
        desc: "A fee charged for the bespoke interior design and styling of each property.",
      },
    ],
  },
  {
    num: "02",
    title: "Operational Fees (Recurring)",
    items: [
      {
        title: "Management Fee",
        desc: "A proportion of the Annual Maintenance Charge (AMC) for running and maintaining the homes.",
      },
      {
        title: "Treasury & Interest",
        desc: "A fee on any interest accrued from managing collection funds in bank accounts.",
      },
      {
        title: "Property Managers Fee",
        desc: "Property Manager Fees to pay property managers engaged by August in the regions; this is included in the yearly AMC.",
      },
    ],
  },
  {
    num: "03",
    title: "Exit Fee",
    items: [
      {
        title: "Resale Fee",
        desc: "A transaction fee applied to the buyer\u2019s and seller\u2019s share (August, Admin & Marketing fees) during a resale.",
      },
    ],
  },
];

const structureColumns = [
  {
    num: "01",
    title: "Homeowner Charges",
    items: [
      {
        title: "AMC Balance",
        desc: "Accumulates the Annual Maintenance Charge paid by all homeowners. Covers the operational and domestic costs of running the home.",
      },
      {
        title: "End of Stay Balance",
        desc: "Funded by homeowners after each visit. Covers specific usage-based costs such as cleaning and laundry services.",
      },
    ],
  },
  {
    num: "02",
    title: "Reserve Funds",
    items: [
      {
        title: "Initial Reserve",
        desc: "A one-time AMC charged at the start to all homeowners, equal to one year\u2019s AMC per person. Acts as a security buffer in case a homeowner defaults on payments.",
      },
      {
        title: "Sinking Fund",
        desc: "A safety net for things going wrong. Topped up annually via the AMC to ensure long-term financial health for repairs.",
      },
    ],
  },
  {
    num: "03",
    title: "Improvement Funds",
    items: [
      {
        title: "HIRF Balance",
        desc: "Home Improvement & Refurbishment Fund. A dedicated pot for proactive home improvements and renovation projects.",
      },
    ],
  },
];

function EditorialColumns({
  columns,
}: {
  columns: typeof revenueColumns;
}) {
  return (
    <div className="flex px-6 sm:px-20">
      {columns.map((col, i) => (
        <div key={col.num} className="flex flex-1">
          {i > 0 && (
            <div className="w-px shrink-0 self-stretch bg-slate-200" />
          )}
          <div
            className={`flex w-full flex-col ${
              i === 0
                ? "pr-9"
                : i === columns.length - 1
                  ? "pl-9"
                  : "px-9"
            }`}
          >
            {/* Column header */}
            <div className="flex flex-col items-start gap-3 pb-0">
              <div className="h-0.5 w-10 rounded-sm bg-[#326354]" />
              <span className="text-[11px] font-semibold tracking-[0.15em] text-[#326354]">
                {col.num}
              </span>
              <h3
                className="text-[22px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {col.title}
              </h3>
            </div>

            {/* Items */}
            {col.items.map((item, j) => (
              <div key={item.title}>
                {j > 0 && <div className="h-px w-full bg-slate-200" />}
                <div className="flex flex-col gap-1.5 py-5">
                  <h4
                    className="text-[18px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FinancialsPage() {
  return (
    <div className="space-y-0">
      {/* Revenue Model Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-16 pt-10 sm:px-20 sm:pt-12">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link
            href="/"
            className="text-slate-400 transition hover:text-slate-600"
          >
            HANDBOOK
          </Link>
          &nbsp;/&nbsp;
          <Link
            href="/wiki"
            className="text-slate-400 transition hover:text-slate-600"
          >
            WIKI
          </Link>
          &nbsp;/&nbsp;FINANCIALS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          August Revenue Model: Sources of Capital
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Revenue models, pricing structures and financial&nbsp;reporting.
        </p>
        <div className="h-px w-[60px] bg-slate-200" />
      </section>

      {/* Revenue Columns */}
      <EditorialColumns columns={revenueColumns} />

      {/* Breadcrumb + Collection Financial Structure Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-20 sm:px-20 sm:pt-24">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link
            href="/"
            className="text-slate-400 transition hover:text-slate-600"
          >
            HANDBOOK
          </Link>
          &nbsp;/&nbsp;
          <Link
            href="/wiki"
            className="text-slate-400 transition hover:text-slate-600"
          >
            WIKI
          </Link>
          &nbsp;/&nbsp;FINANCIALS
        </p>
        <h2
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Collection Financial Structure
        </h2>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          An overview of how funds are allocated and managed within
          a&nbsp;Collection.
        </p>
        <div className="h-px w-[60px] bg-slate-200" />
      </section>

      {/* Structure Columns */}
      <EditorialColumns columns={structureColumns} />

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
}
