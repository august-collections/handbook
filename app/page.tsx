"use client";

export const dynamic = "force-dynamic";

import RequireAuth from "../components/RequireAuth";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <RequireAuth>
      <div className="mt-4 space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/handbook-header_image-key_ring-1440x620.jpg"
            alt="Handbook key ring"
            width={1440}
            height={400}
            className="h-[400px] w-full object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
            priority
          />
          <div className="absolute bottom-[25%] left-0 right-0 px-6 sm:px-10">
            <div className="max-w-lg space-y-3">
            </div>
          </div>
        </div>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col p-6">
            <h2 className="text-lg font-semibold text-slate-800"><Link href="/welcome" className="hover:text-[#326354]">Welcome</Link></h2>
            <hr className="mt-2 border-t-[0.7px] border-slate-300" />
            <p className="mt-2 text-sm text-slate-500">
              Company handbook, ethos, values, and onboarding.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500">
              <li>
                <Link href="/welcome/founders-vision" className="hover:text-slate-700">
                  Founders&apos; Vision
                </Link>
              </li>
              <li>
                <Link href="/welcome/introduction-to-august" className="hover:text-slate-700">
                  Introduction to August
                </Link>
              </li>
              <li>
                <Link href="/welcome/our-values" className="hover:text-slate-700">
                  Our Values
                </Link>
              </li>
              <li>
                <Link href="/welcome/the-august-ethos" className="hover:text-slate-700">
                  The August Ethos
                </Link>
              </li>
            </ul>
            <Link
              href="/welcome"
              className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
            >
              More
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
              >
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col p-6">
            <h2 className="text-lg font-semibold text-slate-800"><Link href="/wiki" className="hover:text-[#326354]">Wiki</Link></h2>
            <hr className="mt-2 border-t-[0.7px] border-slate-300" />
            <p className="mt-2 text-sm text-slate-500">
              Explore company knowledge, operations, and resources.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500">
              <li>
                <Link href="/wiki/branding-and-identity" className="hover:text-slate-700">
                  Branding &amp; Identity
                </Link>
              </li>
              <li>
                <Link href="/wiki/collections" className="hover:text-slate-700">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/wiki/financials" className="hover:text-slate-700">
                  Financials
                </Link>
              </li>
              <li>
                <Link href="/wiki/homeowners" className="hover:text-slate-700">
                  Homeowners
                </Link>
              </li>
            </ul>
            <Link
              href="/wiki"
              className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
            >
              More
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
              >
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col p-6">
            <h2 className="text-lg font-semibold text-slate-800"><Link href="/it-support" className="hover:text-[#326354]">IT &amp; Support</Link></h2>
            <hr className="mt-2 border-t-[0.7px] border-slate-300" />
            <p className="mt-2 text-sm text-slate-500">
              Tools, access, devices, and troubleshooting guides.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500">
              <li>
                <Link href="/it-support/accounts-sso-passwords" className="hover:text-slate-700">
                  Accounts, SSO, Passwords
                </Link>
              </li>
              <li>
                <Link href="/it-support/applications" className="hover:text-slate-700">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/it-support/device-setup" className="hover:text-slate-700">
                  Device Setup
                </Link>
              </li>
              <li>
                <Link href="/it-support/security" className="hover:text-slate-700">
                  Security
                </Link>
              </li>
            </ul>
            <Link
              href="/it-support"
              className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
            >
              More
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
              >
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </RequireAuth>
  );
}
