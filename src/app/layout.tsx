import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Connecting",
  description: "",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        poppins.className
      )}
    >
      <body>
        <Providers>
          {/* <Navbar /> */}
          {authModal}
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
