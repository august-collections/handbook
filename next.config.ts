import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/foundation/founders-vision", destination: "/welcome/founders-vision", permanent: true },
      { source: "/foundation/ethos", destination: "/welcome/the-august-ethos", permanent: true },
      { source: "/foundation/values", destination: "/welcome/our-values", permanent: true },
      { source: "/overview", destination: "/welcome", permanent: true },
      { source: "/overview/ethos", destination: "/welcome/the-august-ethos", permanent: true },
      { source: "/overview/onboarding", destination: "/wiki/new-starters", permanent: true },
      { source: "/company/team", destination: "/wiki/team", permanent: true },
      { source: "/company/hr-support", destination: "/wiki/hr-and-people", permanent: true },
      { source: "/company/how-we-work", destination: "/wiki/how-we-work", permanent: true },
      { source: "/company/resources", destination: "/wiki/resources", permanent: true },
      { source: "/company/branding", destination: "/wiki/branding-and-identity", permanent: true },
      { source: "/operations/introduction", destination: "/welcome/introduction-to-august", permanent: true },
      { source: "/operations/collections", destination: "/wiki/collections", permanent: true },
      { source: "/operations/homeowners", destination: "/wiki/homeowners", permanent: true },
      { source: "/operations/regions", destination: "/wiki/regions", permanent: true },
      { source: "/operations/financials", destination: "/wiki/financials", permanent: true },
      { source: "/operations/legal", destination: "/wiki/legal", permanent: true },
      { source: "/operations/related-brands", destination: "/wiki/related-brands", permanent: true },
      { source: "/tech-it", destination: "/it-support", permanent: true },
      { source: "/tech-it/acceptable-use-policy", destination: "/it-support/use-policy", permanent: true },
      { source: "/how-to", destination: "/wiki/how-to", permanent: true },
    ];
  },
};

export default nextConfig;
