"use client";
import { motion } from "framer-motion";
import heroImage from "./../../public/balinese-photos/mainhero.jpg"

export default function Hero() {

    return (

        <div className="grid justify-items-stretch">
          <div className="relative w-full">

            <img
              src={heroImage.src}
              alt="Majestic Balinese Mansion Home"
              className="z-1 opacity-60 object-cover w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[770px] 2xl:h-[1000px] brightness-75"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-yellow-50"></div>

            <motion.div
                className="flex justify-center md:w-[60%] md:-mt-30 absolute top-[5%] left-5 sm:top-[5%] sm:left-10 md:-top-[5%] md:left-20 lg:-top-[5%] lg:left-20 xl:-top-[10%] xl:left-20 2xl:top-[-10%] 2xl:left-20 z-20 text-amber-100 font-italianno text-[25vw]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Majestic
            </motion.div>

            <motion.div
                className="flex justify-center md:w-[60%] md:-mt-30 absolute top-[40%] right-5 sm:top-[50%] sm:right-10 md:top-[40%] md:right-20 lg:top-[20%] lg:right-20 xl:top-[20%] xl:right-20 2xl:top-[25%] 2xl:right-20 z-30 text-amber-100 font-italianno text-[25vw]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Balinese

            </motion.div>

          </div>
        </div>
    )
}
