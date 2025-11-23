import logo from "../assets/Majestic-Logo-White.png";

export default function Header() {

  return (
    <header className="bg-yellow-950 text-white pb-4">
      <div className="flex justify-center mx-4 px-4">

        <nav>
          <ul className="sm:flex flex-row gap-20 text-lg font-medium hidden items-center">
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