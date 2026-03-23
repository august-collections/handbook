"use client";

import Link from "next/link";
import NavIcon from "./NavIcon";
import type { NavSection } from "../../lib/navigation";

export default function MegaMenuPanel({
  section,
  pathname,
  onMouseEnter,
  onMouseLeave,
}: {
  section: NavSection;
  pathname: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  // Split items into rows of 5 for the grid
  const rows: typeof section.items[] = [];
  for (let i = 0; i < section.items.length; i += 5) {
    rows.push(section.items.slice(i, i + 5));
  }

  return (
    <div
      className="mega-menu-enter border-b border-slate-200 bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
    >
      <div className="flex gap-0 px-20 py-10">
        {/* Left: Section title + description */}
        <div className="w-[280px] shrink-0 space-y-3 pr-10">
          <Link
            href={section.href}
            className="text-[28px] font-semibold text-slate-800 transition hover:text-[#326354]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {section.title}
          </Link>
          {section.description && (
            <p className="text-[13px] leading-[1.6] text-slate-500">
              {section.description}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="mx-0 w-px self-stretch bg-slate-200" />

        {/* Right: Links grid */}
        <div className="flex-1 space-y-2 pl-10">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={`group flex-1 space-y-2 rounded-lg px-6 py-3 transition ${
                      isActive
                        ? "bg-[#326354]/5"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    {item.icon && (
                      <NavIcon
                        name={item.icon}
                        size={20}
                        className="text-[#326354]"
                      />
                    )}
                    <p className="text-[14px] font-semibold text-slate-800">
                      {item.label}
                    </p>
                    {item.description && (
                      <p className="text-[12px] leading-[1.5] text-slate-400">
                        {item.description}
                      </p>
                    )}
                  </Link>
                );
              })}
              {/* Fill empty slots to maintain grid alignment */}
              {row.length < 5 &&
                Array.from({ length: 5 - row.length }).map((_, i) => (
                  <div
                    key={`empty-${rowIndex}-${i}`}
                    className="flex-1 px-6 py-3"
                    aria-hidden="true"
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
