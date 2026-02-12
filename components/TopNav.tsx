"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { apiRequest } from "../lib/api";
import { clearAuth, getUser, isLoggedIn, setUser } from "../lib/auth";
import type { AuthUser } from "../lib/auth";
import { usePathname, useRouter } from "next/navigation";
import MegaMenu from "./nav/MegaMenu";
import MobileNav from "./nav/MobileNav";

const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const logged = isLoggedIn();
    setLoggedIn(logged);
    const user = getUser();
    const resolvedName = resolveUserDisplayName(user);
    setName(resolvedName);
    if (logged && !resolvedName) {
      const loadProfile = async () => {
        try {
          const payload = await apiRequest<AuthMePayload>(AUTH_ME_URL);
          const resolved = resolveAuthMeUser(payload);
          if (!resolved) return;
          const nextUser: AuthUser = {
            ...(resolved as AuthUser),
            name: resolveUserDisplayName(resolved),
          };
          setUser(nextUser);
          setName(resolveUserDisplayName(nextUser));
        } catch {
          // Ignore auth/me failures; nav can remain generic.
        }
      };
      loadProfile();
    }
  }, [pathname]);

  const handleLogout = () => {
    clearAuth();
    setLoggedIn(false);
    router.replace("/login");
  };

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const hideNavBranding = pathname === "/login" || pathname === "/signup";
  const hideNav = pathname === "/terms";
  const hideLoginLink = hideNavBranding;

  if (hideNav) {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-[#2a5044] px-6 py-[24.5px]">
        {/* Logo */}
        {hideNavBranding ? (
          <div />
        ) : (
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo-handbook-748x173.png"
              alt="August Handbook"
              width={748}
              height={173}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>
        )}

        {/* Desktop mega menu */}
        {loggedIn && !hideNavBranding && <MegaMenu />}

        {/* Mobile hamburger */}
        {loggedIn && !hideNavBranding && (
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="ml-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            Menu
            <span className="flex h-6 w-6 flex-col items-center justify-center gap-1">
              <span
                className={`h-[2px] w-5 bg-white transition ${
                  mobileMenuOpen
                    ? "translate-y-[6px] rotate-45"
                    : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition ${
                  mobileMenuOpen
                    ? "-translate-y-[6px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        )}

        {/* Auth section */}
        {loggedIn ? (
          <div className="hidden items-center gap-4 text-sm md:flex">
            <Link
              href="/account"
              className="header-nav-link text-sm font-medium text-white/80 transition hover:text-white"
            >
              {name ? `Welcome, ${name}` : "Account settings"}
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#326354] transition hover:bg-white/90"
            >
              Logout
            </button>
          </div>
        ) : (
          !hideLoginLink && (
            <Link
              href="/login"
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#326354] transition hover:bg-white/90"
            >
              Login
            </Link>
          )
        )}
      </header>

      {/* Mobile nav overlay */}
      {loggedIn && !hideNavBranding && (
        <MobileNav open={mobileMenuOpen} onClose={closeMobileMenu} />
      )}
    </>
  );
};

type AuthMePayload = {
  user?: Record<string, unknown>;
  data?: Record<string, unknown>;
  [key: string]: unknown;
};

const AUTH_ME_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/me";

const resolveAuthMeUser = (
  payload: AuthMePayload
): Record<string, unknown> | null => {
  if (!payload || typeof payload !== "object") return null;
  if ("user" in payload && payload.user && typeof payload.user === "object") {
    return payload.user;
  }
  if ("data" in payload && payload.data && typeof payload.data === "object") {
    return payload.data;
  }
  return payload;
};

const resolveUserDisplayName = (user?: Record<string, unknown> | null) => {
  const name = typeof user?.name === "string" ? user.name.trim() : "";
  if (name) return name;
  const username =
    typeof user?.username === "string" ? user.username.trim() : "";
  if (username) return username;
  const email = typeof user?.email === "string" ? user.email.trim() : "";
  if (email) return email;
  return undefined;
};

export default TopNav;
