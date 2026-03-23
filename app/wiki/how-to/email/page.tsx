import Link from "next/link";

export default function EmailSetupPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki/how-to" className="text-slate-400 transition hover:text-slate-600">HOW TO</Link>
          &nbsp;/&nbsp;
          EMAIL SETUP
        </p>
        <h1
          className="text-center font-['Cormorant_Garamond'] text-[56px] font-light leading-[1.1] tracking-tight text-slate-800"
        >
          Email Setup
        </h1>
        <p className="max-w-[520px] text-center text-[15px] leading-relaxed text-slate-500">
          Everything you need to set up your @augustcollections.com
          email and company signature across all your devices.
        </p>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-10 px-6 pb-20">

        {/* Intro */}
        <div>
          <p className="text-[15px] leading-[1.8] text-slate-500">
            Welcome to August Collections. This guide walks you through two
            things: setting up your @augustcollections.com email on your
            computer, and adding your company email signature. Follow the
            section that matches your device, and you&apos;ll be up and
            running in minutes.
          </p>
        </div>

        <hr className="border-slate-200" />

        {/* Part 1: Email Setup */}
        <section className="space-y-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Part 1
            </p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-[28px] font-light leading-tight text-slate-800">
              Setting Up Your Email
            </h2>
          </div>
          <p className="text-[15px] leading-[1.8] text-slate-500">
            Your @augustcollections.com address is hosted on Google Workspace,
            which means you can access it through Gmail in your browser at any
            time. If you&apos;d also like to use a desktop email application,
            follow the instructions below for your operating system.
          </p>

          {/* macOS — Apple Mail */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              macOS
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              <a
                href="https://support.apple.com/guide/mail/welcome/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Apple Mail
              </a>
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
              Apple Mail connects to Google Workspace using your Google sign-in,
              so there&apos;s no need to enter server settings manually.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] leading-[1.8] text-slate-500">
              <li>
                <strong className="text-slate-700">Open System Settings</strong> — Close Apple Mail if it&apos;s
                open. Click the Apple menu in the top-left corner and choose{" "}
                <strong className="text-slate-700">System Settings</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Add your Google account</strong> — In the sidebar, click{" "}
                <strong className="text-slate-700">Internet Accounts</strong>. Click <strong className="text-slate-700">Add Account</strong>,
                then select <strong className="text-slate-700">Google</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Sign in</strong> — Enter your full @augustcollections.com email
                address, click <strong className="text-slate-700">Next</strong>, then enter your password. Complete
                two-step verification if prompted.
              </li>
              <li>
                <strong className="text-slate-700">Grant access</strong> — Review the permissions and click{" "}
                <strong className="text-slate-700">Allow</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Select Mail</strong> — Make sure <strong className="text-slate-700">Mail</strong> is
                ticked. You can also enable Contacts and Calendars. Click{" "}
                <strong className="text-slate-700">Done</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Open Apple Mail</strong> — Launch Apple Mail. Your inbox should
                begin loading within a few moments. Send yourself a quick test email to
                confirm everything is working — both sending and receiving.
              </li>
            </ol>
            <p className="mt-3 text-[13px] text-slate-400">
              If something goes wrong: check that IMAP is enabled in Gmail under{" "}
              <strong>Settings &rarr; Forwarding and POP/IMAP</strong>.
            </p>
          </div>

          {/* Windows — Microsoft Outlook */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Windows
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              <a
                href="https://www.microsoft.com/en-gb/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Microsoft Outlook
              </a>
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
              Modern versions of Outlook (2019, 2021, and Microsoft 365) support direct
              Google sign-in, which makes setup straightforward.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] leading-[1.8] text-slate-500">
              <li>
                <strong className="text-slate-700">Open Outlook</strong> — If this is your first time, it will
                prompt you to add an account. Otherwise go to{" "}
                <strong className="text-slate-700">File &rarr; Add Account</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Enter your email address</strong> — Type your full
                @augustcollections.com address and click <strong className="text-slate-700">Connect</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Sign in with Google</strong> — Outlook will open a
                browser-based sign-in window. Enter your credentials and complete
                two-step verification if prompted.
              </li>
              <li>
                <strong className="text-slate-700">Grant access</strong> — Click <strong className="text-slate-700">Allow</strong>. Outlook
                will finish configuring your mailbox automatically.
              </li>
              <li>
                <strong className="text-slate-700">Confirm it&apos;s working</strong> — Your inbox should appear
                within a minute or two. Send yourself a quick test email.
              </li>
            </ol>
            <p className="mt-3 text-[13px] text-slate-400">
              Outlook 2016 or earlier may require the{" "}
              <strong>Google Workspace Sync for Microsoft Outlook (GWSMO)</strong>{" "}
              plugin. Ask your line manager or IT contact for help.
            </p>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Part 2: Email Signature */}
        <section id="signature" className="space-y-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Part 2
            </p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-[28px] font-light leading-tight text-slate-800">
              Setting Up Your Email Signature
            </h2>
          </div>
          <p className="text-[15px] leading-[1.8] text-slate-500">
            Your email signature is a key part of how we present ourselves. Please
            set it up on your first day so that every email you send is consistently
            branded.
          </p>

          {/* Signature example image */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/email-signature-example-mytch_parks-258x392.png"
              alt="Email signature example"
              width={258}
              height={392}
              className="rounded-2xl border border-slate-200"
            />
            <p className="mt-2 text-[13px] text-slate-400">
              If you don&apos;t have a company phone number, simply leave
              that line out.
            </p>
          </div>

          {/* Download Signature Assets */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Assets
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              Download Signature Assets
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
              Right-click and save each icon to use in your email signature.
            </p>
            <div className="mt-4 flex items-center gap-6">
              <a
                href="/images/email-august_a_script-300x239.png"
                download="email-august_a_script-300x239.png"
                className="flex flex-col items-center gap-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/email-august_a_script-300x239.png"
                  alt="August A script logo"
                  width={60}
                  height={48}
                />
                <span className="text-xs text-slate-500">August A</span>
              </a>
            </div>
            <div className="mt-4 flex items-center gap-6">
              <a
                href="/images/email-icon-social-linkedin-60x45.png"
                download="email-icon-social-linkedin-60x45.png"
                className="flex flex-col items-center gap-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/email-icon-social-linkedin-60x45.png"
                  alt="LinkedIn icon"
                  width={60}
                  height={45}
                />
                <span className="text-xs text-slate-500">LinkedIn</span>
              </a>
              <a
                href="/images/email-icon-social-instagram-60x45.png"
                download="email-icon-social-instagram-60x45.png"
                className="flex flex-col items-center gap-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/email-icon-social-instagram-60x45.png"
                  alt="Instagram icon"
                  width={60}
                  height={45}
                />
                <span className="text-xs text-slate-500">Instagram</span>
              </a>
              <a
                href="/images/email-icon-social-facebook-60x45.png"
                download="email-icon-social-facebook-60x45.png"
                className="flex flex-col items-center gap-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/email-icon-social-facebook-60x45.png"
                  alt="Facebook icon"
                  width={60}
                  height={45}
                />
                <span className="text-xs text-slate-500">Facebook</span>
              </a>
            </div>
          </div>

          {/* Social Media Profile URLs */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Links
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              Social Media Profile URLs
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
              Copy these URLs to link each icon in your signature.
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-slate-500">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">LinkedIn:</span>
                <code className="rounded bg-white/60 px-2 py-0.5 text-xs">
                  https://www.linkedin.com/company/augustcollections/
                </code>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Instagram:</span>
                <code className="rounded bg-white/60 px-2 py-0.5 text-xs">
                  https://www.instagram.com/august.collections
                </code>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Facebook:</span>
                <code className="rounded bg-white/60 px-2 py-0.5 text-xs">
                  https://www.facebook.com/augustcollectionuk
                </code>
              </li>
            </ul>
          </div>

          {/* Gmail (Web) */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Signature Setup
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Gmail
              </a>{" "}
              (Web)
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
              This is the most important one to set up, as it also applies when you
              send email from your phone using the Gmail app.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] leading-[1.8] text-slate-500">
              <li>
                <strong className="text-slate-700">Open Gmail Settings</strong> — Click the gear icon in the
                top-right corner, then click <strong className="text-slate-700">See all settings</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Scroll to the Signature section</strong> — On the{" "}
                <strong className="text-slate-700">General</strong> tab, scroll down to <strong className="text-slate-700">Signature</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Create a new signature</strong> — Click{" "}
                <strong className="text-slate-700">+ Create new</strong>, name it &quot;August Collections&quot;,
                and click <strong className="text-slate-700">Create</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Copy and paste the template</strong> — Your manager or
                onboarding contact will send you the signature template (which includes
                the August Collections logo and social media icons). Select the entire
                template and paste it into the signature editor.
              </li>
              <li>
                <strong className="text-slate-700">Type in your details (do not paste them)</strong> — Replace the
                placeholder text with your own name, title, and phone number. Type
                directly rather than copying and pasting to avoid bringing in different
                fonts or formatting.
              </li>
              <li>
                <strong className="text-slate-700">Set your signature defaults</strong> — Below the editor, set
                both <strong className="text-slate-700">For new emails use</strong> and{" "}
                <strong className="text-slate-700">For replies/forwards use</strong> to your new signature.
              </li>
              <li>
                <strong className="text-slate-700">Save</strong> — Scroll to the bottom and click{" "}
                <strong className="text-slate-700">Save Changes</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Test it</strong> — Compose a new email to yourself. Check that
                the logo appears, your details are correct, the social icons display
                properly, and any links work when clicked.
              </li>
            </ol>
          </div>

          {/* Apple Mail (macOS) */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Signature Setup
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              <a
                href="https://support.apple.com/guide/mail/welcome/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Apple Mail
              </a>{" "}
              (macOS)
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
              Apple Mail uses its own signature system, so you&apos;ll need to set this
              up separately from Gmail.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] leading-[1.8] text-slate-500">
              <li>
                <strong className="text-slate-700">Open Mail Settings</strong> — In the menu bar, click{" "}
                <strong className="text-slate-700">Mail &rarr; Settings</strong>. Go to the{" "}
                <strong className="text-slate-700">Signatures</strong> tab.
              </li>
              <li>
                <strong className="text-slate-700">Select your account</strong> — In the left column, select your
                @augustcollections.com account.
              </li>
              <li>
                <strong className="text-slate-700">Create a new signature</strong> — Click the <strong className="text-slate-700">+</strong>{" "}
                button and name it &quot;August Collections&quot;.
              </li>
              <li>
                <strong className="text-slate-700">Paste your signature</strong> — In Gmail, compose and send a
                test email to yourself with your signature attached. Open that email,
                select the entire signature, copy it, then paste it into Apple
                Mail&apos;s signature preview pane. This preserves the images, links,
                and formatting.
              </li>
              <li>
                <strong className="text-slate-700">
                  Uncheck &quot;Always match my default message font&quot;
                </strong>{" "}
                — Make sure this checkbox is unticked so Apple Mail doesn&apos;t
                override your signature&apos;s formatting.
              </li>
              <li>
                <strong className="text-slate-700">Set it as default</strong> — In the{" "}
                <strong className="text-slate-700">Choose Signature</strong> dropdown, select your new signature.
              </li>
              <li>
                <strong className="text-slate-700">Test it</strong> — Compose a new email and confirm the
                signature looks correct — logo, icons, links, and all.
              </li>
            </ol>
          </div>

          {/* Microsoft Outlook (Windows) */}
          <div className="rounded-2xl bg-[#eae6e1] p-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Signature Setup
            </h3>
            <p className="mt-2 font-['Cormorant_Garamond'] text-[22px] font-light leading-tight text-slate-800">
              <a
                href="https://www.microsoft.com/en-gb/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Microsoft Outlook
              </a>{" "}
              (Windows)
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] leading-[1.8] text-slate-500">
              <li>
                <strong className="text-slate-700">Open Signature settings</strong> — Go to{" "}
                <strong className="text-slate-700">File &rarr; Options &rarr; Mail</strong>, then click{" "}
                <strong className="text-slate-700">Signatures</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Create a new signature</strong> — Click <strong className="text-slate-700">New</strong>,
                name it &quot;August Collections&quot;, and click <strong className="text-slate-700">OK</strong>.
              </li>
              <li>
                <strong className="text-slate-700">Paste your signature</strong> — Open Gmail in your browser,
                send yourself a test email so you can see your signature rendered
                correctly. Open that email, select the complete signature, copy it, then
                paste it into Outlook&apos;s signature editor.
              </li>
              <li>
                <strong className="text-slate-700">Fine-tune if needed</strong> — Check that everything looks right
                in the editor. Adjust fonts and sizes using the toolbar if needed. Avoid
                retyping the whole thing — small tweaks are fine.
              </li>
              <li>
                <strong className="text-slate-700">Set your defaults</strong> — Set both{" "}
                <strong className="text-slate-700">New messages</strong> and <strong className="text-slate-700">Replies/forwards</strong> to
                your new signature. Make sure the correct email account is selected.
              </li>
              <li>
                <strong className="text-slate-700">Save and test</strong> — Click <strong className="text-slate-700">OK</strong>. Compose a
                new email and confirm the signature appears correctly with working links
                and properly displayed images.
              </li>
            </ol>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Troubleshooting */}
        <section className="space-y-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Help
            </p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-[28px] font-light leading-tight text-slate-800">
              Troubleshooting
            </h2>
          </div>
          <dl className="space-y-5 text-[14px] leading-[1.8] text-slate-500">
            <div>
              <dt className="font-semibold text-slate-700">
                Images in my signature aren&apos;t showing
              </dt>
              <dd className="mt-1">
                This is usually because images are being blocked by the
                recipient&apos;s email client, which is normal behaviour. On your end,
                make sure the images display when you send a test email to yourself.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-700">
                My signature looks different in replies
              </dt>
              <dd className="mt-1">
                Some email applications strip formatting from signatures in reply
                threads to keep the conversation compact. This is expected — your
                signature will look correct on new emails and on the first message in
                a conversation.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-700">
                I can&apos;t sign in to my email app
              </dt>
              <dd className="mt-1">
                Make sure you&apos;re using your full @augustcollections.com email
                address and the correct password. If you&apos;ve set up two-step
                verification, you may need to complete that step during sign-in. If
                you&apos;re still stuck, reach out to your manager or IT contact.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-700">
                Outlook says it can&apos;t connect to Google
              </dt>
              <dd className="mt-1">
                If you&apos;re using an older version of Outlook (2016 or earlier),
                you may need to install the GWSMO plugin mentioned above, or use an
                app-specific password generated from your Google account security
                settings.
              </dd>
            </div>
          </dl>
        </section>

        <hr className="border-slate-200" />

        {/* Quick Reference */}
        <section className="space-y-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Checklist
            </p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-[28px] font-light leading-tight text-slate-800">
              What to Do on Your First Day
            </h2>
          </div>
          <ol className="list-decimal space-y-2 pl-5 text-[15px] leading-[1.8] text-slate-500">
            <li>
              Sign in to Gmail with your @augustcollections.com credentials.
            </li>
            <li>Set up your email signature in Gmail (Part 2 above).</li>
            <li>
              If you use a desktop email app, add your account using the instructions
              in Part 1.
            </li>
            <li>Copy your signature into your desktop email app (Part 2 above).</li>
            <li>
              Send a test email to yourself from each app to make sure everything
              works.
            </li>
          </ol>
          <p className="text-[15px] leading-[1.8] text-slate-500">
            If you have any questions or run into trouble, don&apos;t hesitate to ask
            your manager or the team. We&apos;re happy to help.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* Further Support */}
        <section className="space-y-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Resources
            </p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-[28px] font-light leading-tight text-slate-800">
              Further Support
            </h2>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.8] text-slate-500">
            <li>
              <a
                href="https://support.google.com/a/answer/9006925"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Google Workspace — Set up Gmail with a third-party email client
              </a>
            </li>
            <li>
              <a
                href="https://tools.google.com/dlpage/gssmo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Google Workspace Sync for Microsoft Outlook (GWSMO)
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/mail/answer/8395"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#326354] underline"
              >
                Gmail Help — Create a Gmail signature
              </a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
