import Header from "./sections/Header";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Amenities from "./sections/Amenities";
import Hero from "./sections/Hero";

export default function Home() {

  return (
    <>
      <Header />

      <section className="" id="home">

        <Hero/>

      </section>

      <section className="text-center pt-10" id="amenities">

        <Amenities/>

      </section>

      <section className="text-center pt-10" id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
