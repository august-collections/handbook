import Link from "next/link";

const values = [
  {
    num: "01",
    title: "Communication\n& Openness",
    body: "Transparent and open with constructive and positive feedback. Prioritises collaboration and consistency.",
  },
  {
    num: "02",
    title: "Ownership\nMindset",
    body: "We hold ourselves accountable for our actions, fostering a culture of pride, initiative, and empowerment within our team.",
  },
  {
    num: "03",
    title: "Kindness",
    body: "Values kindness and strong team spirit, recognising our people drive success. Friendly, generous and always considerate.",
  },
  {
    num: "04",
    title: "Urgency",
    body: "Acts promptly, purposefully, and efficiently. We move with intention and respect the value of time.",
  },
  {
    num: "05",
    title: "Resourceful",
    body: "Embraces challenges, takes initiative, and brings innovative problem-solving abilities to every situation.",
  },
  {
    num: "06",
    title: "Excellence",
    body: "We strive for excellence in everything we do, setting high standards for ourselves and continuously raising the bar.",
  },
];

export default function ValuesPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/welcome" className="text-slate-400 transition hover:text-slate-600">WELCOME</Link>
          &nbsp;/&nbsp;
          OUR VALUES
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Our Values
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          The principles that guide how we work, lead,
          <br />
          and serve our homeowners every day.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Value Cards */}
      <section className="mx-auto max-w-[1040px] space-y-6 px-6 pb-16 sm:px-12">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
          {values.map((value) => (
            <div
              key={value.num}
              className="space-y-4 rounded-2xl bg-[#eae6e1] p-7 sm:p-10"
            >
              <p
                className="text-[28px] font-semibold text-[#326354] sm:text-[32px]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {value.num}
              </p>
              <h2
                className="whitespace-pre-line text-[22px] font-semibold leading-[1.2] text-slate-800 sm:text-[26px]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {value.title}
              </h2>
              <div className="h-[2px] w-10 bg-[#326354]" />
              <p className="text-[13px] leading-[1.7] text-slate-500 sm:text-[14px]">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Read Next */}
      <div className="mx-auto max-w-[1040px] border-t border-slate-200 px-6 py-10 text-right sm:px-12">
        <Link
          href="/welcome/introduction-to-august"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 transition hover:text-slate-800 sm:text-[15px]"
        >
          Read &lsquo;An Introduction to August&rsquo; next
          <span className="transition group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
