import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {

    return (

        <>

            <h1 className="text-4xl text-center mt-15" id="contact">
                Contact Us
            </h1>
            
            <div className="flex flex-row mt-15 justify-center w-[100%] h-auto bg-orange-200">
                        
                        <div className="flex flex-row h-150 gap-10">
                            
                            <div className="flex flex-col justify-center items-center gap-4 bg-orange-100 h-auto w-120 p-6">
                                <input type="text" className="border-amber-900 w-100 h-15 border-3 rounded placeholder-black pl-2" placeholder="Your Name" />
                                <input type="email" className="border-amber-900 w-100 h-15 border-3 rounded placeholder-black pl-2" placeholder="Your Email" />
                                <textarea className="border-amber-900 w-100 h-30 border-3 rounded placeholder-black pl-2" placeholder="Your message"></textarea>

                                <Button className="bg-amber-700 mb-6">
                                    Submit
                                </Button>

                            </div>

                            <div className="flex justify-end">

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.154665373218!2d120.65933547591878!3d13.769544886624082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdb100425025b1%3A0xd6d385f8c080cbec!2sMajestic%20Balinese%20Mansion!5e0!3m2!1sen!2sph!4v1763639420436!5m2!1sen!2sph" width="600" height="auto" style={{ marginTop: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>

                    </div>
        </>

    );
}