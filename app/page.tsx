"use client";

import Image from "next/image";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const majesticRef = useRef(null);
  const balineseRef = useRef(null);

  const [majesticInViewRef, majesticInView] = useInView({ triggerOnce: false });
  const [balineseInViewRef, balineseInView] = useInView({ triggerOnce: false });

  const majesticControls = useAnimation();
  const balineseControls = useAnimation();

  useEffect(() => {
    if (majesticInView) {
      majesticControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    } else {
      majesticControls.start({ x: -100, opacity: 0, transition: { duration: 0.8 } });
    }

    if (balineseInView) {
      balineseControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    } else {
      balineseControls.start({ x: 100, opacity: 0, transition: { duration: 0.8 } });
    }
  }, [majesticInView, balineseInView, majesticControls, balineseControls]);

  return (
    <>
      <Header />

      <section className="bg-linear-to-bl from-slate-950 to-red-950 overflow-x-hidden" id="home">
        <div className="grid justify-items-stretch">
          <div className="relative w-full">

            <img
              src="https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/529710804_122119939118943850_1053819985797276166_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQZWdb_WtDJar3zujtr9Rszji-sKxhSNPOOL6wrGFI0yAgmGnq4EVdpxJ2isgz7SHHzbCCVv1N-OHCwk-mzV3n&_nc_ohc=2SMyG5sfqD0Q7kNvwG-XBBj&_nc_oc=Adk-5_J8wPndyngpPRGdDSE2QAW2deejKhWB5lgIIOP0ZNsviD2YNMX6oPt8qKMLqR_f8tIjTedmE11INaW43cJP&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=B01nEDE0AWKXqZKWZHZzkA&oh=00_AfjYKUcZKRkFy_nwUEY51NSXuTB4-B5CwhSfWisUnZPTdg&oe=6927888A"
              alt="Majestic Balinese Mansion Home"
              className="z-1 opacity-60 object-cover w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[770px] 2xl:h-[1000px] brightness-75"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-yellow-50"></div>

            <motion.h1
              ref={majesticInViewRef}
              animate={majesticControls}
              className="absolute top-[5%] left-5 sm:top-[5%] sm:left-10 md:-top-[5%] md:left-20 lg:-top-[5%] lg:left-20 xl:-top-[10%] xl:left-20 2xl:top-[-10%] 2xl:left-20 z-20 text-amber-100 font-italianno text-[25vw]"
            >
              Majestic
            </motion.h1>

            <motion.h1
              ref={balineseInViewRef}
              animate={balineseControls}
              className="absolute top-[40%] right-5 sm:top-[50%] sm:right-10 md:top-[40%] md:right-20 lg:top-[20%] lg:right-20 xl:top-[20%] xl:right-20 2xl:top-[25%] 2xl:right-20 z-30 text-amber-100 font-italianno text-[25vw]"
            >
              Balinese
            </motion.h1>

          </div>
        </div>
      </section>

      <section className="text-center pt-10" id="gallery">
        <Gallery />
      </section>

      <section className="About">
          

      </section>

      <section className="Contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
