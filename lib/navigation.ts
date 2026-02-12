export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type NavSection = {
  title: string;
  href: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    title: "Welcome",
    href: "/welcome",
    items: [
      {
        href: "/welcome/founders-vision",
        label: "The Founders' Vision",
        description: "The story and motivation behind August",
      },
      {
        href: "/welcome/introduction-to-august",
        label: "An Introduction to August",
        description: "What we do and how we operate",
      },
      {
        href: "/welcome/our-values",
        label: "Our Values",
        description: "The principles that guide our work",
      },
      {
        href: "/welcome/the-august-ethos",
        label: "The August Ethos",
        description: "Our philosophy and culture",
      },
    ],
  },
  {
    title: "Wiki",
    href: "/wiki",
    items: [
      { href: "/wiki/branding-and-identity", label: "Branding & Identity" },
      { href: "/wiki/collections", label: "Our Collections" },
      { href: "/wiki/financials", label: "August Revenue Model" },
      { href: "/wiki/homeowners", label: "Homeowners Journey" },
      { href: "/wiki/how-to", label: "How To" },
      { href: "/wiki/how-we-work", label: "How We Work at August" },
      { href: "/wiki/hr-and-people", label: "HR & People" },
      { href: "/wiki/legal", label: "Legal Onboarding" },
      { href: "/wiki/new-starters", label: "New Starters" },
      { href: "/wiki/regions", label: "Our Regions" },
      { href: "/wiki/related-brands", label: "Related Brands" },
      { href: "/wiki/resources", label: "Resources" },
      { href: "/wiki/team", label: "Executive Team" },
    ],
  },
  {
    title: "IT & Support",
    href: "/it-support",
    items: [
      { href: "/it-support/ai-policy", label: "AI Usage Policy" },
      {
        href: "/it-support/accounts-sso-passwords",
        label: "Accounts, SSO, Passwords",
      },
      { href: "/it-support/applications", label: "Applications" },
      { href: "/it-support/device-setup", label: "Device Setup" },
      { href: "/it-support/security", label: "Security" },
      { href: "/it-support/support", label: "Support" },
      { href: "/it-support/use-policy", label: "Acceptable Use Policy (AUP)" },
    ],
  },
];

// Lookup helpers for breadcrumbs and active state detection

export function findSectionByPath(pathname: string): NavSection | undefined {
  return navSections.find(
    (s) => pathname === s.href || pathname.startsWith(`${s.href}/`)
  );
}

export function findItemByPath(pathname: string): NavItem | undefined {
  for (const section of navSections) {
    const item = section.items.find(
      (i) => pathname === i.href || pathname.startsWith(`${i.href}/`)
    );
    if (item) return item;
  }
  return undefined;
}

export function isSectionActive(
  section: NavSection,
  pathname: string
): boolean {
  return (
    pathname === section.href || pathname.startsWith(`${section.href}/`)
  );
}
