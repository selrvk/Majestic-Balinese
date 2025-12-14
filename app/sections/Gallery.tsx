"use client";

import Image from "next/image";
import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";
import mainMansion from "./../../public/balinese-photos/mainmansion.jpg";
import mainPool from "./../../public/balinese-photos/mainpool.jpg";
import chairsUmbrellas from "./../../public/balinese-photos/chairsandbeachumbrellas.jpg";
import balineseGazebos from "./../../public/balinese-photos/balinesegazebos.jpg";
import grandDiningGazebo from "./../../public/balinese-photos/granddininggazebo.jpg";
import stairs from "./../../public/balinese-photos/stairs.jpg";
import openArea from "./../../public/balinese-photos/openarea.jpg";
import kayaks from "./../../public/balinese-photos/kayaks.jpg";


const Gallery = () => {

  const galleryRef = useRef(null);
  useScrollAnimation(galleryRef, 0.2);

  const [lightbox, setLightbox] = useState<string | null>(null);    

  const images = [
    { src: mainMansion.src, alt: "Main Mansion" },
    { src: mainPool.src, alt: "Main Pool" },
    { src: chairsUmbrellas.src, alt: "Chairs and Beach Umbrellas" },
    { src: balineseGazebos.src, alt: "Balinese Gazebo" },
    { src: grandDiningGazebo.src, alt: "Dining Gazebo" },
    { src: stairs.src, alt: "Stairs to the Beach" },
    { src: openArea.src, alt: "Open Area" },
    { src: kayaks.src, alt: "Kayaks" },

  ];

  return (

    <div className="mt-60">

      <h1 className="text-4xl mt-15 mb-15 font-quintessential text-amber-950">Gallery</h1>

      <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 bg-amber-100/50">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-zoom-in hover:shadow-2xl transition-all duration-300"
            onClick={() => setLightbox(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}  
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhZKwAJgQIE8vFkqQAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-lg font-medium">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
      
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightbox}
            alt="Fullscreen"
            width={900}
            height={900}
            className="max-w-full max-h-full object-contain"
          />
          <button className="absolute top-8 right-8 text-white text-5xl font-light hover:text-gray-300">
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;