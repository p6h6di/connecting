import HomeNav from "@/components/HomeNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNav />
      {children}
    </>
  );
}
