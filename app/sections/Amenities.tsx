import { CarouselDemo } from "@/components/CarouselDemo"

export default function Amenities(){

    return (

        <div className="flex flex-col mt-60">

            <h1 className="text-4xl text-amber-950 mt-15 mb-15 font-quintessential">
                Amenities
            </h1>
            
            <span className="flex justify-center items-center bg-amber-100/50 py-10">
                <CarouselDemo/>
            </span>
            
        </div>
    )
}