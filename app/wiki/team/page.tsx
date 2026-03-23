import Image from "next/image";
import Link from "next/link";

const execTeam = [
  { name: "Mélie Dunod", role: "Co-Founder & CEO", src: "/images/staff/founder-ceo-melie_dunod.png" },
  { name: "Nico Watzenig", role: "Co-Founder & Chairman", src: "/images/staff/founder-nico.png" },
  { name: "Barry Gifford", role: "COO", src: "/images/staff/leadership-coo-barry_gifford.png" },
  { name: "Tanya Uniacke", role: "CRO", src: "/images/staff/leadership-cro-tanya_uniacke.png" },
  { name: "Antonio Martín Barceló", role: "Finance Director", src: "/images/staff/head-head_of_finance-antonio_martin_barcelo.jpeg" },
];

const departmentHeads = [
  { name: "Martin Coppens", role: "Head of Operations", src: "/images/staff/head-head_of_operations-martin_coppens.jpeg" },
  { name: "Tilly Smallwood", role: "Head of Customer Success", src: "/images/staff/hx-head-tilly_smallwood.png" },
  { name: "Will Gould", role: "General Counsel", src: "/images/staff/legal-general_counsel-will_gould.png" },
  { name: "Jenin Khanam", role: "Interim Legal Counsel", src: "/images/staff/legal-paralegal-jenin_khanam.jpeg" },
  { name: "Mytch Parks", role: "Head of Product", src: "/images/staff/head-head_of_product-mytch_parks.png" },
  { name: "Khitiz Saxena", role: "Product Manager", src: "/images/staff/product-technical_product_manager-kshitiz_saxena.png" },
  { name: "Karolina Wierzbicka", role: "Head of Design", src: "/images/staff/design-head_of_design-karolina_wierzbicka.png" },
  { name: "Rafael Baiao", role: "Head of Real Estate", src: "/images/staff/head-head_of_acquisitions-rafael_baiao.png" },
  { name: "Marcus Wright", role: "Head of Development", src: "/images/staff/head-head_of_development-marcus_wright.png" },
  { name: "Kirsten Meyer", role: "Commercial Director", src: "/images/staff/head-commercial_director-kirsten_meyer.png" },
  { name: "Mariana Ferraz", role: "Head of Marketing", src: "/images/staff/head-head_of_marketing-mariana_ferraz.png" },
  { name: "Mandar Bhairavkar", role: "Head of Finance", src: "/images/staff/finance-finance_controller-mandar_bhairavkar.png" },
];

function PersonCard({ person }: { person: { name: string; role: string; src: string } }) {
  return (
    <div className="rounded-2xl bg-[#eae6e1] p-4">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={person.src}
          alt={person.name}
          width={400}
          height={400}
          className="h-[220px] w-full object-cover"
        />
      </div>
      <div className="mt-4">
        <p className="text-[14px] font-semibold text-slate-800">{person.name}</p>
        <p className="text-[13px] text-slate-500">{person.role}</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          TEAM
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Team
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Meet the team — roles, departments,
          <br />
          and who does what at August.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1040px] space-y-16 px-6 py-16">
        {/* Executive Team */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              LEADERSHIP
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Executive Team
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {execTeam.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Department Heads */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              DEPARTMENTS
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Department Heads
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {departmentHeads.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Team Organisational Chart */}
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              STRUCTURE
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Team Organisational Chart
            </h2>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            {/* Left: Photo */}
            <div className="h-[200px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-[280px]">
              <Image
                src="/images/org-chart-team-photo.png"
                alt="Team Organisational Chart"
                width={560}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right: Text content */}
            <div className="space-y-4">
              <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Access the complete organisational chart{" "}
                <a
                  href="https://drive.google.com/file/d/1QzZ-5KuKO1WJaXZbufPW4QH277yQMRF-/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#326354] hover:text-[#2a5044]"
                >
                  via Google Drive
                </a>{" "}
                to explore our team structure and understand how
                our teams collaborate. Employment Hero is our HR platform —{" "}
                <a
                  href="https://drive.google.com/file/d/1QzZ-5KuKO1WJaXZbufPW4QH277yQMRF-/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#326354] hover:text-[#2a5044]"
                >
                  here
                </a>{" "}
                is a short guide to help you get set up and familiar with how it works.
              </p>
              <a
                href="https://secure.employmenthero.com/app/v2/organisations/419512/organisation_chart"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Image
                  src="/images/logo-EH-Horizontal-Logo-Black-cropped.svg"
                  alt="Employment Hero"
                  width={250}
                  height={60}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
