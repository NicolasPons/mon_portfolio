"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function Contact() {
  return (

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">
                {" "}
                Let&apos;s work together
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prénom" />
                <Input type="name" placeholder="Nom" />
                <Input type="email" placeholder="Adresse e-mail" />
                <Input type="phone" placeholder="Téléphone" />
              </div>
              <Textarea className="h-[200px]"
              placeholder="Type your message here"/>
              <Button className="uppercase flex max-w-[225px] py-6 bg-primary rounded-full border-[1px] border-accent hover:bg-accent text-accent hover:text-primary"> Envoyer votre message</Button>
            </form>
          </div>
          
        </div>
      </div>
  );
}
