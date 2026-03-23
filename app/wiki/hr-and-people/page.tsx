import Image from "next/image";
import Link from "next/link";

export default function HrAndPeoplePage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          HR &amp; PEOPLE
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          HR &amp; People
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Policies, benefits, leave, and everything
          <br />
          people-related.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Your HR Contact */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              YOUR HR CONTACT
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Yasmin - Human Resources Associate
            </h2>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="w-full max-w-[160px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/staff/human_resource-hr_associate-yasmin_gecit.png"
                alt="Yasmin Gecit"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                &ldquo;Hello! I&apos;m Yasmin. I&apos;m here to support you with anything
                HR-related — payroll, benefits, wellbeing, and guidance on processes. Most
                queries go through your manager first, but you&apos;re always welcome to
                reach out directly.&rdquo;
              </p>

              <p className="text-[14px] font-semibold text-slate-800">
                I Can Help With:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
                  <li>Payroll &amp; Benefits</li>
                  <li>Wellbeing Support</li>
                  <li>Recruitment &amp; Onboarding</li>
                  <li>Training &amp; Development</li>
                </ul>
                <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
                  <li>Quarter Reviews</li>
                  <li>Team Events &amp; Celebrations</li>
                  <li>Policy Guidance</li>
                  <li>Employee Relations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* IT & Office Ready */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              TECHNOLOGY SUPPORT
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              IT &amp; Office Ready
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              IT troubles? Issues with Gmail or login? Raise a Support Ticket with Office
              Ready via{" "}
              <a
                href="https://portal.officeready.tech/portal/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] transition hover:text-[#2a5044]"
              >
                the Office Ready Portal
              </a>{" "}
              for support. Need new gear? Reach out to Mytch (Head of Product) for
              approval and guidance.
            </p>
          </div>

          <a
            href="https://portal.officeready.tech/portal/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Image
              src="/images/logo-office_ready_tech.png"
              alt="Office Ready"
              width={175}
              height={48}
            />
          </a>

          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Do you have other questions? Email{" "}
            <a
              href="mailto:yasmin@augustocollections.com?subject=Support Request from Handbook"
              className="font-semibold text-[#326354] transition hover:text-[#2a5044]"
            >
              Yasmin
            </a>{" "}
            or{" "}
            <a
              href="mailto:mytch@augustocollections.com?subject=Support Request from Handbook"
              className="font-semibold text-[#326354] transition hover:text-[#2a5044]"
            >
              Mytch
            </a>
            .
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* Company Handbook */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              POLICIES &amp; PROCEDURES
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Company Handbook
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Access our complete guide to company policies, procedures,
              and expectations.
            </p>
          </div>

          <a
            href="https://docs.google.com/presentation/d/1Q1tue5uxbdhhxB7ItUrm5qXZ_PJwGdx7SQpYmgbdjos/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354] transition hover:text-[#2a5044]"
          >
            VIEW COMPANY HANDBOOK →
          </a>
        </section>

        <hr className="border-slate-200" />

        {/* Health Assured EAP */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              WELLBEING
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Health Assured EAP
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Our partnership with Health Assured brings you support for any
              situation where you might feel you need it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Physical &amp; Emotional
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                Resources ranging from managing anxiety to
                breathing techniques.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Wisdom App
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                Track wellness &amp; contact counsellors directly.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Wellbeing Resources
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                Self-help tools, factsheets, and professional counselling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                4-Week Health Plan
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                Support for goals like eating healthier, quitting smoking,
                or sleeping better.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Home &amp; Life Support
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                Expert advice on budgets, debt, and civil disputes.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
                Work Life Assistance
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                Support for returning to work or coping with
                professional change.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
