'use client'

import Image from 'next/image'

export default function Competences() {
  const skills = [
    { name: "VBA", logo: "/assets/logos/vba.png" },
    { name: "Sélénium", logo: "/assets/logos/selenium.png" },
    { name: "C#", logo: "/assets/logos/csharp.png" },
    { name: "ASP.NET", logo: "/assets/logos/aspnet.png" },
    { name: "MySQL", logo: "/assets/logos/mysql.png" },
    { name: "Oracle", logo: "/assets/logos/oracle.png" },
    { name: "PostgreSQL", logo: "/assets/logos/postgresql.png" },
    { name: "Tailwind", logo: "/assets/logos/tailwind.png" },
    { name: "Bootstrap", logo: "/assets/logos/bootstrap.png" },
    { name: "React", logo: "/assets/logos/react.png" },
    { name: "Next", logo: "/assets/logos/next.png" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Mes compétences
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-secondary shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-[#00ff99]"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                  priority={index < 4} // Priorise le lazy loading pour les premiers éléments
                />
              </div>
              <p className="text-white-700 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
