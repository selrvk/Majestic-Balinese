import logo from "../assets/Majestic-Logo-White.png";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

export default function Header() {

  const navRef = useRef(null);
  useScrollAnimation(navRef, 0.5);

  return (
    <header className="bg-amber-950 pb-4">
      <div ref={navRef} className="flex justify-center mx-4 px-4">

        <nav>
          <ul className="text-2xl text-white sm:flex flex-row gap-30 font-medium hidden items-center font-quintessential">
            <a href="#home"><li>Home</li></a>
            <a href="#gallery"><li>Gallery</li></a>
            <img src={logo.src} alt="Majestic Balinese Logo" className="h-30 w-auto"/>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </nav>

      </div>
    </header>
  );
}