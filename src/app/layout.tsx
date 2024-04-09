import type { Metadata } from "next";
import { segoeui } from "../../public/assets/fonts";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Sidebar from "@/components/layout/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Transmonitor",
  description: "an app for monitoring your payment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeui.className} h-screen w-screen overflow-clip`}>
        <div className="w-full h-full  bg-[#F7F8FA]">
          <Header />
          <div className="flex h-full max-h-full  mt-[60px]">
            <Sidebar  />
            <div className="p-8 flex-1 h-full overflow-y-auto pb-14">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
