"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navSections, isSectionActive } from "../../lib/navigation";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="mobile-nav-enter absolute inset-x-4 top-20 mx-auto max-h-[80vh] max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-800"
          >
            Close
          </button>
        </div>

        {/* Sections */}
        <nav className="overflow-y-auto px-5 py-4" style={{ maxHeight: "calc(80vh - 57px)" }}>
          <div className="space-y-2">
            {navSections.map((section) => (
              <details
                key={section.title}
                className="group"
                open={isSectionActive(section, pathname)}
              >
                <summary className="cursor-pointer list-none py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  <span className="flex items-center justify-between">
                    {section.title}
                    <span className="text-slate-400 transition group-open:rotate-180">
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </summary>
                <div className="mt-1 space-y-0.5 pb-2">
                  {section.items.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={`block rounded-2xl px-3 py-2 text-sm transition ${
                          isActive
                            ? "bg-[#326354]/5 font-medium text-[#326354]"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
