import Apropos from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experiences";
import BTS from "../components/Bts";
import VeilleTechnologique from "../components/Veille";
import Competences from "@/components/Competences";
import Projects from "../components/projects";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full z-[-1] bg-primary bg-[radial-gradient(#444363_1px,transparent_1px)] [background-size:16px_22px] " />
        <section id="about" className="border-gray-600 border-b-[1px]">
          <Apropos />
        </section>

        <section id="experiences" className="bg-secondary relative border-gray-600 border-b-[1px]">
          <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0 overflow-visible"></div>
          <Experience />
        </section>
        <section id="competences" className="border-gray-600 border-b-[1px]">
          <Competences />
        </section>
        <section id="projets" className="bg-secondary relative border-gray-600 border-b-[1px]">
        <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <Projects />
        </section>
        <section id="bts-sio" className="border-gray-600 border-b-[1px]">
          <BTS />
        </section>
        <section id="veille-technologique" className=" bg-secondary relative border-gray-600 border-b-[1px]">
        <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <VeilleTechnologique />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}

// absolute -top-10 right-48 w-72 h-72 bg-violet-500 rounded-full filter mix-blend-multiply blur-[100px] z-[-10] opacity-80