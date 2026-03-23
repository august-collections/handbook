import Link from "next/link";

const tocItems = [
  { label: "Purpose", anchor: "#purpose" },
  { label: "Core Hospitality Systems", anchor: "#hospitality" },
  { label: "Productivity & Office", anchor: "#productivity" },
  { label: "Communication & Collaboration", anchor: "#communication" },
  { label: "Finance & Accounting", anchor: "#finance" },
  { label: "Human Resources & People", anchor: "#hr" },
  { label: "Security & IT Management", anchor: "#security" },
  { label: "Website & Marketing", anchor: "#marketing" },
  { label: "Housekeeping & Operations", anchor: "#operations" },
  { label: "Requesting a New Application", anchor: "#requesting" },
  { label: "Responsibilities", anchor: "#responsibilities" },
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

export default function ApplicationsPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section id="top" className="flex scroll-mt-24 flex-col items-center gap-3 px-6 pb-6 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/it-support" className="text-slate-400 transition hover:text-slate-600">IT &amp; SUPPORT</Link>
          &nbsp;/&nbsp;
          APPLICATIONS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Applications
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Approved software &amp; tools for work.
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

        {/* Purpose */}
        <section id="purpose" className="scroll-mt-24 space-y-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            PURPOSE
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Purpose
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            This guidance sets out the software applications approved for use across the business. All staff are expected to use only approved applications for work-related activities. This protects our guests&apos; data, keeps us compliant with <a href="https://www.legislation.gov.uk/eur/2016/679/contents" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">UK General Data Protection Regulation (GDPR)</a> and <a href="https://www.pcisecuritystandards.org/standards/pci-dss/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">PCI Data Security Standard (PCI DSS)</a>, and ensures IT can support you effectively.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Note that any web site users or Homeowners that reside in the State of California are eligible to have their data protected under the <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">California Consumer Privacy Act (CCPA)</a>.
          </p>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Core Hospitality Systems */}
        <section id="hospitality" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            CORE SYSTEMS
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Core Hospitality Systems
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            These are the operational systems that run our properties. Access is granted by role, and training must be completed before use.
          </p>
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <a href="https://atelier.augustcollections.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Atelier</strong></a>, <strong className="text-slate-700">Property Management System (PMS)</strong> — this is the single source of truth for reservations, guest profiles, check-in/check-out, and room inventory. Staff must never export guest data to personal devices or unapproved tools.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Revenue Management</strong> — access is limited to Revenue Management and senior commercial leadership.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Productivity & Office */}
        <section id="productivity" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            PRODUCTIVITY
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Productivity &amp; Office
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <a href="https://workspace.google.com/intl/en_uk/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Google Workspace</strong></a> is our standard productivity suite.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            This includes Gmail for email and calendaring, Google Docs, Sheets, Slides, and <a href="https://drive.google.com/drive/shared-drives" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Google Drive</a> for file storage. All work documents must be created and stored within Google Workspace.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Staff should not use personal email accounts (Gmail, AppleID, or similar) for any work communication.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Learn more from the <a href="https://docs.google.com/presentation/d/1fc7RZff8B_PX8e4tIQ6lqOn3gPsz_7lJsJ7Z8hui2bM/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">How To: Google Workspace at August</a>.
          </p>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Communication & Collaboration */}
        <section id="communication" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            COMMUNICATION
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Communication &amp; Collaboration
          </h2>
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Slack</strong> is our primary tool for internal messaging, collaboration, and communication. All work-related chat and team coordination should take place in Slack. <span className="text-[#c53030]">Staff may not use WhatsApp, Telegram, or similar consumer messaging apps for sharing guest information, financial data, or any sensitive business content.</span>
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Google Meet</strong> — used for video calls and meetings, accessed through Google Calendar. External meetings with suppliers or partners must be conducted through Google Meet where possible.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Finance & Accounting */}
        <section id="finance" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            FINANCE
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Finance &amp; Accounting
          </h2>
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <a href="https://www.xero.com/uk/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Xero</strong></a> is our accounting platform, managed by the Finance team. Access is strictly role-based and requires Finance Director approval.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <a href="https://app.approvalmax.com/login" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>ApprovalMax</strong></a> is used for purchase order and invoice approval workflows. All approvals must go through ApprovalMax — not email or informal sign-off.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <a href="https://sso.revolut.com/signin" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Revolut</strong></a> and <a href="https://dashboard.stripe.com/login" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Stripe</strong></a> are the approved platforms for payments and transactions. No financial data — including invoices, payroll information, or bank details — should be processed outside these approved systems.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Human Resources & People */}
        <section id="hr" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            HR &amp; PEOPLE
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Human Resources &amp; People
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <a href="https://secure.employmenthero.com/users/quick_sign_in" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Employment Hero</strong></a> is our HR platform, used for leave requests, personal details, payroll queries, onboarding, and performance management. Staff must keep their personal information current in the system. Managers must use Employment Hero — not email or spreadsheets — for absence tracking and approvals.
          </p>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Security & IT Management */}
        <section id="security" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECURITY
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Security &amp; IT Management
          </h2>
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Endpoint protection</strong> — all company-issued devices run <a href="https://heimdalsecurity.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Heimdal</a> for endpoint detection and security. Staff must not disable, uninstall, or interfere with security software.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Password management</strong> — <a href="https://1password.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password</a> Business is the company password manager. Staff are required to use 1Password for all work credentials. Storing passwords in browsers, sticky notes, or personal password tools is not permitted.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Multi-factor authentication (<a href="https://docs.cloud.google.com/docs/authentication/mfa-requirement" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">MFA</a>)</strong> — MFA is mandatory on all business applications that support it. Staff must enrol using an approved authenticator app. SMS-based MFA is acceptable only where no alternative exists.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Mobile Device Management (MDM)</strong> — if you access work email or applications on a personal phone or tablet, the device must be enrolled in <a href="https://portal.officeready.tech/portal/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Office Ready</a>. This allows IT to remotely wipe work data if the device is lost or stolen, without affecting personal content.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Website & Marketing */}
        <section id="marketing" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            MARKETING
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Website &amp; Marketing
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <a href="https://webflow.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Webflow</strong></a> is our content management system for the company website. Only authorised staff may make changes to live content, and changes require sign-off from the Marketing Manager or above. Access credentials must be stored in 1Password and never shared informally.
          </p>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Housekeeping & Operations */}
        <section id="operations" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            OPERATIONS
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Housekeeping &amp; Operations
          </h2>
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Papillon</strong> is the approved housekeeping management tool. Task assignment and completion tracking must be done in Papillon, not via personal messaging.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <a href="https://atelier.augustcollections.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong>Atelier</strong></a> is used alongside Papillon for operations management. Staff should access Atelier through the link provided and ensure all operational activity is logged within the platform.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Requesting a New Application */}
        <section id="requesting" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            REQUESTS
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Requesting a New Application
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            If you need a tool that isn&apos;t on the approved list, you&apos;re welcome to request it. Here&apos;s how:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="mb-1 text-[13px] font-semibold text-slate-700">Step 1</p>
              <p className="text-[14px] leading-[1.8] text-slate-500">
                Submit a request to IT <a href="https://augustcollections.atlassian.net/servicedesk/customer/portal/1/create/141" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">via the service desk</a> (or email IT directly), describing what the tool does, why you need it, and what approved tools you&apos;ve already considered.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="mb-1 text-[13px] font-semibold text-slate-700">Step 2</p>
              <p className="text-[14px] leading-[1.8] text-slate-500">
                IT will assess the application against security, data protection, integration, and cost criteria. For tools that handle personal data, the Data Protection Officer will conduct a Data Protection Impact Assessment (DPIA) where required.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="mb-1 text-[13px] font-semibold text-slate-700">Step 3</p>
              <p className="text-[14px] leading-[1.8] text-slate-500">
                You&apos;ll receive a decision within <strong className="text-slate-700">10 working days</strong>. If approved, IT will handle procurement, configuration, and onboarding. If declined, IT will suggest an approved alternative.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="mb-1 text-[13px] font-semibold text-slate-700">Step 4</p>
              <p className="text-[14px] leading-[1.8] text-slate-500">
                Installing software on company devices without IT approval is not permitted. If IT discovers unapproved software, it will be removed and the staff member&apos;s line manager will be notified.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Responsibilities */}
        <section id="responsibilities" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            RESPONSIBILITIES
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Responsibilities
          </h2>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Staff Responsibilities</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Use only approved applications for work. Do not install 3rd party software.</li>
              <li>Do not create accounts on third-party services using your work email address unless the tool is approved.</li>
              <li>Report any suspected security issue — including phishing emails, unusual app behaviour, or lost devices — to IT immediately.</li>
              <li>Keep applications updated; where IT pushes updates automatically, do not defer or cancel them.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Manager Responsibilities</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Ensure your team is aware of which applications are approved for their role.</li>
              <li>Do not authorise workarounds that bypass approved tools, even under time pressure.</li>
              <li>Escalate any software needs through the formal request process so IT can maintain visibility and control.</li>
            </ul>
          </div>

          <BackToTop />
        </section>
      </div>
    </div>
  );
}
