"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const info = [
  {
    icon: <Phone />,
    title: "Téléphone",
    description: "+336 18 84 58 18",
  },
  {
    icon: <Mail />,
    title: "E-mail",
    description: "ponsnicolas7@gmail.com   ",
  },
  {
    icon: <MapPin />,
    title: "Adresse",
    description: "7 rue du colonel Arnaud Beltrame, 69008 Lyon",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">
                {" "}
                Let&apos;s work together
              </h3>
              <p className=" text-white">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat iste nesciunt ex sint quos incidunt voluptate numquam ad
                commodi corrupti, consectetur, ipsam a optio dolores quibusdam!
                Nemo amet quas alias.
              </p>
              <div className="grid grid md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prénom" />
                <Input type="name" placeholder="Nom" />
                <Input type="email" placeholder="Adresse e-mail" />
                <Input type="phone" placeholder="Téléphone" />
              </div>
              <Textarea className="h-[200px]"
              placeholder="Type your message here"/>
              <Button className="max-w-40 "> Envoyer votre message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                    return <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                            <div>{item.icon}</div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="text-xl">{item.description}</h3>
                        </div>

                    </li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
