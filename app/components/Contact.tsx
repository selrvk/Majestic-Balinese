import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <h1 className="text-4xl text-center mt-10 font-quintessential" id="contact">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row mt-10 justify-center
        w-full h-auto bg-orange-200 p-6 gap-10">

        {/* FORM */}
        <div className="flex flex-col justify-center items-center gap-4 
          bg-orange-100 w-full md:w-[400px] p-6 rounded-lg">

          <input
            type="text"
            className="border-amber-900 w-full h-12 border-2 rounded pl-2"
            placeholder="Your Name"
          />

          <input
            type="email"
            className="border-amber-900 w-full h-12 border-2 rounded pl-2"
            placeholder="Your Email"
          />

          <textarea
            className="border-amber-900 w-full h-32 border-2 rounded pl-2 pt-2"
            placeholder="Your message"
          />

          <Button className="bg-amber-900 w-full">
            Submit
          </Button>

        </div>

        {/* MAP */}
        <div className="w-full md:w-[500px] h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.154665373218!2d120.65933547591878!3d13.769544886624082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdb100425025b1%3A0xd6d385f8c080cbec!2sMajestic%20Balinese%20Mansion!5e0!3m2!1sen!2sph!4v1763639420436!5m2!1sen!2sph"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-lg border-3 border-amber-900"
          ></iframe>
        </div>

      </div>
    </>
  );
}