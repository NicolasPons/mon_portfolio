import Apropos from "./about/page";
import Contact from "./contact/page";
import Experience from "./experiences/page";
import Projets from "./projets/page";
import BTS from "./bts-sio/page";
import Veille from "./veille-technologique/page";

export default function Home() {
  return (
    <main>
      <section id="about" className="bg-primary"><Apropos /></section>
      <section id="experiences" className="bg-secondary"><Experience /></section>
      <section id="projets" className="bg-primary"><Projets /></section>
      <section id="bts-sio" className="bg-secondary"><BTS /></section>
      <section id="veille-technologique" className=" bg-primary"><Veille /></section>
      <section id="contact" className="bg-secondary"><Contact /></section>
    </main>
  );
}