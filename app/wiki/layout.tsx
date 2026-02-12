import RequireAuth from "../../components/RequireAuth";

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>;
}
