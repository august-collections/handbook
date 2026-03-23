import Link from "next/link";
import Image from "next/image";

export default function OfficeReadyPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/it-support" className="text-slate-400 transition hover:text-slate-600">IT &amp; SUPPORT</Link>
          &nbsp;/&nbsp;
          OFFICE READY
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Office Ready
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Your IT partner &mdash; raise support tickets,
          <br />
          troubleshoot issues, and request new equipment.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[800px] space-y-8 px-6 pb-16">
        {/* Getting Help */}
        <div className="rounded-2xl bg-[#eae6e1] p-8">
          <h2
            className="mb-4 text-[24px] font-normal text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Getting Help
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            IT troubles? Issues with Gmail or login? Raise a Support Ticket with Office Ready via{" "}
            <a
              href="https://portal.officeready.tech/portal/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              the Office Ready Portal
            </a>{" "}
            for support. Need new gear? Reach out to Mytch (Head of Product) for approval
            and guidance.
          </p>
          <a
            href="https://portal.officeready.tech/portal/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex justify-center"
          >
            <Image
              src="/images/logo-office_ready_tech.png"
              alt="Office Ready"
              width={175}
              height={48}
            />
          </a>
        </div>

        {/* Other Questions */}
        <div className="rounded-2xl bg-[#eae6e1] p-8">
          <h2
            className="mb-4 text-[24px] font-normal text-slate-800 sm:text-[28px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Other Questions
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Do you have other questions? Email{" "}
            <a
              href="mailto:yasmin@augustocollections.com?subject=Support Request from Handbook"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              Yasmin
            </a>{" "}
            or{" "}
            <a
              href="mailto:mytch@augustocollections.com?subject=Support Request from Handbook"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              Mytch
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
