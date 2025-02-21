"use client";

import React from "react";

export default function Experience() {
  const data = [
    {
      title: "2023-2025",
      content: (
        <div>
          <p className="text-white/60 dark:text-neutral-200 text-sm md:text-base font-light mb-4 ">
            Etudiant en BTS SIO et alternant à la Compagnie Nationale du Rhône, je développe des compétences en gestion de bases de données et en développement logiciel.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-white/60 dark:text-neutral-200 text-sm md:text-base font-light mb-4">
            Participation à divers projets en développement, de la conception à l'intégration des fonctionnalités dans des environnements de production.
          </p>
        </div>
      ),
    },
    {
      title: "2012",
      content: (
        <div>
          <p className="text-white/60 dark:text-neutral-200 text-sm md:text-base font-light mb-4">
            Obtention du baccalauréat Economique et Social, mention AB, avec une passion pour la technologie et les sciences économiques.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 border-primary">
        Mes expériences
      </h1>
      <div className="max-w-4xl mx-auto ">
        <div className="space-y-12 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative group border-2 border-primary bg-primary dark:bg-neutral-800 rounded-xl p-8 shadow-lg transition-all hover:shadow-md hover:border-accent"
            >
              {/* Circle marker */}
              <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-lg group-hover:bg-accent"></div>
              
              <div className="ml-10 ">
                {/* Title */}
                <h2 className="text-white font-semibold text-lg mb-4">{item.title}</h2>
                {/* Content */}
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
