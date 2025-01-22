"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export default function BtsSioSection() {
    return (
        
            <div className="max-w-4xl mx-auto">
                {/* Titre */}
                <h1 className="text-2xl xl:text-4xl font-bold text-center mb-8">
                    BTS SIO - Option SLAM
                </h1>

                {/* Contenu principal */}
                <p className="text-lg leading-relaxed mb-6">
                    Le <strong>BTS Services Informatiques aux Organisations</strong> (SIO), option 
                    <strong> Solutions Logicielles et Applications Métier</strong> (SLAM), est une 
                    formation spécialisée dans la conception et le développement d’applications. 
                    Durant cette formation, j’ai eu l’occasion de réaliser <strong>quatre ateliers de 
                    professionnalisation</strong>, qui m’ont permis d’acquérir et de mettre en pratique des 
                    compétences en développement logiciel, en gestion de bases de données, et en 
                    méthodologies de projet.
                </p>

                {/* Liste des ateliers */}
                <div className="bg-primary p-6 rounded-md shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-accent">
                        Mes ateliers de professionnalisation
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Création d&apos;une application de gestion de note de</li>
                        <li>Développement d’un système de gestion des ordonnances médicales</li>
                        <li>Développement d’une application de gestion des stocks</li>
                        <li>Conception d’un outil d’analyse de données en entreprise</li>
                    </ul>
                </div>

                {/* Lien vers le tableau de compétences */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/assets/mon-tableau-de-competences.xlsx"
                        target="_blank"
                        download
                        className=" uppercase flex items-center rounded-3xl gap-2 bg-primary border-accent border-[1px] hover:bg-accent-hover text-accent hover:text-primary font-medium py-2 px-4 transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Télécharger mon tableau de compétences
                    </Link>
                </div>
            </div>
    );
};

