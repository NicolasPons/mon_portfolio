"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { ArrowUpRight, Github, Download } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import ProjectsSliderBtn from "@/components/ProjectsSilderBtn";

const projects = [
  {
    num: "01",
    category: "Atelier de professionalisation",
    title: "GSB - Gestion de fiches de frais",
    description:
      "Client lourd de gestion de notes de frais avec des rôles différenciés (utilisateur, comptable, administrateur), permettant la soumission et la validation des notes de frais et l'administration des utilisateurs.",
    stack: [
      {
        name: "C#",
      },
      {
        name: "WinForms",
      },
      {
        name: "MySQL",
      },
    ],
    image: "/assets/projets/GSB_APP.png",
    github: "https://github.com/NicolasPons/AP1_GSB",
    live: "/assets/projets/Installer.zip",
  },
  {
    num: "02",
    category: "Atelier de professionalisation",
    title: "GSB - Med manager",
    description:
      "Client léger déstiné aux médecins, permettant de gérer les dossiers médicaux, de créer des ordonnances en tenant compte des incompatibilités entre allergies et médicaments.",
    stack: [
      {
        name: "ASP.NET Core (C#)",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Entity Framework ",
      },
    ],
    image: "/assets/projets/MedManager_Dashboard.png",
    github: "https://github.com/NicolasPons/AP2-MedManager",
    live: "https://www.medmanager.ponsnicolas.fr/",
  },
  {
    num: "03",
    category: "Projet d'alternance",
    title: "Calcul de l'IVDE prévisionnel",
    description:
      "Outil destiné aux métiers pour analyser, à posteriori, l'indice de valeur de déplacement de l'énergie (IVDE) prévisionnel, en tenant compte des données de production pour en déruire les gains ou pertes.",
    stack: [
      {
        name: "VBA",
      },
      {
        name: "Oracle",
      },
    ],
    image: "/assets/projets/IVDE.png",
    github: "",
    live: "",
  },
  {
    num: "04",
    category: "Projet d'alternance",
    title: "Calcul du RPF et facturation",
    description:
      "Outil déstiné aux métiers pour aider au calcul du Réseau Primaire de Fréquence (RPF) et à la facturation au près de RTE.",
    stack: [
      {
        name: "VBA",
      },
      {
        name: "Oracle",
      },
    ],
    image: "/assets/projets/MacroRPF.png",
    github: "",
    live: "",
  },
  {
    num: "05",
    category: "Projet personnel",
    title: "Générateur de mot de passe",
    description:
      "Un générateur de mots de passe sécurisé et personnalisable avec visualisation du hachage SHA-256 en temps réel..",
    stack: [
      {
        name: "Next.js",
      },
    ],
    image: "/assets/projets/pwd-gen.png",
    github: "https://github.com/NicolasPons/pwd-generator",
    live: "https://pwd-generator-pink.vercel.app/",
  },
  {
    num: "06",
    category: "Projet personnel",
    title: "Quiz des capitales",
    description:
      "Un quiz interactif pour tester vos connaissances sur les capitales et les drapeaux du monde.",
    stack: [
      {
        name: "Next.js",
      },
    ],
    image: "/assets/projets/geoquiz.png",
    github: "https://github.com/NicolasPons/GeoQuizGame",
    live: "https://geo-quiz-game.vercel.app/",
  },
    {
    num: "07",
    category: "Projet personnel",
    title: "Portfolio d'un photographe",
    description:
      "Portfolio réalisé dans le cadre de la formation HTML & CSS Openclassroom.",
    stack: [
      {
        name: "Next.js",
      },
    ],
    image: "/assets/projets/portfolio-oc.png",
    github: "https://github.com/NicolasPons/portfolio-photos",
    live: "https://portfolio-photos-weld.vercel.app/",
  }
];

export default function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-20 text-white ">
          Mes projets
        </h1>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[10px]">
              {/* Outline Num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Projet Category */}
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mb-10000">
                {project.title}
              </h2>
              <h3 className="text-[16px] mb-5">{project.category}</h3>
              <p className="text-white/60 text-[14px] mb-5">
                {project.description}
              </p>
              <ul className=" flex gap-4 mb-5">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 mb-5"></div>
              <div className="flex items-center gap-4 z-10">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {project.num === "01" ? (
                        <a
                          href={project.live}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[70px] h-[70px] rounded-full border bg-white/5 flex justify-center items-center group"
                        >
                          <Download className="text-white text-3xl group-hover:text-accent" />
                        </a>
                      ) : (
                        // Pour les autres projets → lien live normal
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[70px] h-[70px] rounded-full border bg-white/5 flex justify-center items-center group"
                        >
                          <ArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </a>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {project.num === "01"
                          ? "Télécharger le projet"
                          : "Live project"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[70px] h-[70px] rounded-full border bg-white/5 flex justify-center items-center group"
                      >
                        <Github className="text-white text-3xl group-hover:text-accent" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github du projet</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute w-full h-full bg-black/10"></div>
                      <div className=" relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-fill"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <ProjectsSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] 
                xl:bottom-0 w-full justify-between xl:w-max xl:justify-none z-50"
                btnStyles="
                bg-accent hover:bg-accent-hover 
                text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
