import type { Metadata } from "next";
import "./globals.css";

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
      <body className="w-screen h-screen">
        {children}
        <button className="button">click me</button>
      </body>
    </html>
  );
}
