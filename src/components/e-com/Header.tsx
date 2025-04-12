"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Header(){
    return(
        <header className="w-full fixed top-0 z-50 border-b border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-wrapper">
                <nav className="h-10 w-full flex items-center">
                    <div className="flex items-center w-2/12 ">
                        <Image
                        src="/image/logo.png"
                        width={50}
                        height={50}
                        alt="LOGO"
                        />
                        <h1 className="ml-2 text-3xl font-primary font-bold">NOVADECI</h1>
                    </div>
                    <Separator orientation="vertical"/>

                </nav>
            </div>
        </header>
    );
} 