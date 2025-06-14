"use client";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function BtsSioSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Titre */}
      <h1 className="text-2xl xl:text-4xl font-extrabold text-center mb-8  ">
        BTS SIO - Option SLAM
      </h1>

      <div className="bg-secondary rounded-2xl py-8 border-gray-600 shadow-lg border-[1px]">
        {/* Contenu principal */}
        <p className="px-4 sm:px-6 lg:px-8 text-base sm:text-lg leading-relaxed mb-6">
          Le <strong>BTS Services Informatiques aux Organisations</strong>{" "}
          (SIO), option
          <strong> Solutions Logicielles et Applications Métier</strong> (SLAM),
          est une formation spécialisée dans la conception et le développement
          d’applications. Durant cette formation, j’ai eu l’occasion de réaliser{" "}
          <strong>quatre ateliers de professionnalisation</strong>, qui m’ont
          permis d’acquérir et de mettre en pratique des compétences en
          développement logiciel, en gestion de bases de données, et en
          méthodologies de projet.
        </p>

        {/* Liste des ateliers */}
        <div className=" p-6 rounded-md">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-accent text-center pb-2">
            Mes ateliers de professionnalisation
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
            <li>Création d&apos;une application de gestion de note de</li>
            <li>
              Développement d’un système de gestion des ordonnances médicales
            </li>
            <li>Développement d’une application de gestion des stocks</li>
            <li>Conception d’un outil d’analyse de données en entreprise</li>
          </ul>
        </div>
      </div>
      {/* Lien vers le tableau de compétences */}
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          size="lg"
          className="uppercase gap-2 bg-primary py-6 rounded-full border-accent hover:bg-accent text-accent xl:w-[400px] w-80 text-xs xl:text-sm"
        >
          <a href="/assets/tableau/Grille de compétences - PONS Nicolas.pdf" download>
            Télécharger mon tableau de compétences
          </a>
          <Download className="w-6 h-6 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
}
