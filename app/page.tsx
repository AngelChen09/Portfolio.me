import './page.css';
import Navbar from './components/Navbar';
import ProjectPolaroid from './components/ProjectPolaroid';
import Image from "next/image";

const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Contact"
]

export default function Home() {
  return (
    <div className="base">
      <main className="content">
        <div className="navbar">
          <Navbar links={navLinks}/>
        </div>

        <section id={navLinks[0].toLowerCase()} className="section1">
          <h3>{navLinks[0]}</h3>
        </section>

        <section id={navLinks[1].toLowerCase()} className="section2">
          <h3>{navLinks[1]}</h3>
        </section>

        <section id={navLinks[2].toLowerCase()} className="section3">
          {/* <div className="section3-right">
            <h1>{navLinks[2]}</h1>
          </div> */}
          <div className="section3-left">
            <ProjectPolaroid />
          </div>
        </section>

        <section id={navLinks[3].toLowerCase()} className="section4">
          <h3>{navLinks[3]}</h3>
        </section>



      </main>
    </div>
  );
}
