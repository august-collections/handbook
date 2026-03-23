import Link from "next/link";
import Image from "next/image";

export default function NewStartersPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          NEW STARTERS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Your First 90 Days
        </h1>
        <p className="max-w-[560px] text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Our guided onboarding journey is designed to set you up for success.
          We want to make sure you have the right resources to quickly understand
          our company, your role, and how we&nbsp;work.
        </p>
        <div className="h-px w-[60px] bg-slate-200" />
      </section>

      {/* Two-column editorial layout */}
      <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-8 sm:px-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Left column */}
          <div className="space-y-12">
            {/* Hero Image */}
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/first-90-days.avif"
                alt="Your first 90 days onboarding"
                width={640}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 640px"
                priority
              />
            </div>

            {/* The First 30 Days */}
            <div className="space-y-6">
              <div>
                <div className="mb-4 h-0.5 w-10 rounded-sm bg-[#326354]" />
                <h2
                  className="text-[22px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  The First 30 Days: Core Learning
                </h2>
              </div>

              {/* Employment Hero Tasks */}
              <div className="space-y-2">
                <h3
                  className="text-[16px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Employment Hero Tasks
                </h3>
                <p className="text-[13px] leading-[1.7] text-slate-500">
                  A few days after your start date, Employment Hero will send you
                  tasks to complete within your first 30 days. Each task includes
                  clear instructions on how to complete&nbsp;it.
                </p>
              </div>

              {/* Essential Training */}
              <div className="space-y-2">
                <h3
                  className="text-[16px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Essential Training
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-[1.7] text-slate-500">
                  <li>
                    <span className="font-semibold text-slate-700">Attend a Webinar:</span>{" "}
                    Join our live session to meet the wider&nbsp;team.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Valeria Booking Platform:</span>{" "}
                    <a
                      href="https://www.loom.com/share/da7cb406dd1c4dd788ef6d6abbfa60d8"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#326354] hover:text-[#2a5044]"
                    >
                      Watch the video walkthrough
                    </a>{" "}
                    to understand our booking&nbsp;system.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Welcome to August Presentation:</span>{" "}
                    Your HR Associate will present this, but we encourage a personal
                    deep dive either before or after the session. Feel free to email
                    Yasmin if you have any&nbsp;questions.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Mandatory training on Employment Hero:</span>{" "}
                    Data Protection &amp; GDPR awareness training, and Perfect
                    Passwords &ndash; Security Awareness e-learning&nbsp;module.
                  </li>
                </ul>
              </div>

              {/* How-To Guide */}
              <div className="space-y-2">
                <h3
                  className="text-[16px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  How-To Guide
                </h3>
                <p className="text-[13px] leading-[1.7] text-slate-500">
                  Employment Hero includes a way to track and complete your
                  tasks &ndash;{" "}
                  <a
                    href="https://workhelp.employmenthero.com/hc/en-sg/articles/14565481513359-Manage-your-tasks"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#326354] hover:text-[#2a5044]"
                  >
                    here is a video
                  </a>{" "}
                  on how to complete the&nbsp;tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-12 lg:pt-0">
            {/* HR & Management Check-ins */}
            <div className="space-y-4">
              <div className="h-0.5 w-10 rounded-sm bg-[#326354]" />
              <h2
                className="text-[22px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                HR &amp; Management Check-ins
              </h2>
              <div className="overflow-hidden rounded-lg">
                <table className="w-full text-left text-[13px] text-slate-500">
                  <thead className="bg-[#eae6e1] text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-medium">Timeline</th>
                      <th className="px-4 py-3 font-medium">Meeting With</th>
                      <th className="px-4 py-3 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-4 py-3">Day 30</td>
                      <td className="px-4 py-3">HR Associate</td>
                      <td className="px-4 py-3 leading-[1.7]">
                        Review your initial experience and task&nbsp;completion.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Day 30, 60, 90</td>
                      <td className="px-4 py-3">Your Manager</td>
                      <td className="px-4 py-3 leading-[1.7]">
                        Focused check-ins to support your integration and&nbsp;growth.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leadership Perspective */}
            <div className="space-y-4">
              <div className="h-0.5 w-10 rounded-sm bg-[#326354]" />
              <h2
                className="text-[22px] font-semibold text-slate-800"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Leadership Perspective
              </h2>
              <p className="text-[13px] leading-[1.7] text-slate-500">
                If you are a leader, you might at some point play a vital role in
                welcoming others. We want to share what is expected of you when
                you begin to grow your own&nbsp;team.
              </p>
              <p className="text-[13px] leading-[1.7] text-slate-500">
                <span className="font-semibold text-slate-700">Your Management Responsibilities:</span>{" "}
                When a new member joins your team and reports directly to you,
                Employment Hero will trigger an onboarding checklist for you
                to&nbsp;manage:
              </p>
            </div>

            <div className="space-y-px">
              <div className="border-b border-slate-200 py-5">
                <h3
                  className="text-[18px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Pre-Arrival Planning
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] leading-[1.7] text-slate-500">
                  <li>Organise a detailed schedule for their first two&nbsp;weeks.</li>
                  <li>Invite them to relevant meetings and project&nbsp;channels.</li>
                  <li>Schedule dedicated training on key topics and organise a team&nbsp;lunch.</li>
                </ul>
              </div>
              <div className="border-b border-slate-200 py-5">
                <h3
                  className="text-[18px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  The First Day
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] leading-[1.7] text-slate-500">
                  <li>Introduce your new joiner to the entire business via&nbsp;Slack.</li>
                </ul>
              </div>
              <div className="py-5">
                <h3
                  className="text-[18px] font-semibold text-slate-800"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Ongoing Mentorship
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] leading-[1.7] text-slate-500">
                  <li>Schedule and conduct 30, 60, and 90-day check-ins to ensure they are integrated and&nbsp;thriving.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
