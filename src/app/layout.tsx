import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/e-com/Header";

export const metadata: Metadata = {
  title: "my-pos",
  description: "Developed by Joash Cabanilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
