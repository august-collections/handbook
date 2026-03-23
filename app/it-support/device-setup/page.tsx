import Link from "next/link";

const tocItems = [
  { label: "Before You Start", anchor: "#before-you-start" },
  { label: "Setting Up Your Email", anchor: "#email-setup" },
  { label: "Google Workspace — Signing In", anchor: "#google-workspace" },
  { label: "1Password — Password Manager", anchor: "#1password" },
  { label: "HubSpot — CRM Access", anchor: "#hubspot" },
  { label: "Security Basics", anchor: "#security" },
  { label: "Getting Help", anchor: "#getting-help" },
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

export default function DeviceSetupPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section id="top" className="flex scroll-mt-24 flex-col items-center gap-3 px-6 pb-6 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/it-support" className="text-slate-400 transition hover:text-slate-600">IT &amp; SUPPORT</Link>
          &nbsp;/&nbsp;
          DEVICE SETUP
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Device Setup &amp; Configuration
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          New starter guide for all staff — MacOS &amp; Windows.
        </p>
        <p className="text-center text-[11px] leading-[1.7] text-slate-300">
          Version 1.0 &nbsp;|&nbsp; March 2026 &nbsp;|&nbsp; Confidential — Internal Use Only
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

        {/* 1. Before You Start */}
        <section id="before-you-start" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 1
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Before You Start
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Welcome! This guide will walk you through setting up your company laptop and key applications step by step. You do not need any technical experience — just follow the instructions in order.
          </p>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">What IT Has Already Done for You</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Created your Google Workspace account (your company email address)</li>
              <li>Set up your 1Password account</li>
              <li>Created your HubSpot account (if your role requires it)</li>
              <li>Pre-configured your laptop with security software</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">What You Will Need</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Your company laptop (provided by IT)</li>
              <li>The welcome email sent to your personal email address — and may contain temporary password(s) for logging into different platforms and email</li>
              <li>A phone or tablet for two-factor authentication (2FA)</li>
              <li>About 30–45 minutes of uninterrupted time</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
            <p className="text-[14px] font-semibold leading-[1.8] text-slate-700">
              Important
            </p>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              If you have not received a welcome email from IT, please contact the IT Helpdesk before proceeding. Do not attempt to create accounts yourself.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 2. Setting Up Your Email */}
        <section id="email-setup" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 2
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Setting Up Your Email
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Your company email runs on Google Workspace. You can access it through a web browser, or through Outlook or Apple Mail on your laptop.
          </p>

          {/* Option A */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Option A: Gmail in the Browser (Easiest)</h3>
            <ol className="list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Open Google Chrome on your laptop.</li>
              <li>Go to <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">mail.google.com</a></li>
              <li>Enter your company email address (e.g. yourname@augustcollections.com) and click Next.</li>
              <li>Enter the temporary password from your welcome email and click Next.</li>
              <li>You will be asked to change your password. Choose a strong password (at least 12 characters, mixing letters, numbers, and symbols). Write it down temporarily until you set up 1Password (Section 4).</li>
              <li>You may be asked to set up 2-step verification. Follow the prompts to link your mobile phone.</li>
              <li>Your inbox will open. You are now set up!</li>
            </ol>
          </div>

          {/* Option B */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Option B: Microsoft Outlook (Windows)</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">If you prefer using the Outlook desktop app to manage your email:</p>
            <ol className="list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Open Outlook from the Start menu or taskbar.</li>
              <li>Click &ldquo;Add Account.&rdquo;</li>
              <li>Enter your company email address and click Connect.</li>
              <li>Outlook will detect Google. A Google sign-in window will appear. Enter your email and the password you set in Option A.</li>
              <li>Click &ldquo;Allow&rdquo; when Google asks for permission to let Outlook access your account.</li>
              <li>Outlook will sync your emails, calendar, and contacts. This may take a few minutes depending on mailbox size.</li>
            </ol>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Note:</strong> You must complete Option A first (sign in to Google and change your password) before you can set up Outlook.
              </p>
            </div>
          </div>

          {/* Option C */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Option C: Apple Mail (MacOS)</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">If you prefer using the built-in Mail app on your MacBook:</p>
            <ol className="list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Open System Settings (click the Apple logo in the top-left corner, then System Settings).</li>
              <li>Click &ldquo;Internet Accounts&rdquo; in the left sidebar.</li>
              <li>Click &ldquo;Add Account&rdquo; and select Google.</li>
              <li>Sign in with your company email address and the password you set in Option A.</li>
              <li>Tick the boxes for Mail, Contacts, Calendars, and Notes, then click Done.</li>
              <li>Open the Mail app from the Dock. Your company emails will begin to appear.</li>
            </ol>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
              <p className="text-[14px] leading-[1.8] text-slate-500">
                <strong className="text-slate-700">Note:</strong> You must complete Option A first before configuring Apple Mail.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 3. Google Workspace */}
        <section id="google-workspace" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 3
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Google Workspace — Signing In
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Google Workspace gives you access to Gmail, Google Drive, Google Docs, Sheets, Calendar, and Meet. All are accessed through your web browser.
          </p>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">First-Time Sign-In</h3>
            <ol className="list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Open Google Chrome.</li>
              <li>Go to <a href="https://workspace.google.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">workspace.google.com</a></li>
              <li>Click &ldquo;Sign In&rdquo; in the top-right corner.</li>
              <li>Enter your company email address and the password you created when you first signed into Gmail (Section 2, Option A).</li>
              <li>You are now signed in. Use the grid icon (nine dots) in the top-right corner of any Google page to switch between Gmail, Drive, Calendar, and other apps.</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Key Apps You Will Use</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-4">
                <p className="text-[14px] text-slate-500"><strong className="text-slate-700">Gmail</strong> — Your company email</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-4">
                <p className="text-[14px] text-slate-500"><strong className="text-slate-700">Google Calendar</strong> — Meetings and scheduling</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-4">
                <p className="text-[14px] text-slate-500"><strong className="text-slate-700">Google Drive</strong> — File storage and sharing</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-4">
                <p className="text-[14px] text-slate-500"><strong className="text-slate-700">Google Docs / Sheets / Slides</strong> — Creating and editing documents</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-4">
                <p className="text-[14px] text-slate-500"><strong className="text-slate-700">Google Meet</strong> — Video calls</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
            <p className="text-[14px] leading-[1.8] text-slate-500">
              <strong className="text-slate-700">Tip:</strong> Bookmark <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">drive.google.com</a> and <a href="https://calendar.google.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">calendar.google.com</a> for quick access. In Chrome, press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark a page.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 4. 1Password */}
        <section id="1password" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 4
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            1Password — Password Manager
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <a href="https://1password.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password</a> stores all your work passwords securely so you only need to remember one master password. IT has already created your account.
          </p>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Setting Up 1Password</h3>
            <ol className="list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Check your personal email for an invitation from 1Password. Click the &ldquo;Get Started&rdquo; link.</li>
              <li>Create your <strong className="text-slate-700">Master Password</strong>. This must be strong and memorable — it is the key to all your other passwords. Use a passphrase such as four or more random words (e.g. &ldquo;correct-horse-battery-staple&rdquo;). Write it down and store it somewhere safe at home.</li>
              <li>Download the <strong className="text-slate-700">Emergency Kit</strong> when prompted. Print it or save it somewhere secure (NOT on your laptop). This is your recovery method if you ever forget your master password.</li>
              <li>Install the browser extension. In Chrome, go to the Chrome Web Store and search for &ldquo;1Password.&rdquo; Click &ldquo;Add to Chrome.&rdquo;</li>
              <li>Install the desktop app. Go to <a href="https://1password.com/downloads" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1password.com/downloads</a> and download the app for your operating system (Windows or Mac). Install and sign in with your master password.</li>
              <li>Sign in to the browser extension. Click the 1Password icon in your browser toolbar and enter your master password.</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Using 1Password Day-to-Day</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>When you visit a login page, 1Password will offer to fill in your username and password automatically.</li>
              <li>When you create a new account, 1Password will offer to generate and save a strong password for you. Always accept this.</li>
              <li>Never share passwords by email, chat, or on paper. Use 1Password&apos;s secure sharing feature instead.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
            <p className="text-[14px] font-semibold leading-[1.8] text-slate-700">Important</p>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              Your Master Password cannot be reset by IT. If you forget it and have lost your Emergency Kit, you will be locked out. Store your Emergency Kit safely.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 5. HubSpot */}
        <section id="hubspot" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 5
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            HubSpot — CRM Access
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            HubSpot is our Customer Relationship Management (CRM) system. If your role requires CRM access, IT will have created an account for you.
          </p>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Signing In to HubSpot</h3>
            <ol className="list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Open Google Chrome and go to <a href="https://app.hubspot.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">app.hubspot.com</a></li>
              <li>Click &ldquo;Sign in with Google.&rdquo;</li>
              <li>Select your company Google account (the one you set up in Section 2).</li>
              <li>HubSpot will open. If it asks you to select a portal, choose the one that matches your company name.</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">If You Cannot Sign In</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Make sure you are using your company email address, not a personal Google account.</li>
              <li>If you see &ldquo;No account found,&rdquo; your role may not include HubSpot access. Contact IT to request access if you believe you need it.</li>
              <li>If you are asked for a password (not Google sign-in), check your welcome email for HubSpot-specific credentials.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
            <p className="text-[14px] leading-[1.8] text-slate-500">
              <strong className="text-slate-700">Note:</strong> Not all roles require HubSpot access. If you are unsure whether you need it, ask your line manager or contact IT.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 6. Security Basics */}
        <section id="security" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 6
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Security Basics
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Keeping your device and accounts secure protects our guests, staff, and business. Please follow these rules at all times.
          </p>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Screen Lock</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Always lock your laptop when you step away, even for a moment.</li>
              <li><strong className="text-slate-700">Windows:</strong> Press Windows key + L.</li>
              <li><strong className="text-slate-700">Mac:</strong> Press Control + Command + Q, or close the lid.</li>
              <li>Your laptop may auto-lock after 5 minutes of inactivity requiring you to login when you return.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Passwords</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Use 1Password for all work passwords — never reuse a personal password for work.</li>
              <li>Never share your password with anyone, including colleagues or managers.</li>
              <li>All passwords should be at least 12 characters long. Let 1Password generate them for you.</li>
              <li>Change your Google Workspace password immediately if you suspect it has been compromised.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Two-Factor Authentication (2FA)</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              Two-factor authentication adds a second layer of security by requiring a code from your phone when you sign in.
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>2FA is mandatory for Google Workspace, 1Password, and HubSpot.</li>
              <li>When prompted, use the Google Authenticator app or your phone&apos;s built-in authenticator.</li>
              <li>If you lose your phone, contact IT immediately so they can help you regain access.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Phishing and Suspicious Emails</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Be cautious of emails asking you to click links or provide passwords, even if they appear to be from a colleague or manager.</li>
              <li>Check the sender&apos;s email address carefully — fraudulent emails often use addresses that look similar to genuine ones.</li>
              <li>If in doubt, do not click. Forward the email to IT and ask them to verify.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-5">
            <p className="text-[14px] font-semibold leading-[1.8] text-slate-700">Golden Rule</p>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              If something looks suspicious or you are unsure, stop and contact IT. It is always better to ask than to risk a security incident. You will never be in trouble for asking.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 7. Getting Help */}
        <section id="getting-help" className="scroll-mt-24 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            SECTION 7
          </p>
          <h2
            className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Getting Help
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            If you get stuck at any point during setup or have questions later, contact the Product/IT team in Slack, or in person.
          </p>

          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">Common Issues &amp; Quick Fixes</h3>
            <div className="overflow-x-auto rounded-2xl bg-[#eae6e1]">
              <table className="w-full text-left text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-[#d9d4ce]">
                    <th className="px-5 py-3 font-semibold text-slate-800">Problem</th>
                    <th className="px-5 py-3 font-semibold text-slate-800">What to Do</th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3 font-semibold text-slate-700">Wi-Fi won&apos;t connect</td>
                    <td className="px-5 py-3">Restart your laptop and try again. If it still fails, check you have the correct network name and password from your welcome email.</td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3 font-semibold text-slate-700">Forgotten password</td>
                    <td className="px-5 py-3">Use the &ldquo;Forgot password&rdquo; link on the Google sign-in page, or contact IT.</td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3 font-semibold text-slate-700">Outlook won&apos;t sync</td>
                    <td className="px-5 py-3">Close Outlook, wait 30 seconds, and reopen it. If the problem continues, remove and re-add the account.</td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3 font-semibold text-slate-700">Locked out of 1Password</td>
                    <td className="px-5 py-3">Use your Emergency Kit to recover. If you have lost it, contact IT.</td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3 font-semibold text-slate-700">Laptop running slowly</td>
                    <td className="px-5 py-3">Restart your laptop. If it remains slow after restart, contact IT.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-semibold text-slate-700">Suspicious email received</td>
                    <td className="px-5 py-3">Do not click any links. Forward it to IT for review.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-5 text-center">
            <p
              className="text-[20px] font-semibold text-slate-800 sm:text-[24px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Welcome Aboard!
            </p>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
              You are all set. If you have followed each section of this guide, your laptop and key applications should be ready to use. Do not hesitate to reach out to IT if you need any further help — we are here to support you.
            </p>
          </div>
          <BackToTop />
        </section>
      </div>
    </div>
  );
}
