export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="flex-auto overflow-auto">{children}</main>;
}
