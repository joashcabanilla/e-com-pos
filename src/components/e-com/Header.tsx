//nextjs and react
"use client";
import Image from "next/image";

//UI library components
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

//tailwind variants
import { container } from "@/lib/variants/container";

//Files and Images
import Logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <div className={container()}>
        <nav className="w-full grid grid-cols-2 h-12">
          <div className="flex items-center bg-amber-300">
            <div className="">
            
            </div>
            <div className="hidden sm:block">
              <h1 className="font-oswald cursor-pointer text-3xl font-bold">
                NOVADECI
              </h1>
            </div>
          </div>
          <div className="bg-amber-300">icons</div>
        </nav>
      </div>
    </header>
  );
}
