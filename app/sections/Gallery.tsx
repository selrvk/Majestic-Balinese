"use client";

import { motion } from "framer-motion";


const Gallery = () => {

  const galleryImages = [
  {
    title: "Main Mansion",
    src: "/balinese-photos/mainmansion.jpg",
    alt: "Main Mansion",
  },
  {
    title: "Main Pool",
    src: "/balinese-photos/mainpool.jpg",
    alt: "Main Pool",
  },
  {
    title: "Chairs & Beach Umbrellas",
    src: "/balinese-photos/chairsandbeachumbrellas.jpg",
    alt: "Chairs and Beach Umbrellas",
  },
  {
    title: "Balinese Gazebos",
    src: "/balinese-photos/balinesegazebos.jpg",
    alt: "Balinese Gazebos",
  },
  {
    title: "Grand Dining Gazebo",
    src: "/balinese-photos/granddininggazebo.jpg",
    alt: "Grand Dining Gazebo",
  },
  {
    title: "Stairs to the Beach",
    src: "/balinese-photos/stairs.jpg",
    alt: "Stairs to the Beach",
  },
  {
    title: "Open Area",
    src: "/balinese-photos/openarea.jpg",
    alt: "Open Area",
  },
  {
    title: "Kayaks",
    src: "/balinese-photos/kayaks.jpg",
    alt: "Kayaks",
  },
];


  return (

    <div className="mt-60">
      
      <motion.div
                className="flex items-center w-full my-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
      >

        <div className="grow h-px bg-linear-to-l from-amber-950 via-transparent to-transparent"></div>

                <h1 className="mx-6 text-4xl text-amber-950 font-quintessential">
                    Gallery
                </h1>

        <div className="grow h-px bg-linear-to-r from-amber-950 via-transparent to-transparent"></div>

      </motion.div>

      <div
        className="
          mx-auto mt-10 lg:mt-0
          w-[92%] max-w-6xl
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-6 sm:gap-8 md:gap-10
        "
      >
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-amber-900/40">
            <img

              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;