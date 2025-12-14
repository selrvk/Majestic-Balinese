"use client";

import { motion } from "framer-motion";

export default function Map(){

    return(

        <div className="flex flex-col mt-60">

            <motion.div
                className="flex items-center w-full my-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >

                <div className="grow h-px bg-linear-to-l from-amber-950 via-transparent to-transparent"></div>

                        <h1 className="mx-6 text-4xl text-amber-950 font-quintessential">
                            Map
                        </h1>

                <div className="grow h-px bg-linear-to-r from-amber-950 via-transparent to-transparent"></div>
                
            </motion.div>

            <motion.div
                className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20 bg-amber-100/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >

                <div className=" font-serif text-center lg:ml-40 lg:text-start my-20" >
                    <h1 className="text-2xl ">
                        Find Us
                    </h1>

                    <h3 className="mt-10 max-w-90">
                        QM96+RQ7 Brgy, Calatagan, 4215 Batangas, Philippines
                    </h3>
                    <h4 className="mt-10">
                        Phone: +63 968 119 1997
                    </h4>
                    <h4 className="mt-2">
                        E-Mail: majesticbalinesemansion@gmail.com
                    </h4>
                </div>

                <div className="w-full h-140">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1429295775656!2d120.66170744382227!3d13.770252934644708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdb100425025b1%3A0xd6d385f8c080cbec!2sMajestic%20Balinese%20Mansion!5e0!3m2!1sen!2sph!4v1763897874054!5m2!1sen!2sph"
                    loading="lazy"
                    className="shadow-lg justify-self-center lg:justify-self-end w-full lg:w-[80%] h-full"
                    
                    ></iframe>
                </div>


            </motion.div>

        </div>
    )
}