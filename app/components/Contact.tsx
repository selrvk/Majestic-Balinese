import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

export default function Contact() {

  const contactRef = useRef(null);
  useScrollAnimation(contactRef, 0.2);

  return (
    <>
      <h1
        className="text-4xl text-center mt-10 font-quintessential tracking-wide text-amber-900"
        id="contact"
      >
        Contact Us
      </h1>

      {/* CONTAINER WITH BACKGROUND */}
      <div className="relative w-full mt-10">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://scontent.fmnl45-2.fna.fbcdn.net/v/t39.30808-6/537569614_122124969176943850_3327517651818192117_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2r86tvPYVX7WV_I-ca3ewMpYTuFZKnIMylhO4Vkqcg4dv9p9QRCz5ecVriC_Pm_I1PliIhZ7Nj0kP1esLYwsz&_nc_ohc=AwIdQMffymsQ7kNvwGpgQq3&_nc_oc=AdkEiMGHS4Sse32QA6mO_6xxC3sjtb95HFPd3mfGen92oCV_c4WsmLTgtU_KpsozAtC5j7cw_BRXEJpE6qeUEtXn&_nc_zt=23&_nc_ht=scontent.fmnl45-2.fna&_nc_gid=eT5LRBkklhp_9uic3GWMEw&oh=00_AfjyJ5LNBIpT-qRPTEoINFfa1YW0I1gHw8ShD0witOZrXw&oe=6928BA4B"
          className="w-full h-[650px] object-cover object-center opacity-60"
        />

        {/* OVERLAY CARD */}
        <div ref={contactRef} 
          className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-6xl
          grid grid-cols-1 md:grid-cols-3 gap-10
          bg-white/40 backdrop-blur-xl p-10
          rounded-2xl shadow-2xl border border-white/50 
          "
        >

          {/* MAP */}
          <div className="w-full h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1429295775656!2d120.66170744382227!3d13.770252934644708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdb100425025b1%3A0xd6d385f8c080cbec!2sMajestic%20Balinese%20Mansion!5e0!3m2!1sen!2sph!4v1763897874054!5m2!1sen!2sph"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-xl shadow-lg border border-amber-900/40"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-xl font-semibold text-amber-900 mb-2 tracking-wide">
              Send a Message
            </h2>

            <input
              type="text"
              className="border-amber-700/60 w-full h-12 border rounded-lg pl-3 bg-white/70"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border-amber-700/60 w-full h-12 border rounded-lg pl-3 bg-white/70"
              placeholder="Your Email"
            />
            <textarea
              className="border-amber-700/60 w-full h-32 border rounded-lg pl-3 pt-2 bg-white/70"
              placeholder="Your Message"
            />
            <Button className="bg-amber-900 hover:bg-amber-800 w-full text-white text-md py-3 rounded-lg">
              Submit
            </Button>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-between justify-self-end text-end">
            
            <div>
              <h2 className="text-xl font-semibold text-amber-900 tracking-wide mb-3">
                Visit Us
              </h2>

              <p className="text-amber-900/90 text-lg">Majestic Balinese Mansion</p>
              <p className="text-amber-900/90">Calatagan, Batangas 4215</p>

              <h2 className="text-xl font-semibold text-amber-900 tracking-wide mt-6 mb-2">
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
      </div>
    </>
  );
}
