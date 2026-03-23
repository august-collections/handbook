import Image from "next/image";
import Link from "next/link";

const journeySteps = [
  {
    num: "01",
    title: "Explore",
    icon: "/images/icon-homeowner_journey-explore.png",
    desc: "Homeowners browse our website, our brochures and hear from our Homeowners to learn about our unique model.",
  },
  {
    num: "02",
    title: "Start the Conversation",
    icon: "/images/icon-homeowner_journey-start_the_conversation.png",
    desc: "Homeowners book a call with our expert Advisory team to see which Collection suits them and get answers to specific questions.",
  },
  {
    num: "03",
    title: "Find the Collection",
    icon: "/images/icon-homeowner_journey-find_the_collections.png",
    desc: "We curate potential homeowners in a Collection to ensure the best mix in travel preferences, so everyone will get their preferred holiday times.",
  },
  {
    num: "04",
    title: "Say Yes to the Collection",
    icon: "/images/icon-homeowner_journey-say_yes_to_the_collection.png",
    desc: "Sign the Reservation Agreement to confirm their place. It typically takes 12 months from signing for them to experience their first complete home in a Collection.",
  },
  {
    num: "05",
    title: "Onboarding",
    icon: "/images/icon-homeowner_journey-onboarding.png",
    desc: "Our legal and onboarding teams take care of everything to smooth the journey for a new owner.",
  },
  {
    num: "06",
    title: "Welcome Home",
    icon: "/images/icon-homeowner_journey-welcome_home.png",
    desc: "Homeowners start booking their holidays. Founder share owners get first access to a complete home usually within 12 months. Final share owners get access to a complete Collection usually within 12\u00a0months.",
  },
];

const viewSteps = [
  {
    num: "01",
    title: "Collection Creation",
    icon: "/images/icon-homeowners_view-collection_creation.png",
    desc: "We streamline the process of finding, purchasing and renovating the best homes into phases to ensure an early start. Group One homeowners will gain access to the first home; subsequent homeowners will gain access once Home Two is ready, giving them access to both Home One and Home Two, along with Group One. This process continues as additional homes in the collection are completed and made available to subsequent groups.",
  },
  {
    num: "02",
    title: "Sourcing and Buying",
    icon: "/images/icon-homeowners_view-sourcing_and_buying.png",
    desc: "We have experts looking for the perfect properties, available in each location all year long. Therefore, when it is time to buy, we have already a list of properties to choose from. However, if we do not have the perfect one, we will continue searching until we find it, and this process can take a few months.",
  },
  {
    num: "03",
    title: "Renovations",
    icon: "/images/icon-homeowners_view-renovations.png",
    desc: "It is often the case that the perfect property is not on the market. We focus on buying in a location and concentrate on the potential of the property. We then renovate to the August standards. This process can take a few months, depending on the level of renovation required.",
  },
  {
    num: "04",
    title: "Interior Design",
    icon: "/images/icon-homeowners_view-interior_design.png",
    desc: "All homes are carefully designed with an interior designer. We pick the furniture for all homes with great care.",
  },
  {
    num: "05",
    title: "Booking and Info",
    icon: "/images/icon-homeowners_view-booking_and_info.png",
    desc: "Homeowners get access to their August online account, where they\u2019ll find all the key information about the Collection. They can share travel tips with other families and use our convenient booking system to start planning their dream holidays.",
  },
  {
    num: "06",
    title: "Enjoy!",
    icon: "/images/icon-homeowners_view-enjoy.png",
    desc: "As soon as a property is fully renovated, we give homeowners the keys so they can start enjoying their home.",
  },
];

export default function HomeownersPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-10 sm:px-20 sm:pt-12">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link
            href="/"
            className="text-slate-400 transition hover:text-slate-600"
          >
            HANDBOOK
          </Link>
          &nbsp;/&nbsp;
          <Link
            href="/wiki"
            className="text-slate-400 transition hover:text-slate-600"
          >
            WIKI
          </Link>
          &nbsp;/&nbsp;HOMEOWNERS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Homeowners
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Owner profiles, communication standards, and homeowner&nbsp;experience.
        </p>
        <div className="h-px w-[60px] bg-slate-200" />
      </section>

      {/* Homeowner Journey */}
      <section className="px-6 pb-20 sm:px-20">
        <div className="mb-14 flex flex-col items-center gap-4">
          <h2
            className="text-center text-[28px] font-normal text-slate-800 sm:text-[36px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Homeowner Journey
          </h2>
          <div className="h-px w-10 bg-slate-200" />
        </div>

        {/* ── Desktop horizontal timeline (hidden on mobile) ── */}
        <div className="hidden lg:block">
          {/* Top row: steps 1–3 */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-5 h-px bg-[#326354]/30" />
            <div className="grid grid-cols-3 gap-12">
              {journeySteps.slice(0, 3).map((step) => (
                <div key={step.num} className="relative flex flex-col gap-5">
                  {/* Node dot */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#326354] bg-[#f4f0ec]">
                    <span className="text-[11px] font-semibold text-[#326354]">
                      {step.num}
                    </span>
                  </div>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 opacity-80"
                  />
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer between rows */}
          <div className="my-14" />

          {/* Bottom row: steps 4–6 */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-[#326354]/30" />
            <div className="grid grid-cols-3 gap-12">
              {journeySteps.slice(3, 6).map((step) => (
                <div key={step.num} className="relative flex flex-col gap-5">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#326354] bg-[#f4f0ec]">
                    <span className="text-[11px] font-semibold text-[#326354]">
                      {step.num}
                    </span>
                  </div>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 opacity-80"
                  />
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile / tablet vertical timeline (hidden on desktop) ── */}
        <div className="relative lg:hidden">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-[#326354]/30" />

          <div className="flex flex-col gap-12">
            {journeySteps.map((step) => (
              <div key={step.num} className="relative flex gap-8 pl-14">
                {/* Node dot on the line */}
                <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#326354] bg-[#f4f0ec]">
                  <span className="text-[11px] font-semibold text-[#326354]">
                    {step.num}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={36}
                    height={36}
                    className="h-9 w-9 opacity-80"
                  />
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homeowner's View */}
      <section className="px-6 pb-20 sm:px-20">
        <div className="mb-14 flex flex-col items-center gap-4">
          <h2
            className="text-center text-[28px] font-normal text-slate-800 sm:text-[36px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Homeowner&apos;s View
          </h2>
          <div className="h-px w-10 bg-slate-200" />
        </div>

        {/* ── Desktop horizontal timeline ── */}
        <div className="hidden lg:block">
          {/* Top row: steps 1–3 */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-[#326354]/30" />
            <div className="grid grid-cols-3 gap-12">
              {viewSteps.slice(0, 3).map((step) => (
                <div key={step.num} className="relative flex flex-col gap-5">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f0ec]">
                    <span className="text-[11px] font-semibold text-[#326354]">
                      {step.num}
                    </span>
                  </div>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 opacity-80"
                  />
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-14" />

          {/* Bottom row: steps 4–6 */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-[#326354]/30" />
            <div className="grid grid-cols-3 gap-12">
              {viewSteps.slice(3, 6).map((step) => (
                <div key={step.num} className="relative flex flex-col gap-5">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f0ec]">
                    <span className="text-[11px] font-semibold text-[#326354]">
                      {step.num}
                    </span>
                  </div>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 opacity-80"
                  />
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile / tablet vertical timeline ── */}
        <div className="relative lg:hidden">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-[#326354]/30" />
          <div className="flex flex-col gap-12">
            {viewSteps.map((step) => (
              <div key={step.num} className="relative flex gap-8 pl-14">
                <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f0ec]">
                  <span className="text-[11px] font-semibold text-[#326354]">
                    {step.num}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={36}
                    height={36}
                    className="h-9 w-9 opacity-80"
                  />
                  <h3
                    className="text-[20px] font-semibold text-slate-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-6 sm:px-20">
        <hr className="border-slate-200" />
      </div>

      {/* Access to Homes */}
      <section className="px-6 pb-20 sm:px-20">
        {/* Hero */}
        <div className="mb-14 flex flex-col items-center gap-5">
          <h2
            className="text-center text-[28px] font-normal text-slate-800 sm:text-[36px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Access to Homes
          </h2>
          <p className="max-w-[640px] text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
            Although the homes are not all purchased yet, homeowners can expect
            a timeline of within 12 months from the time their related group
            onboards and receive the share subscriptions to being able to use
            the relevant homes and all others already&nbsp;delivered.
          </p>
          <div className="h-px w-10 bg-slate-200" />
        </div>

        {/* Table images */}
        <div className="mx-auto mb-16 max-w-[820px] space-y-6">
          <Image
            src="/images/access_to_the_homes-top_table-homes.png"
            alt="Access to the homes timeline table"
            width={820}
            height={480}
            className="h-auto w-full"
          />
          <Image
            src="/images/access_to_the_homes-bottom_groups.png"
            alt="Access to the homes groups"
            width={820}
            height={480}
            className="h-auto w-full"
          />
        </div>

        {/* Editorial 3-column text */}
        <div className="grid sm:grid-cols-3">
          <div className="flex flex-col gap-3 py-6 pr-9">
            <div className="h-0.5 w-10 rounded-sm bg-[#326354]" />
            <h3
              className="text-[20px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Live Home Schedule
            </h3>
            <p className="text-[13px] leading-[1.7] text-slate-500">
              LIVE meaning the home has been completed + renovated and is
              available for&nbsp;bookings.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t border-slate-200 py-6 sm:border-l sm:border-t-0 sm:px-9">
            <div className="h-0.5 w-10 rounded-sm bg-[#326354]" />
            <h3
              className="text-[20px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Forming a Collection
            </h3>
            <p className="text-[13px] leading-[1.7] text-slate-500">
              Collections are formed of groups, which allows us to purchase the
              Home + build a complete portfolio of property for
              our&nbsp;Homeowners.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t border-slate-200 py-6 sm:border-l sm:border-t-0 sm:pl-9">
            <div className="h-0.5 w-10 rounded-sm bg-[#326354]" />
            <h3
              className="text-[20px] font-semibold text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Access to Homes
            </h3>
            <p className="text-[13px] leading-[1.7] text-slate-500">
              Group One Homeowners will have access to the homes as soon as Home
              One is LIVE. Other groups will have to wait for additional homes
              within the Collection to go live. Group Two Homeowners will have
              access to the homes as soon as Home Two is LIVE. They will gain
              access to Home One and Home Two along with Group One. And
              so&nbsp;on.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
}
