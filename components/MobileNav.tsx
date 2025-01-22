"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Links = [
    { name: "A propos de moi", path: "#about" },
    { name: "Mes expériences", path: "#experiences" },
    { name: "Mes compétences", path: "#competences" },
    { name: "Mes projets", path: "#projets" },
    { name: "Le BTS SIO", path: "#bts-sio" },
    { name: "Veille technologique", path: "#veille-technologique" },
    { name: "Contact", path: "#contact" },
];

export default function MobileNav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";
            Links.forEach((link) => {
                const section = document.querySelector(link.path) as HTMLElement | null;
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const scrollPosition = window.scrollY + window.innerHeight / 2;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition <= sectionTop + sectionHeight
                    ) {
                        currentSection = link.path;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once on mount to set initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <Menu className="text-[32px] text-accent " />
            </SheetTrigger>
            <SheetContent className="flex flex-col ">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Nicolas <span className="text-accent ">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {Links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === activeSection
                                    ? "text-accent border-b-2 border-accent"
                                    : ""
                            } text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
