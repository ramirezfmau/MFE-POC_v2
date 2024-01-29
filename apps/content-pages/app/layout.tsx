import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SecondaryLayout } from "@repo/layout/secondary-layout";
import { MainLayout } from "@repo/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomePage"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
