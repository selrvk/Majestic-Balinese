import logo from "../assets/Majestic-Logo-White.png";

export default function Header() {

  return (
    <header className="bg-yellow-950 text-white pb-4">
      <div className="flex items-center justify-between mx-4 px-4">

        <div className="flex flex-row items-center">
            <img src={logo.src} alt="Majestic Balinese Logo" className="h-30 w-auto"/>
            <div className="flex flex-col ml-4">
                <h1 className="text-3xl font-bold">Majestic Balinese Mansion</h1>
                <h2 className="">Calatagan, Batangas</h2>
            </div>
        </div>

        <nav>
          <ul className="sm:flex flex-row gap-6 text-lg font-medium hidden">
            <a href="#home"><li>Home</li></a>
            <a href="#gallery"><li>Gallery</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </nav>

      </div>
    </header>
  );
}