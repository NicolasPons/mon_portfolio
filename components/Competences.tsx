"use client";

import Image from "next/image";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export default function Competences() {
  const skills = [
    {
      name: "C#",
      logo: "/assets/logos/csharp.png",
      category: "client-lourd",
    },
    {
      name: "ASP.NET",
      logo: "/assets/logos/aspnetcore.svg",
      category: "back-end",
    },
    { name: "MySQL", logo: "/assets/logos/mysql.png", category: "sgbd" },
    {
      name: "Oracle",
      logo: "/assets/logos/oracle.png",
      category: "sgbd",
    },
    {
      name: "PostgreSQL",
      logo: "/assets/logos/postgresql.png",
      category: "sgbd",
    },
    {
      name: "VBA",
      logo: "/assets/logos/vba.png",
      category: "client-lourd",
    },
    {
      name: "Sélénium",
      logo: "/assets/logos/selenium.png",
      category: "outils",
    },
    {
      name: "Tailwind",
      logo: "/assets/logos/tailwind.png",
      category: "front-end",
    },
    {
      name: "Bootstrap",
      logo: "/assets/logos/bootstrap.png",
      category: "front-end",
    },
    {
      name: "React",
      logo: "/assets/logos/react.png",
      category: "front-end",
    },
    {
      name: "HTML",
      logo: "/assets/logos/html.svg",
      category: "front-end",
    },
    {
      name: "CSS",
      logo: "/assets/logos/css.svg",
      category: "front-end",
    },
    { name: "Git", logo: "/assets/logos/git.svg", category: "outils" },
    {
      name: "Github",
      logo: "/assets/logos/github.svg",
      category: "outils",
    },
    {
      name: "Entity Framework",
      logo: "/assets/logos/efcore.png",
      category: "back-end",
    },
    {
      name: "Prisma",
      logo: "/assets/logos/prisma.png",
      category: "back-end",
    },
    {
      name: "Visual Studio",
      logo: "/assets/logos/visualstudio.png",
      category: "outils",
    },
    {
      name: "Visual Studio Code",
      logo: "/assets/logos/vscode.webp",
      category: "outils",
    },
    {
      name: "WinForms",
      logo: "/assets/logos/winforms.png",
      category: "client-lourd",
    },
    {
      name: "Javascript",
      logo: "/assets/logos/javascript.png",
      category: "front-end",
    },
    {
      name: "Typescript",
      logo: "/assets/logos/typescript.png",
      category: "front-end",
    },
    {
      name: "Shadcn",
      logo: "/assets/logos/shadcn.png",
      category: "front-end",
    },
    {
      name: "Windows",
      logo: "/assets/logos/windows.png",
      category: "outils",
    },
    {
      name: "Linux",
      logo: "/assets/logos/linux.png",
      category: "outils",
    },
    {
      name: "Ubuntu",
      logo: "/assets/logos/ubuntu.png",
      category: "outils",
    },
    {
      name: "NextJS",
      logo: "/assets/logos/nextjs.svg",
      category: "back-end",
    },
  ];

  return ( 
    <div className="flex flex-col w-full pt-10 px-4 justify-center items-center">
      <h2 className="text-white font-extrabold text-base md:text-4xl text-center">
        Mes compétences
      </h2>

      <Card className="my-6 bg-secondary max-w-3xl w-full xl:max-w-5xl xl:w-full md:mt-20 xl:mt-32">
        <Tabs defaultValue="client-lourd" className="">
          <CardHeader className="pb-2">
            <TabsList className="bg-border flex-wrap h-full bg-primary rounded-xl">
              <TabsTrigger value="client-lourd">Logiciel</TabsTrigger>
              <TabsTrigger value="back-end">Back-end</TabsTrigger>
              <TabsTrigger value="front-end">Front-end</TabsTrigger>
              <TabsTrigger value="sgbd">SGBD</TabsTrigger>
              <TabsTrigger value="outils">Outils</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent className="text-white">
            <TabsContent value="client-lourd">
              <Competence id="client-lourd" />
            </TabsContent>

            <TabsContent value="front-end">
              <Competence id="front-end" />
            </TabsContent>

            <TabsContent value="back-end">
              <Competence id="back-end" />
            </TabsContent>

            <TabsContent value="sgbd">
              <Competence id="sgbd" />
            </TabsContent>

            <TabsContent value="outils">
              <Competence id="outils" />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );

  function Competence({ id }: { id: string }) {
    switch (id) {
      case "client-lourd":
        return <DivCompetence category={id} />;
        break;
      case "front-end":
        return <DivCompetence category={id} />;
        break;
      case "back-end":
        return <DivCompetence category={id} />;
        break;
      case "sgbd":
        return <DivCompetence category={id} />;
        break;
      case "outils":
        return <DivCompetence category={id} />;
        break;
    }
  }

  function DivCompetence({ category }: { category: string }) {
    const filteredSkills = skills.filter(
      (skill) => skill.category === category
    );
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center rounded-lg mb-6"
          >
            <Image
              src={skill.logo}
              width={200}
              height={200}
              alt={`${skill.name} logo`}
              className="object-contain w-20 h-20"
            />
            <p className="text-md text-white text-center mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
