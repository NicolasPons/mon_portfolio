"use client"

import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react';
import Link from 'next/link'

const links = [
    {
        name: 'A propos de moi',
        path: '/about'
    },
    {
        name: 'Mes expériences',
        path: '/experiences'
    },
    {
        name: 'Le BTS SIO',
        path: '/bts-sio'
    },
    {
        name: 'Mes projets',
        path: '/projets'
    },
    {
        name: 'Veille technologique',
        path: '/'
    },
    {
        name: 'Avenir',
        path: '/avenir'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

export default function MobileNav(){
    const pathName = usePathname();
    return(
        
        <Sheet>
            <SheetTrigger className=' flex justify-center items-center'>
                <Menu className="text-[32px] text-accent "/>
            </SheetTrigger>
            <SheetContent className='flex flex-col '>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                         <h1 className='text-4xl font-semibold'> Nicolas <span className='text-accent '>.</span> </h1>   
                    </Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}