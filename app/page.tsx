import Image from "next/image";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    
    <>
      
      <Header />

      <section className="bg-linear-to-bl from-slate-950 to-red-950" id="home">

        <div className="grid justify-items-stretch border-amber-950 border-b-4">

          <div className="relative w-full">

              <img src="https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/529710804_122119939118943850_1053819985797276166_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQZWdb_WtDJar3zujtr9Rszji-sKxhSNPOOL6wrGFI0yAgmGnq4EVdpxJ2isgz7SHHzbCCVv1N-OHCwk-mzV3n&_nc_ohc=2SMyG5sfqD0Q7kNvwG-XBBj&_nc_oc=Adk-5_J8wPndyngpPRGdDSE2QAW2deejKhWB5lgIIOP0ZNsviD2YNMX6oPt8qKMLqR_f8tIjTedmE11INaW43cJP&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=B01nEDE0AWKXqZKWZHZzkA&oh=00_AfjYKUcZKRkFy_nwUEY51NSXuTB4-B5CwhSfWisUnZPTdg&oe=6927888A" alt="Majestic Balinese Mansion Home" className="z-1 opacity-60 object-cover w-full h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] brightness-60"/>

              <h1 className="absolute top-0 left-20 z-2 text-amber-100 font-italianno px-10 ml-10 text-[clamp(9rem,20vw,300rem)] self-start">
                Majestic
              </h1>

              <h1 className="absolute top-70 right-20 z-3 text-amber-100 font-italianno px-10 mr-10 text-[clamp(9rem,25vw,300rem)]">
                Balinese
              </h1>

          </div>

        </div>

      </section>

      <section className="text-center pt-10" id="gallery">

        <Gallery/>

      </section>

      <section className="About">

      </section>

      <section className="Contact">

        <Contact/>

      </section>

      <Footer/>
    </>
  );
}
