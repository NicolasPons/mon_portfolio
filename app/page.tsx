import Apropos from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experiences";
import Projets from "../components/projects";
import BTS from "../components/Bts";
import Veille from "../components/Veille";
import Competences from "@/components/Competences";

export default function Home() {
  return (
    <main>
      <section id="about" className="bg-primary"><Apropos /></section>
      <section id="experiences" className="bg-secondary"><Experience /></section>
      <section id="competences" className="bg-primary"><Competences/></section>
      <section id="projets" className="bg-secondary"><Projets /></section>
      <section id="bts-sio" className="bg-primary"><BTS /></section>
      <section id="veille-technologique" className=" bg-secondary"><Veille /></section>
      <section id="contact" className="bg-primary"><Contact /></section>
    </main>
  );
}