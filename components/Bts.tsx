"use client";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function BtsSioSection() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre */}
            <h1 className="text-2xl xl:text-4xl font-bold text-center mb-8">
                BTS SIO - Option SLAM
            </h1>

            {/* Contenu principal */}
            <p className="px-4 sm:px-6 lg:px-8 text-base sm:text-lg leading-relaxed mb-6">
                Le <strong>BTS Services Informatiques aux Organisations</strong> (SIO), option 
                <strong> Solutions Logicielles et Applications Métier</strong> (SLAM), est une 
                formation spécialisée dans la conception et le développement d’applications. 
                Durant cette formation, j’ai eu l’occasion de réaliser <strong>quatre ateliers de 
                professionnalisation</strong>, qui m’ont permis d’acquérir et de mettre en pratique des 
                compétences en développement logiciel, en gestion de bases de données, et en 
                méthodologies de projet.
            </p>

            {/* Liste des ateliers */}
            <div className="bg-primary p-6 rounded-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-accent">
                    Mes ateliers de professionnalisation
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                    <li>Création d&apos;une application de gestion de note de</li>
                    <li>Développement d’un système de gestion des ordonnances médicales</li>
                    <li>Développement d’une application de gestion des stocks</li>
                    <li>Conception d’un outil d’analyse de données en entreprise</li>
                </ul>
            </div>

            {/* Lien vers le tableau de compétences */}

            <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 py-6 bg-primary rounded-full border-accent hover:bg-accent text-accent ml-12 w-80 xl:w-[400] xl:ml-6 text-xs xl:text-sm"
              >
                <a href="/assets/tableau/tableau.xlsx" download>
                  Télécharger mon tableau de compétences
                </a>
                <Download className="w-6 h-6 sm:w-5 sm:h-5" />
              </Button>
        </div>
    );
};
