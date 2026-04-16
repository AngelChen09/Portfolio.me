import './page.css';
import Navbar from './components/Navbar';
import Image from 'next/image';
import FlowerSketch from '../public/assets/FlowerSketch.svg';

const navLinks = [
  "⊂((・x・))⊃",
  "About",
  "Skills",
  "Projects",
  "Contact"
]

export default function Home() {

  // const flowerSketchPath = '/assets/FlowerSketch.svg';

  return (
    <div className="base">
      <main className="content">
        <div className="navbar">
          <Navbar links={navLinks}/>
        </div>

        <section id={navLinks[0].toLowerCase()} className="section0">
          <h3 className="font-title">
            HI, I'M ANGEL
          </h3>
          <Image src={FlowerSketch} className="section0-flower " alt="Flower Sketch" loading="eager" priority/>
        </section>

        <section id={navLinks[1].toLowerCase()} className="section1">
          <h3 className="font-title">{navLinks[1]}</h3>
        </section>

        <section id={navLinks[2].toLowerCase()} className="section2">
          <h3 className="font-title">{navLinks[2]}</h3>
        </section>

        <section id={navLinks[3].toLowerCase()} className="section3">
          <h3 className="font-title">{navLinks[3]}</h3>
        </section>

        <section id={navLinks[4].toLowerCase()} className="section4">
          <h3 className="font-title">{navLinks[4]}</h3>
        </section>


      </main>
    </div>
  );
}