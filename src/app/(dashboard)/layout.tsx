import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* @ts-expect-error Server Component */}
      <Navbar />
      <div className="container max-w-7xl mx-auto h-full pt-12">{children}</div>
    </div>
  );
}
