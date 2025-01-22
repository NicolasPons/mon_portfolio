'use client'

// import Image from 'next/image'
import { Card, CardHeader, CardContent } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'

// export default function Competences() {
//   const skills = [
//     { name: "C#", logo: "/assets/logos/skills/csharp.png", category: "client-lourd" },
//     { name: "ASP.NET", logo: "/assets/logos/skills/aspnet.png", category: "back-end" },
//     { name: "MySQL", logo: "/assets/logos/skills/mysql.png", category: "sgbd" },
//     { name: "Oracle", logo: "/assets/logos/skills/oracle.png", category: "sgbd" },
//     { name: "PostgreSQL", logo: "/assets/logos/skills/postgresql.png", category: "sgbd" },
//     { name: "VBA", logo: "/assets/logos/skills/vba.png", category: "client-lourd" },
//     { name: "Sélénium", logo: "/assets/logos/skills/selenium.png", category: "outils" },
//     { name: "Tailwind", logo: "/assets/logos/skills/tailwind.png", category: "front-end" },
//     { name: "Bootstrap", logo: "/assets/logos/skills/bootstrap.png", category: "front-end" },
//     { name: "React", logo: "/assets/logos/skills/react.png", category: "front-end" },
//     { name: "HTML", logo: "/assets/logos/skills/html.png", category: "front-end" },
//     { name: "CSS", logo: "/assets/logos/skills/css.png", category: "front-end" },
//     { name: "Git", logo: "/assets/logos/skills/git.png", category: "outils" },
//     { name: "Github", logo: "/assets/logos/skills/github.png", category: "outils" },
//     { name: "Entity Framework", logo: "/assets/logos/skills/entityframework.png", category: "back-end" },
//     { name: "Prisma", logo: "/assets/logos/skills/prisma.png", category: "back-end" },
//     { name: "Visual Studio", logo: "/assets/logos/skills/visualstudio.png", category: "outils" },
//     { name: "Visual Studio Code", logo: "/assets/logos/skills/visualstudiocode.png", category: "outils" },
//     { name: "WinForm", logo: "/assets/logos/skills/winform.png", category: "client-lourd" },
//     { name: "Javascript", logo: "/assets/logos/skills/javascript.png", category: "front-end" },
//     { name: "Typescript", logo: "/assets/logos/skills/typescript.png", category: "front-end" },
//     { name: "Shadcn", logo: "/assets/logos/skills/shadcn.png", category: "front-end" },
//     { name: "Windows", logo: "/assets/logos/skills/windows.png", category: "outils" },
//     { name: "Linux", logo: "/assets/logos/skills/linux.png", category: "outils" },
//     { name: "Ubuntu", logo: "/assets/logos/skills/ubuntu.png", category: "outils" },
//   ];
  
  

  return (
    <div className="flex flex-col w-full pt-10 px-4 justify-center items-center">
    <h2 className="text-white font-extrabold text-2xl text-center">Mes compétences</h2>

    <Card className="my-6 bg-secondary max-w-3xl w-full xl:max-w-7xl xl:w-full">
      <Tabs defaultValue="account" className=''>
        <CardHeader className="pb-2">
          <TabsList className="bg-border flex-wrap h-full">
            <TabsTrigger value="client-lourd">Logiciel</TabsTrigger>
            <TabsTrigger value="graphique">Graphique</TabsTrigger>
            <TabsTrigger value="back-end">Back-end</TabsTrigger>
            <TabsTrigger value="front-end">Front-end</TabsTrigger>
            <TabsTrigger value="sgbd">SGBD</TabsTrigger>
            <TabsTrigger value="outils">Outils</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent className='text-white'>
          <TabsContent value="client-lourd">Client lourd</TabsContent>
          <TabsContent value="back-end">Back end</TabsContent>
          <TabsContent value="front-end">Front end</TabsContent>
          <TabsContent value="sgbd">SGBD</TabsContent>
          <TabsContent value="outils">Outils</TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  </div>
  );
}


