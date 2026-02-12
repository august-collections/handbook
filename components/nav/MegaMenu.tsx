"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { navSections, isSectionActive } from "../../lib/navigation";
import type { NavSection } from "../../lib/navigation";

export default function MegaMenu() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenIndex(null), 300);
  }, [clearCloseTimer]);

  // Close on scroll
  useEffect(() => {
    const onScroll = () => setOpenIndex(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden flex-1 items-center justify-center gap-8 md:flex"
    >
      {navSections.map((section, index) => (
        <div
          key={section.title}
          className="relative"
          onMouseEnter={() => {
            clearCloseTimer();
            setOpenIndex(index);
          }}
          onMouseLeave={scheduleClose}
        >
          <button
            type="button"
            className={`header-nav-link text-xs font-semibold uppercase tracking-[0.2em] transition ${
              isSectionActive(section, pathname)
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
            aria-haspopup="true"
            aria-expanded={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {section.title}
            <svg
              viewBox="0 0 16 16"
              className={`ml-1.5 h-2.5 w-2.5 transition ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openIndex === index && (
            <MegaMenuPanel section={section} pathname={pathname} />
          )}
        </div>
      ))}
    </nav>
  );
}

function MegaMenuPanel({
  section,
  pathname,
}: {
  section: NavSection;
  pathname: string;
}) {
  // Welcome: single column. Wiki: 3 columns. IT & Support: 2 columns.
  const gridCols =
    section.title === "Wiki"
      ? "sm:grid-cols-3"
      : section.title === "IT & Support"
        ? "sm:grid-cols-2"
        : "grid-cols-1";

  return (
    <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2">
      <div
        className={`mega-menu-enter w-max max-w-[90vw] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl ${
          section.title === "Wiki" ? "min-w-[540px]" : "min-w-[280px]"
        }`}
        role="menu"
      >
        <div className={`grid gap-1 ${gridCols}`}>
          {section.items.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={`group rounded-xl px-3 py-2.5 transition ${
                  isActive
                    ? "bg-[#326354]/5 text-[#326354]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                <span className="block text-sm font-medium">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-xs text-slate-400 group-hover:text-slate-500">
                    {item.description}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
