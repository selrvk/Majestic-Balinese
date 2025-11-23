"use client";

import Image from "next/image";
import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

const Gallery = () => {

  const galleryRef = useRef(null);
  useScrollAnimation(galleryRef, 0.2);

  const [lightbox, setLightbox] = useState<string | null>(null);    

  const images = [
    { src: "https://scontent.fmnl45-2.fna.fbcdn.net/v/t39.30808-6/530313685_122119939214943850_714867887097817550_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AJ3G9wgmgOoQ7kNvwHl5_OF&_nc_oc=Adm9vOooO2L18sXnSPHjTLqQi9BNZM4h_1CTucVbtKZM3mVo-qz3Xi1oe6tJuljR5xlEvcjBLTt_DHrsVbrlT58i&_nc_zt=23&_nc_ht=scontent.fmnl45-2.fna&_nc_gid=05kFcH6w1KlDhRu0Z8A__A&oh=00_Afjob4Uox-3C4-1MUOhAYN6DjetSadjPcilF18FKdKJTdQ&oe=69249E82", alt: "Main Mansion" },
    { src: "https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/531065277_122121863294943850_219667075363471330_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BFR55jf_LsUQ7kNvwFOZeWR&_nc_oc=AdlzwJLeeFRKdfZaNmbhzEU0fq_jGIXsoWRhUkBOAnc23Nv-Kin3jZCUTTfi75MPS6vSFaOOyb_RjksP1AbKO0Kl&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=6aSnf1wuNcOWQw_ZdoOacg&oh=00_AfhV9_YIW0k9LhTg4A9gIKXelFsogUeFCsbSs1XzmefGug&oe=6924C604", alt: "Main Pool" },
    { src: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/531616913_122121863366943850_1712587540747140503_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XC2k_5GZYw0Q7kNvwE_gGTl&_nc_oc=Adm2pue4R1qsv-4fAAhpzLWrlhcByoRXzepnhQgmw6o0OtArpL3aV5M9oZRuMl1LOJNS8HQvNckGL2NJgk7a4Dh7&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=NjRXOyXmfUWVcd6vyLtAww&oh=00_Afjit8ThGy3bc95oI7rZTKvb8j4VnsJC616Xc5ns0I-lOw&oe=6924AEA6", alt: "Chairs and Beach Umbrellas" },
    { src: "https://scontent.fmnl45-2.fna.fbcdn.net/v/t39.30808-6/532279992_122121845768943850_4328875634290897269_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l3zJdshKWuMQ7kNvwFz4uKk&_nc_oc=AdmXdnoBeKnONrNxsAp0NqLA4l4C95MN_ZlWn2Xcn5nbEybm6v9qNzgXKWu5TzzKfVfeW4XgIb1YlA-CiC7wtJuL&_nc_zt=23&_nc_ht=scontent.fmnl45-2.fna&_nc_gid=10PgBN7y-Ep-PQIKjAQPCg&oh=00_Afi_VLGVfREDwcyIUTTUDLUThCbgfAwJnXgL_EqiO9lYrw&oe=6924BA4C", alt: "Balinese Gazebo" },
    { src: "https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/531612281_122121450992943850_6919949555203838778_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ArpdxqbjPUMQ7kNvwHMZFAu&_nc_oc=Adk-nmzpMkkBCqFUytXoaDjCpB7Zo_T6b97ryJ4hchy0oWwZDARJxJygw-A4mfWQ3u-Y0-dsaAdXN22J5rXSaEGf&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=95OzPegHj9A0RQJOxZ_5GQ&oh=00_AfhpaC7zqZsDOe4cnRQBK0K2ZkeK41zXPToTMJEACX9g4w&oe=6924BC89", alt: "Dining Gazebo" },
    { src: "https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/529389714_122119954124943850_3223566929193725080_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gkgDoOEy95oQ7kNvwEAxruR&_nc_oc=AdkATMW_7_gE9h2BUOKVteJSDpUdh-P7PRF1LHw-5xY_C5QQ9Jd6MJHm65QY2Ym6Vzc86Qbw2Fh_FWOMWK5HsSkA&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=7uhLDqd7rLSttpQTdbb46g&oh=00_AfgHiac0CCCPt8QHrlSpV9x3N2IMdkvaIIKpWmHPFX3Nww&oe=6924B99C", alt: "Stairs to the Beach" },
    { src: "https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/531917833_122121450956943850_4342185900337520338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZgWhd9wpdpgQ7kNvwFOAH2X&_nc_oc=AdmSY1kjbE0QTLdS19g_mkw970LJndSmzyRBj4c_cNJUcaXlIiltBhv-AJUJgGgDOnPfc2-dwYfps2B4TxjciLAs&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=SVRIk22zWFmXDFBMQuYAXw&oh=00_Afj8fFnCO8wq3tvU1gx30bxYWFkZ1cREE-7P6hoba4J1SA&oe=6924BFE5", alt: "Open Area" },
    { src: "https://scontent.fmnl45-2.fna.fbcdn.net/v/t39.30808-6/531547202_122121864968943850_8742684405406454179_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4srfjQI3vigQ7kNvwE1dnwO&_nc_oc=AdnDybLNyY9UV7BLzKTVoWrDgy0Zn6yDol7waUJlQ1i5fgEb6fq4mfAIdJUdCoB8bNIDhGss61fyycaFV6RM0LRq&_nc_zt=23&_nc_ht=scontent.fmnl45-2.fna&_nc_gid=wEUv_Ad1hYzLn_PdSEKjQQ&oh=00_AfilWHIjB4cwVU-h9MM74mZ-hKiSgJM_OY9po6xmJ7oLYQ&oe=6924B794", alt: "Kayaks" },

  ];

  return (
    <>

      <h1 className="text-4xl mt-15 mb-15 font-quintessential">Gallery</h1>

      <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 bg-orange-200">
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
    </>
  );
};

export default Gallery;