'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const Links = [
    { name: "A propos de moi", path: "#about" },
    { name: "Mes expériences", path: "#experiences" },
    { name: "Mes compétences", path: "#competences"},
    { name: "Mes projets", path: "#projets" },
    { name: "Le BTS SIO", path: "#bts-sio" },
    { name: "Veille technologique", path: "#veille-technologique" },
    { name: "Contact", path: "#contact" },
];

export default function Nav() {
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveLink(`#${visibleSection.target.id}`);
                }
            },
            { threshold: 0.5 } // 50% de la section doit être visible pour être considérée comme active
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${activeLink === link.path ? "text-accent border-b-2 border-accent" : ""} 
                                capitalize font-medium hover:text-accent transition-all xl:text-base text-`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
