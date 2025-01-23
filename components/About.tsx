import React from "react";
import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function Apropos() {

  const words = [
    { 
      text : "Nicolas",
      className: "text-accent",
    },
    {
      text : "Pons",
      className: "text-accent",
    }
  ]
  return (
      <div className="container mx-auto h-full mt-20">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* Texte */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className=" text-base md:text-lg xl:text-xl"> Développeur Full-Stack </span>
            <h1 className="h1 mb-6 ">
            {/* <span className="text-accent"> Nicolas Pons</span>{" "} */}
            <TypewriterEffectSmooth words={words} />
            </h1>
            <p className="max-w-[700px] mb-9 text-white">
              Développeur en reconversion, actuellement en BTS SIO (option SLAM)
              en alternance à ISITECH Lyon. Je travaille à la Compagnie
              Nationale du Rhône. Passionné et déterminé, je vise à approfondir
              mes compétences et me spécialiser davantage dans le développement
              logiciel après mon BTS.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 py-6 bg-primary rounded-full border-accent hover:bg-accent text-accent"
              >
                <a href="assets/cv/cv.pdf" download>
                  Télécharger mon CV
                </a>
                <FileDownIcon className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="py-6 px-6 h-9 border border-accent rounded-full flex justify-center items-center 
                                    text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-1 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
  );
}
