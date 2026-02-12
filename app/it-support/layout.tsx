import RequireAuth from "../../components/RequireAuth";

export default function ITSupportLayout({ children }: { children: React.ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>;
}
