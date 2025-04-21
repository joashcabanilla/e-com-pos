//nextjs and react
"use client";
import Image from "next/image";

//UI library components
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

//Files and Images
import Logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="container-wrapper">
        <nav className="grid w-full grid-cols-2 content-center md:grid-cols-5">
          <div className="flex items-center bg-amber-200">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="LOGO"
                placeholder="blur"
                draggable={false}
                className="cursor-pointer"
              />
              <h1 className="font-oswald bg-accent cursor-pointer text-3xl font-bold">
                NOVADECI
              </h1>
            </div>
            <Separator orientation="vertical" className="!w-[2px]" />
          </div>
          <div className="hidden md:col-span-3 md:flex md:items-center">
            <div className="flex h-10/12 items-center justify-center rounded-tl-lg rounded-bl-lg border-2 border-r-0 border-dashed p-2">
              <Search />
            </div>
            <input
              type="text"
              className="focus:border-primary/50 h-10/12 w-10/12 cursor-text rounded-tr-lg rounded-br-lg border-2 border-l-0 border-dashed p-2 transition-all duration-500 ease-in-out focus:border-l-0 focus:border-solid focus:outline-none"
              placeholder="Search for product..."
            />
          </div>
          <div>{/* <Button variant="outline" size="sm">joash</Button> */}</div>
        </nav>
      </div>
    </header>
  );
}
