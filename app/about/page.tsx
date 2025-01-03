import React from "react";
import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";


export default function Apropos(){
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Texte */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl"> Développeur Full-Stack </span>
                        <h1 className="h1 mb-6"> Bonjour, Je suis <br/> <span className="text-accent"> Nicolas Pons</span> </h1>
                        <p className="max-w-[500px] mb-9 text-white">Développeur en reconversion, actuellement en BTS SIO (option SLAM) en alternance à ISITECH Lyon. 
                            Je travaille à la Compagnie Nationale du Rhône. 
                            Passionné et déterminé, je vise à approfondir mes compétences et me spécialiser davantage dans le développement logiciel après mon BTS.</p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button 
                            variant="outline" 
                            size="lg" 
                            className="uppercase flex items-center gap-2 py-6 bg-secondary rounded-full border-accent hover:bg-accent text-accent">
                                <span>Télécharger mon CV</span>
                                <FileDownIcon className="text-xl"/>
                            </Button>
                                <div className="mb-8 xl:mb-0">
                                    <Socials containerStyles="flex gap-6" iconStyles="py-6 px-6 h-9 border border-accent rounded-full flex justify-center items-center 
                                    text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                                </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
                        <Photo/>
                    </div>
                </div>
            </div>
        </section>
    )
}