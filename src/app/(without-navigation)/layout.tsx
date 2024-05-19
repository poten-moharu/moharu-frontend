export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-auto flex-col overflow-auto">{children}</main>
  );
}
