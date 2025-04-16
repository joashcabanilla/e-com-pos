"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
export default function Header(){
    return(
        <header className="w-full fixed top-0 z-50 border-b border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-wrapper">
                <nav className="h-10 w-full grid grid-cols-5 content-center gap-6">
                    <div className="flex items-center gap-9">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/image/logo.png"
                                width={50}
                                height={50}
                                alt="LOGO"
                            />
                            <h1 className="text-3xl font-primary font-bold">NOVADECI</h1>
                        </div>
                        <Separator orientation="vertical" className="!w-[2px]" />
                    </div>
                    <div className="col-span-3 flex items-center">
                        <input type="search" className="w-10/12 h-10/12 border-2 border-dashed border-r-0  rounded-tl-lg rounded-bl-lg cursor-text indent-4 focus:border-solid focus:outline-none focus:border-r-0 focus:border-primary/50" placeholder="Search" />
                        <div className="flex items-center justify-center w-1/12 h-10/12 border-2 border-dashed border-l-0 rounded-tr-lg rounded-br-lg">
                            <button className="bg-primary w-1/4 h-full">
                            <Search  className="cursor-pointer" />
                            </button>

                        </div>
                    </div>
                    <div className="bg-amber-200">
                        icon cart, login, dark mode 
                    </div>
                </nav>
            </div>
        </header>
    );
} 


{/* <div className="flex items-center gap-2">
<Image
src="/image/logo.png"
width={50}
height={50}
alt="LOGO"
/>
<h1 className="text-3xl font-primary font-bold">NOVADECI</h1>
</div>
<Separator orientation="vertical" className="!w-[2px]" />
<div className="search">
search
</div> */}