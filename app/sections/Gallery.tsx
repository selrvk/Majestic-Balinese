"use client";

import GalleryCarousel from "@/components/GalleryCarousel";
import { motion } from "framer-motion";

const Gallery = () => {

  return (
    <div className="mt-60">
      <motion.div
        className="flex flex-col w-full my-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-center w-full">
          <div className="grow h-px bg-linear-to-l from-amber-950 via-transparent to-transparent"></div>
          <h1 className="mx-6 text-5xl text-amber-950 font-quintessential">
            Gallery
          </h1>
          <div className="grow h-px bg-linear-to-r from-amber-950 via-transparent to-transparent"></div>
        </div>
        <h2 className="text-xl mt-3 font-quintessential">
          See what's in store for you
        </h2>

      </motion.div>

      <motion.div
        className=""
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        <GalleryCarousel />

      </motion.div>
      
    </div>
  );
};

export default Gallery;