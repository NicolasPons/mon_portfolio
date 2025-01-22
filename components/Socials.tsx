import Link from "next/link"
import { Github , Linkedin  } from 'lucide-react'


const socials = [
    {icon : <Github/>, path : "https://github.com/NicolasPons"},
    {icon : <Linkedin/>, path : "https://www.linkedin.com/in/nicolas-pons-16715a276/"}
]

export default function Socials({containerStyles, iconStyles} : {containerStyles : string, iconStyles : string }) {
    return (

    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key = {index} href={item.path} target="_blank" className={iconStyles}>
                {item.icon}
                </Link>
        })}
    </div>
    )
}