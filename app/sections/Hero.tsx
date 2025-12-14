"use client";
import { motion } from "framer-motion";

export default function Hero() {

    return (

        <div className="grid relative w-full justify-items-center">

            <video
                src="/videos/majestic-hero-vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="z-0 opacity-80 object-cover w-full
                          h-[100%] sm:h-[400px] md:h-[600px]
                          lg:h-[800px] xl:h-[770px] 2xl:h-[1000px]
                          brightness-75"
              >
            </video>

        </div>
    )
}
