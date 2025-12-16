"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Contact() {

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
                    Contact
                </h1>

        <div className="grow h-px bg-linear-to-r from-amber-950 via-transparent to-transparent"></div>
        
      </motion.div>

      <motion.div
                className="flex w-full mt-10 bg-amber-100/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
      >

        <div
          className="
            mx-auto mt-10 lg:mt-0 font-serif
            w-[92%] max-w-6xl
            grid grid-cols-1 md:grid-cols-2
            gap-8 md:gap-40
            bg-white/40 backdrop-blur-xl
            p-6 sm:p-8 lg:p-10
            shadow-2xl border border-white/50
          "
        >
        

          {/* FORM */}
          <div className="flex flex-col gap-10 text-center">
            <h2 className="text-xl font-semibold text-amber-950 mb-2 tracking-wide">
              Send a Message
            </h2>

            <input
              type="text"
              className="border-amber-700/30 w-full h-12 border pl-3 bg-white/70"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border-amber-700/30 w-full h-12 border pl-3 bg-white/70"
              placeholder="Your Email"
            />
            <textarea
              className="border-amber-700/30 w-full h-32 border pl-3 pt-2 bg-white/70"
              placeholder="Your Message"
            />
            <Button className="bg-amber-950 hover:bg-amber-800 w-full text-amber-50 text-md py-3">
              Submit
            </Button>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-between sm:text-end text-start ">
            
            <div>
              <h2 className="text-xl font-semibold text-amber-950 tracking-wide mb-3">
                Visit Us
              </h2>

              <p className="text-amber-900/90 text-lg">Majestic Balinese Mansion</p>
              <p className="text-amber-900/90">Calatagan, Batangas 4215</p>

              <h2 className="text-xl font-semibold text-amber-950 tracking-wide mt-6 mb-2">
                Contact
              </h2>
              <p className="text-amber-900/90 text-lg">+63 968 119 1997</p>
              <p className="text-amber-900/90">majesticbalinesemansion@gmail.com</p>
            </div>

            {/* ICONS */}
            <div className="flex gap-4 mt-6 self-end">
              <a
                href="https://www.facebook.com/majesticbalinesemansion/"
                target="_blank"
                className="text-amber-900 hover:text-amber-700 transition"
              >
                <Facebook size={32} />
              </a>

              <a
                href="https://www.instagram.com/majesticbalinesemansion/"
                target="_blank"
                className="text-amber-900 hover:text-amber-700 transition"
              >
                <Instagram size={32} />
              </a>

              <a
                href="mailto:majesticbalinesemansion@gmail.com"
                className="text-amber-900 hover:text-amber-700 transition"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>

        </div>

      </motion.div>

    </div>
  );
}
