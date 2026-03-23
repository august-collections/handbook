import Link from "next/link";

const steps = [
  {
    title: "Offer",
    description:
      "The acquisition process begins when the team identifies a potential property and submits a non-binding offer to the seller or listing agent.",
  },
  {
    title: "Board Meeting",
    description:
      "The offer is reviewed internally during a scheduled board meeting to assess alignment with investment criteria and regional strategy.",
  },
  {
    title: "Property Report & Board Approval",
    description:
      "A detailed property report is prepared covering legal, structural, and financial due diligence. The board votes to approve or decline the acquisition.",
  },
  {
    title: "Preliminary Contract & Payment of 10% Deposit",
    description:
      "Once approved, a preliminary contract is signed between buyer and seller. A deposit of 10% of the purchase price is paid at this stage.",
  },
  {
    title: "Final Deed, Payment & Stamp Duty",
    description:
      "The final deed of sale is executed before a notary. The remaining balance is paid along with applicable stamp duty and registration fees.",
  },
  {
    title: "Renovation Begins",
    description:
      "With ownership transferred and all legal formalities completed, the renovation phase begins according to the approved project plan.",
  },
];

export default function LegalPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
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
          &nbsp;/&nbsp;LEGAL
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Legal
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">
          Contracts, compliance, and legal{"\n"}frameworks across regions.
        </p>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Property Approval Process */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              PROPERTY APPROVAL
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Property Approval Process
            </h2>
          </div>

          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            The acquisition process begins when the team identifies an August
            home and submits a non-binding offer. Here is the process from offer
            to renovation.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl bg-[#eae6e1] p-6"
              >
                <p
                  className="text-[13px] font-medium text-[#326354]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-[15px] font-bold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
