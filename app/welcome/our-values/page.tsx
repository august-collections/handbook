import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Communication & Openness",
    body: "Transparent and open with constructive and positive feedback. Prioritises collaboration and consistency.",
    icon: "/images/icon-communication.png",
  },
  {
    title: "Ownership Mindset",
    body: "We hold ourselves accountable for our actions, fostering a culture of pride, initiative, and empowerment within our team.",
    icon: "/images/icon-ownership.png",
  },
  {
    title: "Kindness",
    body: "Values kindness and a strong team ethos, with recognition that our people are what drive our success. Friendly, generous and considerate.",
    icon: "/images/icon-kindness.png",
  },
  {
    title: "Urgency",
    body: "Acts promptly, purposefully, and efficiently.",
    icon: "/images/icon-urgency.png",
  },
  {
    title: "Resourceful",
    body: "Embraces challenges, takes initiative, has innovative problem solving abilities.",
    icon: "/images/icon-resourceful.png",
  },
  {
    title: "Excellence",
    body: "We strive for excellence in everything we do, setting high standards for ourselves and continuously raising the bar.",
    icon: "/images/icon-excellence.png",
  },
];

export default function ValuesPage() {
  return (
    <div className="mt-4 space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Our Values</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-3xl bg-white p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src={value.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
              {value.title}
            </h2>
            <p className="mt-4 text-sm text-slate-600">{value.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href="/welcome/the-august-ethos"
          className="inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
        >
          The August Ethos
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
