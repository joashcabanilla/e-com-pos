//nextjs and react
import type { Metadata } from "next";

//CSS and fonts
import "./globals.css";
import { oswald, inter } from "@/assets/fonts/font";

//Components 
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
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${inter.className}`}>
      <body className="w-full h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}