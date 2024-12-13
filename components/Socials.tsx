import Link from "next/link"
import { Github , Linkedin  } from 'lucide-react'


const socials = [
    {icon : <Github/>, path : ""},
    {icon : <Linkedin/>, path : ""}
]

export default function Socials({containerStyles, iconStyles}) {
    return (

    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key = {index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
        })}
    </div>
    )
}