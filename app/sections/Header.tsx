"use client";
import logo from "../assets/Majestic-Logo-Black.png";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

export default function Header() {

  const navRef = useRef(null);
  useScrollAnimation(navRef, 0.5);

  return (
    <header className="py-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">

  <div ref={navRef} className="flex justify-center mx-4 px-4">

    <nav>
      <ul className="text-xl text-white sm:flex flex-row gap-20 font-cinzel tracking-widest items-center">


        <div className="flex flex-col items-center">

          <img
            src={logo.src}
            alt="Majestic Balinese Logo"
            className="h-15 w-15 drop-shadow-[0_5px_10px_rgba(255,180,0,0.3)]"
          />

          <h1 className="text-5xl text-black font-italianno">
            Majestic Balinese
          </h1>

          <h5 className="text-black text-[10px]">
            Calatagan, Batangas
          </h5>

        </div>


      </ul>
    </nav>

  </div>
</header>

  );
}