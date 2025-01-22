"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType} from "swiper"
import "swiper/css";

import { ArrowUpRight, Github } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectsSliderBtn from "@/components/ProjectsSilderBtn";

const projects = [
  {
    num: "01",
    category: "Atelier de professionalisation",
    title: "GSB - Gestion de fiches de frais",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero consectetur dolores, nostrum ut aliquam laboriosam!",
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
    live: "",
  },
  {
    num: "02",
    category: "Atelier de professionalisation",
    title: "GSB - Med manager",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero consectetur dolores, nostrum ut aliquam laboriosam!",
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
    image: "/assets/projets/GSB_APP.png",
    github: "https://github.com/NicolasPons/AP2-MedManager",
    live: "",
  },
  {
    num: "03",
    category: "Atelier de professionalisation",
    title: "GSB - Med manager",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero consectetur dolores, nostrum ut aliquam laboriosam!",
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
    image: "/assets/projets/GSB_APP.png",
    github: "",
    live: "",
  },
];

export default function Projets() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper : SwiperType)  => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 0.4, duration:  0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-20 text-white ">
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
              <h3 className="text-[16px] mb-5">
                {project.category}
              </h3>
              <p className="text-white/60 text-[14px] mb-5">{project.description}</p>
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
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full border bg-white/5 flex justify-center items-center group">
                        <ArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full border bg-white/5 flex justify-center items-center group">
                        <Github className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github du projet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {projects.map((project, index) => {
                    return <SwiperSlide key={index} className="w-full">
                        <div className=" h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                            <div className="relative w-full h-full">
                                <Image src={project.image} fill className="object-cover" alt =""/>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
                <ProjectsSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] 
                xl:bottom-0 w-full justify-between xl:w-max xl:justify-none z-50" btnStyles="
                bg-accent hover:bg-accent-hover 
                text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconsStyles="rounded-full"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
