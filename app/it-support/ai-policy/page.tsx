import Link from "next/link";

const tocItems = [
  { label: "About This Policy", anchor: "#about" },
  { label: "Purpose & Scope", anchor: "#purpose-scope" },
  { label: "Permitted Uses", anchor: "#permitted-uses" },
  { label: "Prohibited Uses", anchor: "#prohibited-uses" },
  { label: "Data Classification & Handling Rules", anchor: "#data-classification" },
  { label: "CRM & Sales Lead\u2013Specific Rules", anchor: "#crm-sales-rules" },
  { label: "GDPR & European Data Protection Compliance", anchor: "#gdpr-compliance" },
  { label: "Accuracy, Accountability & Human Oversight", anchor: "#accuracy-accountability" },
  { label: "Intellectual Property & Confidentiality", anchor: "#intellectual-property" },
  { label: "Approved Tools & Governance", anchor: "#approved-tools" },
  { label: "Training & Awareness", anchor: "#training-awareness" },
  { label: "Monitoring, Enforcement & Incident Response", anchor: "#monitoring-enforcement" },
  { label: "Policy Review", anchor: "#policy-review" },
  { label: "Further Reading", anchor: "#further-reading" },
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

export default function AIPolicyPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section id="top" className="flex scroll-mt-24 flex-col items-center gap-3 px-6 pb-6 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/it-support" className="text-slate-400 transition hover:text-slate-600">IT &amp; SUPPORT</Link>
          &nbsp;/&nbsp;
          AI POLICY
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          AI Policy
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Guidelines for using AI tools
          <br />
          responsibly and securely at August.
        </p>
        <div className="mt-1 h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-10 px-6 pt-4 pb-16">
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

        {/* Introduction */}
        <section id="about" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              INTRODUCTION
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              About This Policy
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Tools like ChatGPT, Gemini, and Claude are already helping teams across our
            organisation work faster, communicate more effectively, and make better-informed decisions
            &mdash; from drafting property descriptions and marketing copy to summarising customer
            interactions and streamlining internal processes.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            However, as a company with many Homeowners, we hold a
            position of significant trust. Our customers share sensitive information with us.
            Mishandling this information could expose the company and staff to serious legal,
            regulatory, and reputational risk.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            While AI platforms are powerful, they are not private by default. When staff enter
            information into an external AI tool, that data may be stored, processed, or even used to
            train future AI models. Models that may be outside the European Economic Area and beyond
            the protections of GDPR. A single prompt containing customer information may constitute a
            data breach under European law.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            This policy exists to ensure that every member of the August Collections, RIO, and ANAM
            teams can use AI confidently and productively, while protecting our customers, our
            business, and our regulatory standing. This policy sets clear boundaries on what can and
            cannot be shared with AI tools, establishes rules for handling customer and company data,
            and defines the responsibilities that come with using these technologies in a professional
            context.
          </p>
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] font-semibold leading-[1.8] text-slate-800">
              Every staff member is expected to read, understand, and follow this policy. If you are
              unsure whether a particular use of AI is appropriate, ask before you act.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 1. Purpose & Scope */}
        <section id="purpose-scope" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 1
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Purpose &amp; Scope
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              <strong className="text-slate-700">Why the policy exists:</strong> to enable productive AI use while protecting the
              company, its customers, and its reputation
            </li>
            <li>
              <strong className="text-slate-700">Who it applies to:</strong> all employees, contractors, and third-party agents
              across all departments (sales, marketing, operations, legal, finance, customer service)
            </li>
            <li>
              <strong className="text-slate-700">Which tools it covers:</strong> ChatGPT, Gemini, Claude, Copilot, and any future
              generative AI platforms &mdash; including browser extensions and integrations
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 2. Permitted Uses */}
        <section id="permitted-uses" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 2
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Permitted Uses
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>Drafting and refining marketing copy, property descriptions, and sales communications</li>
            <li>Summarising internal documents, meeting notes, and reports</li>
            <li>Generating first-draft emails, proposals, and customer FAQs</li>
            <li>Brainstorming ideas for campaigns, pricing strategies, and operational improvements</li>
            <li>Coding assistance, spreadsheet formulas, and workflow automation</li>
            <li>General research on markets, regulations, and competitors</li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 3. Prohibited Uses */}
        <section id="prohibited-uses" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 3
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Prohibited Uses
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              <strong className="text-slate-700">Uploading personally identifiable information (PII)</strong> of customers or
              leads into any external AI platform &mdash; this includes names, email addresses, phone
              numbers, passport details, financial information, and property ownership records
            </li>
            <li>
              <strong className="text-slate-700">Pasting CRM data</strong> (HubSpot exports, lead lists, deal pipelines) into AI
              tools not contractually approved for data processing
            </li>
            <li>
              <strong className="text-slate-700">Sharing proprietary business data</strong> such as pricing models, revenue
              figures, commission structures, investor terms, or legal agreements
            </li>
            <li>
              Using AI to make or communicate <strong className="text-slate-700">binding commitments</strong> to customers (e.g.
              pricing guarantees, legal interpretations of ownership contracts)
            </li>
            <li>
              Generating <strong className="text-slate-700">misleading property descriptions</strong>, fabricated reviews, or
              deceptive marketing claims
            </li>
            <li>
              Using AI outputs in <strong className="text-slate-700">regulatory or legal filings</strong> without human review and
              sign-off
            </li>
            <li>
              Any use that would breach <strong className="text-slate-700">GDPR</strong>, local data protection laws, or the
              company&apos;s existing privacy policy
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 4. Data Classification & Handling Rules */}
        <section id="data-classification" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 4
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Data Classification &amp; Handling Rules
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl bg-[#eae6e1]">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-[#d9d4ce]">
                  <th className="px-6 py-4 font-semibold text-slate-800">Data Category</th>
                  <th className="px-6 py-4 font-semibold text-slate-800">Examples</th>
                  <th className="px-6 py-4 font-semibold text-slate-800">
                    Can it be entered into external AI?
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-500">
                <tr className="border-b border-[#d9d4ce]">
                  <td className="px-6 py-4 font-semibold text-slate-700">Public</td>
                  <td className="px-6 py-4">Published property listings, blog posts</td>
                  <td className="px-6 py-4">Yes</td>
                </tr>
                <tr className="border-b border-[#d9d4ce]">
                  <td className="px-6 py-4 font-semibold text-slate-700">Internal</td>
                  <td className="px-6 py-4">Meeting notes, internal process docs</td>
                  <td className="px-6 py-4">With caution &mdash; strip any PII or financials</td>
                </tr>
                <tr className="border-b border-[#d9d4ce]">
                  <td className="px-6 py-4 font-semibold text-slate-700">Confidential</td>
                  <td className="px-6 py-4">
                    Pricing models, revenue data, investor terms, contracts
                  </td>
                  <td className="px-6 py-4">No</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-700">Restricted / PII</td>
                  <td className="px-6 py-4">
                    Customer names, emails, passport data, payment info, CRM records
                  </td>
                  <td className="px-6 py-4">Absolutely not</td>
                </tr>
              </tbody>
            </table>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 5. CRM & Sales Lead-Specific Rules */}
        <section id="crm-sales-rules" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 5
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              CRM &amp; Sales Lead&ndash;Specific Rules
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              Staff must <strong className="text-slate-700">never copy-paste HubSpot contact records, deal details, or pipeline
              data</strong> into public AI tools
            </li>
            <li>
              If AI assistance is needed for lead qualification or sales scripting, use{" "}
              <strong className="text-slate-700">anonymised or fictional examples</strong> only
            </li>
            <li>
              Any AI tool that integrates directly with HubSpot (e.g. via API) must be{" "}
              <strong className="text-slate-700">vetted and approved</strong> by IT/compliance before deployment
            </li>
            <li>
              AI-generated sales emails or follow-ups must be{" "}
              <strong className="text-slate-700">reviewed by the sender</strong> before being sent &mdash; staff remain personally
              accountable for accuracy and tone
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 6. GDPR & European Data Protection Compliance */}
        <section id="gdpr-compliance" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 6
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              GDPR &amp; European Data Protection Compliance
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              Remind staff that most external AI platforms process data outside the EEA, which raises{" "}
              <strong className="text-slate-700">data transfer concerns</strong> under GDPR
            </li>
            <li>No customer data should be used to train third-party AI models</li>
            <li>
              The company&apos;s Data Protection Officer (or equivalent) must approve any new AI tool
              that will process personal data
            </li>
            <li>
              Customers have the right to know if AI has been used in communications or decisions
              affecting them &mdash; staff should be prepared to disclose this if asked
            </li>
            <li>
              Maintain a <strong className="text-slate-700">register of approved AI tools</strong> with notes on their data
              processing agreements and compliance status
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 7. Accuracy, Accountability & Human Oversight */}
        <section id="accuracy-accountability" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 7
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Accuracy, Accountability &amp; Human Oversight
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              AI outputs are <strong className="text-slate-700">starting points, not final products</strong> &mdash; all content
              must be reviewed by a qualified human before use
            </li>
            <li>
              Staff are responsible for <strong className="text-slate-700">fact-checking</strong> AI-generated content, especially
              property details, legal references, pricing, and regulatory claims
            </li>
            <li>
              AI must not be used as the <strong className="text-slate-700">sole basis for decisions</strong> affecting customers
              (e.g. lead scoring, credit assessments, contract terms)
            </li>
            <li>
              Any AI-generated content shared externally should be reviewed for{" "}
              <strong className="text-slate-700">brand consistency and legal accuracy</strong>
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 8. Intellectual Property & Confidentiality */}
        <section id="intellectual-property" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 8
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Intellectual Property &amp; Confidentiality
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              Anything entered into an external AI tool should be treated as{" "}
              <strong className="text-slate-700">potentially visible to the provider</strong> &mdash; assume it is not private
            </li>
            <li>
              Do not input <strong className="text-slate-700">trade secrets</strong>, proprietary algorithms, or competitive
              intelligence
            </li>
            <li>
              Be aware that AI-generated content may not be copyrightable in all jurisdictions &mdash;
              do not assume ownership
            </li>
            <li>
              If using AI for property photography editing or virtual staging, ensure outputs are
              clearly labelled as <strong className="text-slate-700">AI-generated or enhanced</strong>
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 9. Approved Tools & Governance */}
        <section id="approved-tools" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 9
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Approved Tools &amp; Governance
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              Maintain a <strong className="text-slate-700">whitelist of approved AI tools</strong> with version, tier (free vs.
              enterprise), and approved use cases
            </li>
            <li>
              Enterprise/team plans with data processing agreements (e.g. ChatGPT Enterprise, Claude
              for Work, Gemini for Workspace) are <strong className="text-slate-700">preferred</strong> over free-tier consumer
              accounts
            </li>
            <li>
              New tools must go through an <strong className="text-slate-700">approval process</strong> involving IT,
              legal/compliance, and the DPO before adoption
            </li>
            <li>Shadow AI (unapproved tool usage) is a policy violation</li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 10. Training & Awareness */}
        <section id="training-awareness" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 10
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Training &amp; Awareness
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              All staff must complete <strong className="text-slate-700">AI awareness training</strong> before using AI tools for
              work
            </li>
            <li>Annual refresher training covering new tools, emerging risks, and policy updates</li>
            <li>
              Department-specific guidance for <strong className="text-slate-700">sales, marketing, and operations</strong> teams
            </li>
            <li>
              A clear internal point of contact (e.g. AI Champion or Compliance Lead) for questions
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 11. Monitoring, Enforcement & Incident Response */}
        <section id="monitoring-enforcement" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 11
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Monitoring, Enforcement &amp; Incident Response
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              The company reserves the right to <strong className="text-slate-700">audit AI tool usage</strong> in line with its
              IT acceptable use policy
            </li>
            <li>
              Policy breaches will be handled through the{" "}
              <strong className="text-slate-700">existing disciplinary framework</strong>
            </li>
            <li>
              If a data breach occurs involving AI (e.g. customer PII entered into an external tool),
              the <strong className="text-slate-700">incident response and GDPR breach notification procedures</strong> apply
            </li>
            <li>
              Staff must <strong className="text-slate-700">report suspected breaches</strong> immediately to their line manager
              and the DPO
            </li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 12. Policy Review */}
        <section id="policy-review" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 12
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Policy Review
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>
              This policy will be reviewed <strong className="text-slate-700">at least every six months</strong> given the pace of
              AI development
            </li>
            <li>
              Feedback from staff is welcomed and should be directed to [designated contact]
            </li>
            <li>Version control and change log to be maintained</li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Further Reading */}
        <section id="further-reading" className="scroll-mt-24 space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              RESOURCES
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Further Reading
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Understanding how each AI platform handles your data is essential. The links below
              provide official guidance from each provider on data privacy, security, and
              enterprise usage.
            </p>
          </div>

          {/* OpenAI */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] font-semibold text-slate-800">OpenAI (ChatGPT)</p>
            <div className="mt-3 h-0.5 w-8 bg-[#326354]" />
            <ul className="mt-4 list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
              <li>
                <a
                  href="https://openai.com/enterprise-privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Enterprise Privacy at OpenAI
                </a>{" "}
                &mdash; How OpenAI handles business data, model training opt-outs, and encryption
              </li>
              <li>
                <a
                  href="https://openai.com/business-data/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Business Data Privacy, Security &amp; Compliance
                </a>{" "}
                &mdash; Overview of data residency, retention controls, and compliance certifications
              </li>
              <li>
                <a
                  href="https://openai.com/policies/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  OpenAI Terms &amp; Policies Hub
                </a>{" "}
                &mdash; Full index of terms of use, privacy policy, and data processing agreements
              </li>
            </ul>
          </div>

          {/* Anthropic */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] font-semibold text-slate-800">Anthropic (Claude)</p>
            <div className="mt-3 h-0.5 w-8 bg-[#326354]" />
            <ul className="mt-4 list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
              <li>
                <a
                  href="https://privacy.claude.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Anthropic Privacy Center
                </a>{" "}
                &mdash; Central hub for Claude&apos;s data handling policies across consumer and
                commercial plans
              </li>
              <li>
                <a
                  href="https://www.anthropic.com/news/updates-to-our-consumer-terms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Updates to Consumer Terms and Privacy Policy
                </a>{" "}
                &mdash; Key 2025 changes to data training, retention, and the distinction between
                consumer and commercial accounts
              </li>
              <li>
                <a
                  href="https://support.anthropic.com/en/collections/4078534-privacy-legal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Anthropic Privacy &amp; Legal Help Center
                </a>{" "}
                &mdash; FAQs on certifications, data requests, and commercial terms
              </li>
            </ul>
          </div>

          {/* Google */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] font-semibold text-slate-800">Google (Gemini)</p>
            <div className="mt-3 h-0.5 w-8 bg-[#326354]" />
            <ul className="mt-4 list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
              <li>
                <a
                  href="https://support.google.com/a/answer/15706919?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Generative AI in Google Workspace Privacy Hub
                </a>{" "}
                &mdash; How Gemini handles enterprise data, model training, and data access controls
              </li>
              <li>
                <a
                  href="https://workspace.google.com/security/ai-privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Gemini Security, Compliance &amp; Privacy
                </a>{" "}
                &mdash; Overview of certifications (ISO 42001, FedRAMP, HIPAA) and enterprise security
                controls
              </li>
              <li>
                <a
                  href="https://support.google.com/a/answer/14130944?hl=en&co=DASHER._Family%3DBusiness-Enterprise"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#326354] transition hover:text-[#2a5044]"
                >
                  Gemini for Google Workspace FAQ (Business / Enterprise)
                </a>{" "}
                &mdash; Detailed FAQ covering data governance, human review policies, and the
                difference between consumer and Workspace tiers
              </li>
            </ul>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Important Note */}
        <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
          <p className="text-[14px] leading-[1.7] text-slate-500">
            <strong className="text-slate-800">Important Note:</strong> Free-tier and consumer
            accounts on all three platforms offer significantly weaker data protections than enterprise
            or commercial plans. In many cases, data entered into free accounts may be used for model
            training. This policy strongly recommends that only approved enterprise-tier plans are used
            for any work-related activity.
          </p>
        </div>

        {/* Version */}
        <p className="text-center text-[12px] italic text-slate-400">
          Policy Version: 1.0 | Date: February 2026 | Next Review: July 2026
        </p>
      </div>
    </div>
  );
}
