export default function AugustEthosPage() {
  return (
    <div className="mt-10 space-y-6">
      <h1 className="text-3xl font-semibold text-slate-800">The August Ethos</h1>
      <p
        className="text-[20px] text-[#af6529] italic"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        &ldquo;We are a global homeowner community that comes together to celebrate unique real
        estate. Our families make memories while enjoying the charming countryside of Provence,
        the picturesque beaches of the Mallorcan coast and the idyllic streets of Tuscany,
        sharing their experiences and recommendations as they go.&rdquo;
      </p>
      <div className="grid gap-8 text-sm text-slate-600 md:grid-cols-2">
        <p>
          Everything we do is carefully considered, and our decision to remain independent allows us to
          ensure a personal touch is felt at every stage of the August journey. This means we can focus
          on the highest levels of quality for our homeowners and their residences.
        </p>
        <p>
          That is what makes each Collection so special and that is no accident; they are, by design,
          unique thanks to the destinations, their interiors and the families that inhabit them.
        </p>
        <p>
          As an exclusive lifestyle community, we only launch a select few Collections each year, which
          means we carefully curate an ever-growing waitlist of like-minded families who aspire to join
          the August community.
        </p>
        <p>
          Families are invited to join following a thorough vetting process (on both sides!) to ensure
          homeowners align with the August values and vision. Since we founded August, we have had the
          pleasure of sourcing and renovating many special homes all over Europe, helping hundreds of
          families to realize their dream of owning a second home.
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href="/welcome/our-values"
          className="inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
        >
          Our Values
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
