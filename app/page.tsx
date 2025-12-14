import Header from "./sections/Header";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Amenities from "./sections/Amenities";
import Hero from "./sections/Hero";
import Traits from "./sections/Traits";
import Map from "./sections/Map";

export default function Home() {

  return (
    <>
      <Header />

      <section className="" id="home">

        <Hero/>

      </section>

      <Traits/>

      <section className="text-center pt-10" id="amenities">

        <Amenities/>

      </section>

      <section className="text-center pt-10" id="gallery">
        <Gallery />
      </section>

      <section id="map">
        <Map />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
