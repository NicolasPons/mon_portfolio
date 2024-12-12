'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Links = [
    {
        name : "Accueil",
        path : "/"
    },
    {
        name : "A propos de moi",
        path : "/apropos"
    },
    {
        name : "Mes expériences",
        path : "/experiences"
    },
    {
        name : "Le BTS SIO",
        path : "/btssio"
    },
    {
        name : "Mes projets",
        path : "/projets"
    },
    {
        name : "Veille technologique",
        path : "/veilletechnologique"
    },
    {
        name : "Avenir",
        path : "/avenir"
    },
    {
        name : "Contact",
        path : "/contact"
    },
]

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {Links.map((link, index)=> {
                return <Link href={link.path} key={index} 
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all `}>
                            {link.name}
                        </Link>

            })}
        </nav>
    )
}