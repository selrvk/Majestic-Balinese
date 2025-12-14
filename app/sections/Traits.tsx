import { MorphingText } from "@/components/ui/morphing-text"

export default function Traits(){

    return (

        <div className="flex flex-col text-center mt-60 font-quintessential text-amber-950 gap-20">
            <MorphingText texts={["Serenity", "Peace", "Tranquility", "Relaxation"]} />

            <h2 className="text-2xl">
                Find all that you seek, and more, at Majestic Balinese Mansion.
            </h2>
        </div>
    )
}