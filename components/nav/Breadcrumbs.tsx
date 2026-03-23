"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { findSectionByPath, findItemByPath } from "../../lib/navigation";

const HIDDEN_PATHS = ["/", "/login", "/signup", "/terms"];

export default function Breadcrumbs() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState<string | null>(null);

  useEffect(() => {
    const h1 = document.querySelector("h1");
    setPageTitle(h1?.textContent ?? null);
  }, [pathname]);

  if (HIDDEN_PATHS.includes(pathname)) return null;

  const section = findSectionByPath(pathname);
  if (!section) return null;

  const item = findItemByPath(pathname);
  const isLanding = pathname === section.href;
  const isSubPage = item && pathname !== item.href && pathname.startsWith(`${item.href}/`);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-[420px] px-6 pt-4 sm:max-w-[1440px]"
    >
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
        <li>
          <Link
            href="/"
            className="transition hover:text-slate-600"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight />
        </li>
        {isLanding ? (
          <li>
            <span className="font-medium text-slate-600" aria-current="page">
              {pageTitle || section.title}
            </span>
          </li>
        ) : (
          <>
            <li>
              <Link
                href={section.href}
                className="transition hover:text-slate-600"
              >
                {section.title}
              </Link>
            </li>
            {item && (
              <>
                <li aria-hidden="true">
                  <ChevronRight />
                </li>
                {isSubPage ? (
                  <>
                    <li>
                      <Link
                        href={item.href}
                        className="transition hover:text-slate-600"
                      >
                        {item.breadcrumbLabel || item.label}
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight />
                    </li>
                    <li>
                      <span
                        className="font-medium text-slate-600"
                        aria-current="page"
                      >
                        {pageTitle || pathname.split("/").pop()}
                      </span>
                    </li>
                  </>
                ) : (
                  <li>
                    <span
                      className="font-medium text-slate-600"
                      aria-current="page"
                    >
                      {pageTitle || item.breadcrumbLabel || item.label}
                    </span>
                  </li>
                )}
              </>
            )}
          </>
        )}
      </ol>
    </nav>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3 w-3 text-slate-300"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
