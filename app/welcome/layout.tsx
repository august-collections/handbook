import RequireAuth from "../../components/RequireAuth";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>;
}
