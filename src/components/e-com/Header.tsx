//nextjs and react 
"use client";
import Image from "next/image";

//UI library components
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

//Files and Images
import Logo from "../../../public/images/logo.png";

export default function Header(){
    return(
        <header>
            <div className="container-wrapper">
                <nav className="h-10 w-full grid grid-cols-5 content-center gap-6">
                    <div className="flex items-center gap-9">
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
                            <h1 className="text-3xl font-oswald font-bold cursor-pointer">NOVADECI</h1>
                        </div>
                        <Separator orientation="vertical" className="!w-[2px]" />
                    </div>
                    <div className="col-span-3 flex items-center">
                        <div className="flex items-center justify-center h-10/12 border-2 border-dashed border-r-0 rounded-tl-lg rounded-bl-lg p-2">
                            <Search />
                        </div>
                        <input type="text" className="w-10/12 h-10/12 border-2 border-dashed border-l-0 rounded-tr-lg rounded-br-lg cursor-text focus:border-solid focus:outline-none focus:border-l-0 focus:border-primary/50 p-2 transition-all duration-600 ease-in-out" placeholder="Search for product..." />
                    </div>
                    <div className="bg-amber-200">
                        icon cart, login, dark mode 
                    </div>
                </nav>
            </div>
        </header>
    );
} 