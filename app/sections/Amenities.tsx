"use client"

import { motion } from "framer-motion"
import { CarouselDemo } from "@/components/CarouselDemo"

export default function Amenities(){

    return (

        <div className="flex flex-col mt-60">
            
            <motion.div
                className="flex flex-col w-full my-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >

                <div className="flex items-center w-full ">

                    <div className="grow h-px bg-linear-to-l from-amber-950 via-transparent to-transparent"></div>

                        <h1 className="mx-6 text-5xl text-amber-950 font-quintessential">
                            Amenities
                        </h1>

                    <div className="grow h-px bg-linear-to-r from-amber-950 via-transparent to-transparent"></div>

                </div>
            

                <h2 className="text-xl mt-3 font-quintessential">
                    We offer more than just vibes
                </h2>

            </motion.div>

            <motion.div
                className="flex items-center w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                    <span className="flex justify-center items-center bg-amber-100/50 py-10">
                        <CarouselDemo/>
                    </span>
            </motion.div>
            
        </div>
    )
}