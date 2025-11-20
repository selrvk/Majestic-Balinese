import Image from "next/image";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


export default function Home() {
  return (
    
    <>
      
      <Header />

      <section className="bg-linear-to-bl from-slate-950 to-red-950" id="home">

        <div className="grid justify-items-stretch border-amber-950 border-b-4">

          <h1 className="font-italianno px-10 ml-10 text-[clamp(8rem,15vw,70rem)] justify-self-start">
            Majestic
          </h1>

          <h1 className="font-italianno px-10 mr-10 text-[clamp(8rem,15vw,70rem)] justify-self-end">
            Balinese
          </h1>

        </div>

      </section>

      <section className="text-center pt-10" id="gallery">

        <h1 className="text-4xl">Gallery</h1>

        <Gallery/>

      </section>

      <section className="About">

      </section>

      <section className="Contact">

        <Contact/>

      </section>

      

    </>
  );
}
