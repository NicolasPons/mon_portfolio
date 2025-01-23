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
      logo: "/assets/logos/aspnet.png",
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
      logo: "/assets/logos/html.png",
      category: "front-end",
    },
    {
      name: "CSS",
      logo: "/assets/logos/css.png",
      category: "front-end",
    },
    { name: "Git", logo: "/assets/logos/git.png", category: "outils" },
    {
      name: "Github",
      logo: "/assets/logos/github.png",
      category: "outils",
    },
    {
      name: "Entity Framework",
      logo: "/assets/logos/entityframework.png",
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
      logo: "/assets/logos/visualstudiocode.png",
      category: "outils",
    },
    {
      name: "WinForm",
      logo: "/assets/logos/winform.png",
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
  ];

  return (
    <div className="flex flex-col w-full pt-10 px-4 justify-center items-center">
      <h2 className="text-white font-extrabold text-2xl text-center">
        Mes compétences
      </h2>

      <Card className="my-6 bg-secondary max-w-3xl w-full xl:max-w-5xl xl:w-full">
        <Tabs defaultValue="account" className="">
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
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
                {skills
                  .filter((skill) => skill.category === "client-lourd")
                  .map((skill, index) => (
                    <div key={index} className="items-center justify-center w-full xl:max-w-44 mx-0 my-10">
                      <div
                        key={index}
                        className="flex justify-center gap-2 p-4 rounded-lg h-full xl:max-h-24 w-full"
                      >
                        <Image
                          src={skill.logo}
                          width={50}
                          height={50}
                          alt={`${skill.name} logo`}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-sm text-white text-center">{skill.name}</div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="front-end">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === "front-end")
                  .map((skill, index) => (
                    <div key={index} className="items-center justify-center">
                    <div
                      key={index}
                      className="flex justify-center gap-2 p-4 rounded-lg h-full xl:max-h-24 "
                    >
                      <Image
                        src={skill.logo}
                        width={50}
                        height={50}
                        alt={`${skill.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm text-accent text-center">{skill.name}</div>
                  </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="back-end">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === "back-end")
                  .map((skill, index) => (
                    <div key={index} className="items-center justify-center">
                    <div
                      key={index}
                      className="flex justify-center gap-2 p-4 rounded-lg h-full xl:max-h-24 "
                    >
                      <Image
                        src={skill.logo}
                        width={50}
                        height={50}
                        alt={`${skill.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm text-accent text-center">{skill.name}</div>
                  </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="sgbd">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === "sgbd")
                  .map((skill, index) => (
                    <div key={index} className="items-center justify-center">
                    <div
                      key={index}
                      className="flex justify-center gap-2 p-4 rounded-lg h-full xl:max-h-24 "
                    >
                      <Image
                        src={skill.logo}
                        width={50}
                        height={50}
                        alt={`${skill.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm text-accent text-center">{skill.name}</div>
                  </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="outils">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-0">
                {skills
                  .filter((skill) => skill.category === "outils")
                  .map((skill, index) => (
                    <div key={index} className="items-center justify-center">
                    <div
                      key={index}
                      className="flex justify-center gap-2 p-4 rounded-lg h-full xl:max-h-24 "
                    >
                      <Image
                        src={skill.logo}
                        width={50}
                        height={50}
                        alt={`${skill.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm text-accent text-center">{skill.name}</div>
                  </div>
                  ))}
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
