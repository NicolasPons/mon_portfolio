import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "2023-2025",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Etudiant en BTS SIO et alternant à la Compagnine Nationale du Rhône.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "2012",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Obtention d&apos;un baccalauréat Economique et Sociale - Mention AB
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-20 text-white ">
        Mes expériences
      </h1>
      <Timeline data={data} />
    </div>
  );
}
