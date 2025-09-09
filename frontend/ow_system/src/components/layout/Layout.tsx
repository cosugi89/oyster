import Header from "./Header";
import AppSidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header>
        <Header />
      </header>
      <main className="flex">
        <aside className="min-w-60 w-1/5">
          <AppSidebar />
        </aside>
        <div className="mt-[var(--header-height)] w-4/5">{children}</div>
      </main>
    </div>
  );
}
