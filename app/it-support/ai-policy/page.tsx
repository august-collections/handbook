export default function AIPolicyPage() {
  return (
    <div id="top" className="mt-4 space-y-10">
      <header>
        <h1 className="text-3xl font-semibold text-slate-800">AI Usage Policy</h1>
      </header>

      {/* Introduction */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 className="text-2xl font-semibold text-slate-800">Introduction</h2>
        <p>
          Tools like ChatGPT, Gemini, and Claude are already helping teams across our
          organisation work faster, communicate more effectively, and make better-informed decisions
          &mdash; from drafting property descriptions and marketing copy to summarising customer
          interactions and streamlining internal processes.
        </p>
        <p>
          However, as a company with many Homeowners, we hold a
          position of significant trust. Our customers share sensitive information with us.
          Mishandling this information could expose the company and staff to serious legal,
          regulatory, and reputational risk.
        </p>
        <p>
          While AI platforms are powerful, they are not private by default. When staff enter
          information into an external AI tool, that data may be stored, processed, or even used to
          train future AI models. Models that may be outside the European Economic Area and beyond
          the protections of GDPR. A single prompt containing customer information may constitute a
          data breach under European law.
        </p>
        <p>
          This policy exists to ensure that every member of the August Collections, RIO, and ANAM
          teams can use AI confidently and productively, while protecting our customers, our
          business, and our regulatory standing. This policy sets clear boundaries on what can and
          cannot be shared with AI tools, establishes rules for handling customer and company data,
          and defines the responsibilities that come with using these technologies in a professional
          context.
        </p>
        <p className="font-semibold text-slate-800">
          Every staff member is expected to read, understand, and follow this policy. If you are
          unsure whether a particular use of AI is appropriate, ask before you act.
        </p>

        {/* Table of Contents */}
        <nav className="mt-6">
          <h3 className="text-lg font-semibold text-slate-800">Contents</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <a href="#purpose-scope" className="text-[#326354] hover:text-[#2a5044]">
                Purpose &amp; Scope
              </a>
            </li>
            <li>
              <a href="#permitted-uses" className="text-[#326354] hover:text-[#2a5044]">
                Permitted Uses
              </a>
            </li>
            <li>
              <a href="#prohibited-uses" className="text-[#326354] hover:text-[#2a5044]">
                Prohibited Uses
              </a>
            </li>
            <li>
              <a href="#data-classification" className="text-[#326354] hover:text-[#2a5044]">
                Data Classification &amp; Handling Rules
              </a>
            </li>
            <li>
              <a href="#crm-sales-rules" className="text-[#326354] hover:text-[#2a5044]">
                CRM &amp; Sales Lead&ndash;Specific Rules
              </a>
            </li>
            <li>
              <a href="#gdpr-compliance" className="text-[#326354] hover:text-[#2a5044]">
                GDPR &amp; European Data Protection Compliance
              </a>
            </li>
            <li>
              <a href="#accuracy-accountability" className="text-[#326354] hover:text-[#2a5044]">
                Accuracy, Accountability &amp; Human Oversight
              </a>
            </li>
            <li>
              <a href="#intellectual-property" className="text-[#326354] hover:text-[#2a5044]">
                Intellectual Property &amp; Confidentiality
              </a>
            </li>
            <li>
              <a href="#approved-tools" className="text-[#326354] hover:text-[#2a5044]">
                Approved Tools &amp; Governance
              </a>
            </li>
            <li>
              <a href="#training-awareness" className="text-[#326354] hover:text-[#2a5044]">
                Training &amp; Awareness
              </a>
            </li>
            <li>
              <a href="#monitoring-enforcement" className="text-[#326354] hover:text-[#2a5044]">
                Monitoring, Enforcement &amp; Incident Response
              </a>
            </li>
            <li>
              <a href="#policy-review" className="text-[#326354] hover:text-[#2a5044]">
                Policy Review
              </a>
            </li>
          </ol>
        </nav>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 1. Purpose & Scope */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="purpose-scope" className="text-2xl font-semibold text-slate-800">1. Purpose &amp; Scope</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Why the policy exists:</strong> to enable productive AI use while protecting the
            company, its customers, and its reputation
          </li>
          <li>
            <strong>Who it applies to:</strong> all employees, contractors, and third-party agents
            across all departments (sales, marketing, operations, legal, finance, customer service)
          </li>
          <li>
            <strong>Which tools it covers:</strong> ChatGPT, Gemini, Claude, Copilot, and any future
            generative AI platforms &mdash; including browser extensions and integrations
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 2. Permitted Uses */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="permitted-uses" className="text-2xl font-semibold text-slate-800">2. Permitted Uses</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Drafting and refining marketing copy, property descriptions, and sales communications</li>
          <li>Summarising internal documents, meeting notes, and reports</li>
          <li>Generating first-draft emails, proposals, and customer FAQs</li>
          <li>Brainstorming ideas for campaigns, pricing strategies, and operational improvements</li>
          <li>Coding assistance, spreadsheet formulas, and workflow automation</li>
          <li>General research on markets, regulations, and competitors</li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 3. Prohibited Uses */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="prohibited-uses" className="text-2xl font-semibold text-slate-800">3. Prohibited Uses</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Uploading personally identifiable information (PII)</strong> of customers or
            leads into any external AI platform &mdash; this includes names, email addresses, phone
            numbers, passport details, financial information, and property ownership records
          </li>
          <li>
            <strong>Pasting CRM data</strong> (HubSpot exports, lead lists, deal pipelines) into AI
            tools not contractually approved for data processing
          </li>
          <li>
            <strong>Sharing proprietary business data</strong> such as pricing models, revenue
            figures, commission structures, investor terms, or legal agreements
          </li>
          <li>
            Using AI to make or communicate <strong>binding commitments</strong> to customers (e.g.
            pricing guarantees, legal interpretations of ownership contracts)
          </li>
          <li>
            Generating <strong>misleading property descriptions</strong>, fabricated reviews, or
            deceptive marketing claims
          </li>
          <li>
            Using AI outputs in <strong>regulatory or legal filings</strong> without human review and
            sign-off
          </li>
          <li>
            Any use that would breach <strong>GDPR</strong>, local data protection laws, or the
            company&apos;s existing privacy policy
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 4. Data Classification & Handling Rules */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="data-classification" className="text-2xl font-semibold text-slate-800">
          4. Data Classification &amp; Handling Rules
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-3 pr-4 font-semibold text-slate-800">Data Category</th>
                <th className="py-3 pr-4 font-semibold text-slate-800">Examples</th>
                <th className="py-3 font-semibold text-slate-800">
                  Can it be entered into external AI?
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-200">
                <td className="py-3 pr-4 font-semibold">Public</td>
                <td className="py-3 pr-4">Published property listings, blog posts</td>
                <td className="py-3">Yes</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-3 pr-4 font-semibold">Internal</td>
                <td className="py-3 pr-4">Meeting notes, internal process docs</td>
                <td className="py-3">With caution &mdash; strip any PII or financials</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-3 pr-4 font-semibold">Confidential</td>
                <td className="py-3 pr-4">
                  Pricing models, revenue data, investor terms, contracts
                </td>
                <td className="py-3">No</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Restricted / PII</td>
                <td className="py-3 pr-4">
                  Customer names, emails, passport data, payment info, CRM records
                </td>
                <td className="py-3">Absolutely not</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 5. CRM & Sales Lead–Specific Rules */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="crm-sales-rules" className="text-2xl font-semibold text-slate-800">
          5. CRM &amp; Sales Lead&ndash;Specific Rules
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Staff must <strong>never copy-paste HubSpot contact records, deal details, or pipeline
            data</strong> into public AI tools
          </li>
          <li>
            If AI assistance is needed for lead qualification or sales scripting, use{" "}
            <strong>anonymised or fictional examples</strong> only
          </li>
          <li>
            Any AI tool that integrates directly with HubSpot (e.g. via API) must be{" "}
            <strong>vetted and approved</strong> by IT/compliance before deployment
          </li>
          <li>
            AI-generated sales emails or follow-ups must be{" "}
            <strong>reviewed by the sender</strong> before being sent &mdash; staff remain personally
            accountable for accuracy and tone
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 6. GDPR & European Data Protection Compliance */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="gdpr-compliance" className="text-2xl font-semibold text-slate-800">
          6. GDPR &amp; European Data Protection Compliance
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Remind staff that most external AI platforms process data outside the EEA, which raises{" "}
            <strong>data transfer concerns</strong> under GDPR
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
            Maintain a <strong>register of approved AI tools</strong> with notes on their data
            processing agreements and compliance status
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 7. Accuracy, Accountability & Human Oversight */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="accuracy-accountability" className="text-2xl font-semibold text-slate-800">
          7. Accuracy, Accountability &amp; Human Oversight
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            AI outputs are <strong>starting points, not final products</strong> &mdash; all content
            must be reviewed by a qualified human before use
          </li>
          <li>
            Staff are responsible for <strong>fact-checking</strong> AI-generated content, especially
            property details, legal references, pricing, and regulatory claims
          </li>
          <li>
            AI must not be used as the <strong>sole basis for decisions</strong> affecting customers
            (e.g. lead scoring, credit assessments, contract terms)
          </li>
          <li>
            Any AI-generated content shared externally should be reviewed for{" "}
            <strong>brand consistency and legal accuracy</strong>
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 8. Intellectual Property & Confidentiality */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="intellectual-property" className="text-2xl font-semibold text-slate-800">
          8. Intellectual Property &amp; Confidentiality
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Anything entered into an external AI tool should be treated as{" "}
            <strong>potentially visible to the provider</strong> &mdash; assume it is not private
          </li>
          <li>
            Do not input <strong>trade secrets</strong>, proprietary algorithms, or competitive
            intelligence
          </li>
          <li>
            Be aware that AI-generated content may not be copyrightable in all jurisdictions &mdash;
            do not assume ownership
          </li>
          <li>
            If using AI for property photography editing or virtual staging, ensure outputs are
            clearly labelled as <strong>AI-generated or enhanced</strong>
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 9. Approved Tools & Governance */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="approved-tools" className="text-2xl font-semibold text-slate-800">
          9. Approved Tools &amp; Governance
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Maintain a <strong>whitelist of approved AI tools</strong> with version, tier (free vs.
            enterprise), and approved use cases
          </li>
          <li>
            Enterprise/team plans with data processing agreements (e.g. ChatGPT Enterprise, Claude
            for Work, Gemini for Workspace) are <strong>preferred</strong> over free-tier consumer
            accounts
          </li>
          <li>
            New tools must go through an <strong>approval process</strong> involving IT,
            legal/compliance, and the DPO before adoption
          </li>
          <li>Shadow AI (unapproved tool usage) is a policy violation</li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 10. Training & Awareness */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="training-awareness" className="text-2xl font-semibold text-slate-800">10. Training &amp; Awareness</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            All staff must complete <strong>AI awareness training</strong> before using AI tools for
            work
          </li>
          <li>Annual refresher training covering new tools, emerging risks, and policy updates</li>
          <li>
            Department-specific guidance for <strong>sales, marketing, and operations</strong> teams
          </li>
          <li>
            A clear internal point of contact (e.g. AI Champion or Compliance Lead) for questions
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 11. Monitoring, Enforcement & Incident Response */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="monitoring-enforcement" className="text-2xl font-semibold text-slate-800">
          11. Monitoring, Enforcement &amp; Incident Response
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            The company reserves the right to <strong>audit AI tool usage</strong> in line with its
            IT acceptable use policy
          </li>
          <li>
            Policy breaches will be handled through the{" "}
            <strong>existing disciplinary framework</strong>
          </li>
          <li>
            If a data breach occurs involving AI (e.g. customer PII entered into an external tool),
            the <strong>incident response and GDPR breach notification procedures</strong> apply
          </li>
          <li>
            Staff must <strong>report suspected breaches</strong> immediately to their line manager
            and the DPO
          </li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* 12. Policy Review */}
      <section className="space-y-4 text-sm text-slate-600">
        <h2 id="policy-review" className="text-2xl font-semibold text-slate-800">12. Policy Review</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            This policy will be reviewed <strong>at least every six months</strong> given the pace of
            AI development
          </li>
          <li>
            Feedback from staff is welcomed and should be directed to [designated contact]
          </li>
          <li>Version control and change log to be maintained</li>
        </ul>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* Further Reading */}
      <section className="space-y-6 text-sm text-slate-600">
        <h2 className="text-2xl font-semibold text-slate-800">
          Further Reading: AI Platform Privacy &amp; Data Policies
        </h2>
        <p>
          Understanding how each AI platform handles your data is essential. The links below open in
          a new tab and provide official guidance from each provider on data privacy, security, and
          enterprise usage.
        </p>

        {/* OpenAI */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-800">OpenAI (ChatGPT)</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                href="https://openai.com/enterprise-privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
              >
                Enterprise Privacy at OpenAI
              </a>{" "}
              &mdash; How OpenAI handles business data, model training opt-outs, and encryption
            </li>
            <li>
              <a
                href="https://openai.com/business-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
              >
                Business Data Privacy, Security &amp; Compliance
              </a>{" "}
              &mdash; Overview of data residency, retention controls, and compliance certifications
            </li>
            <li>
              <a
                href="https://openai.com/policies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
              >
                OpenAI Terms &amp; Policies Hub
              </a>{" "}
              &mdash; Full index of terms of use, privacy policy, and data processing agreements
            </li>
          </ul>
        </div>

        {/* Anthropic */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-800">Anthropic (Claude)</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                href="https://privacy.claude.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
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
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
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
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
              >
                Anthropic Privacy &amp; Legal Help Center
              </a>{" "}
              &mdash; FAQs on certifications, data requests, and commercial terms
            </li>
          </ul>
        </div>

        {/* Google */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-800">Google (Gemini)</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                href="https://support.google.com/a/answer/15706919?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
              >
                Generative AI in Google Workspace Privacy Hub
              </a>{" "}
              &mdash; How Gemini handles enterprise data, model training, and data access controls
            </li>
            <li>
              <a
                href="https://workspace.google.com/security/ai-privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
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
                rel="noopener noreferrer"
                className="text-[#326354] hover:text-[#2a5044]"
              >
                Gemini for Google Workspace FAQ (Business / Enterprise)
              </a>{" "}
              &mdash; Detailed FAQ covering data governance, human review policies, and the
              difference between consumer and Workspace tiers
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-t-[0.7px] border-slate-300" />

      {/* Important Note */}
      <div className="rounded-3xl bg-white p-8 text-sm text-slate-600">
        <p>
          <strong className="text-slate-800">Important Note:</strong> Free-tier and consumer
          accounts on all three platforms offer significantly weaker data protections than enterprise
          or commercial plans. In many cases, data entered into free accounts may be used for model
          training. This policy strongly recommends that only approved enterprise-tier plans are used
          for any work-related activity.
        </p>
      </div>

      {/* Back to Top */}
      <div className="flex justify-center">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
        >
          Back to Top
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M10 2.5L16.25 8.75L15.3687 9.63125L10.625 4.89375L10.625 17.5L9.375 17.5L9.375 4.89375L4.63125 9.63125L3.75 8.75L10 2.5Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Version */}
      <p className="text-xs italic text-slate-400">
        Policy Version: 1.0 | Date: February 2026 | Next Review: July 2026
      </p>
    </div>
  );
}
