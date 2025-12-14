"use client";
import logo from "../assets/Majestic-Logo-Black.png";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Header() {

  return (

  <motion.div
    className=""
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >

  <header className="py-2 shadow-[0_9px_30px_rgba(0,0,0,0.5)]">
    <div className="flex justify-center mx-4 px-4">
      <nav>
        <ul className="sm:flex flex-row gap-10 md:gap-20 lg:gap-30 font-quintessential tracking-widest items-center">
          <h3 className="hidden sm:block text-xl font-medium">
            Home
          </h3>
          <h3 className="hidden sm:block text-xl font-medium">
            Amenities
          </h3>
          <div className="flex flex-col items-center">

            <img
              src={logo.src}
              alt="Majestic Balinese Logo"
              className="h-15 w-15 drop-shadow-[0_5px_10px_rgba(255,180,0,0.3)]"
            />

            <h1 className="text-center text-5xl text-amber-950 font-italianno">
              Majestic Balinese
            </h1>

            <h5 className="text-center text-amber-950 text-[12px] font-quintessential">
              Calatagan, Batangas
            </h5>

          </div>

          <h3 className="hidden sm:block text-xl font-medium">
            Gallery
          </h3>
          <h3 className="hidden sm:block text-xl font-medium">
            Contact
          </h3>
        </ul>
      </nav>
    </div>
</header>

</motion.div>

  );
}