"use client";

import React from "react";

export default function Experience() {
  const data = [
    {
      title: "2025-2026",
      content: (
        <div>
          <p className="text-white/60 dark:text-neutral-200 text-sm md:text-base font-light mb-4">
            Bachelor Architecture des logiciels à l&apos;ESGI. Je suis
            actuellement à la recherche dune alternance pour cette formation.
          </p>
        </div>
      ),
    },
    {
      title: "2023-2025",
      content: (
        <div>
          <p className="text-white/60 dark:text-neutral-200 text-sm md:text-base font-light mb-4 ">
            Etudiant en BTS SIO option SLAM à ISITECH et alternant à la
            Compagnie Nationale du Rhône.
          </p>
        </div>
      ),
    },
    {
      title: "2012",
      content: (
        <div>
          <p className="text-white/60 dark:text-neutral-200 text-sm md:text-base font-light mb-4">
            Obtention du baccalauréat Economique et Social - Mention AB.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-16 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 border-primary">
        Mes expériences
      </h1>
      <div className="max-w-4xl mx-auto ">
        <div className="space-y-12 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative group border-[1px] border-gray-600 bg-primary dark:bg-neutral-800 rounded-xl p-8 transition-all hover:shadow-md hover:border-accent"
            >
              <div className="ml-10 ">
                {/* Title */}
                <h2 className="text-white font-semibold text-lg mb-4">
                  {item.title}
                </h2>
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
