import Apropos from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experiences";
import BTS from "../components/Bts";
import Veille from "../components/Veille";
import Competences from "@/components/Competences";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full z-[-1] bg-primary bg-[radial-gradient(#444363_1px,transparent_1px)] [background-size:16px_16px]" />
        <section id="about">
          <Apropos />
        </section>

        <section id="experiences" className="bg-secondary relative">
          <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <Experience />
        </section>
        <section id="competences">
          <Competences />
        </section>
        <section id="projets" className="bg-secondary relative">
        <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <Projects />
        </section>
        <section id="bts-sio">
          <BTS />
        </section>
        <section id="veille-technologique" className=" bg-secondary relative">
        <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <Veille />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
