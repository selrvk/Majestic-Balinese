
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselCard from "./CarouselCard"

const amenities = [

    {
        title: "Kayaks",
        description: "Enjoy the experience of kayaking in our waters.",
        imageUrl: "/balinese-photos/amenity-kayak.jpg",
    },
    {
        title: "Banana Boat",
        description: "Fun rides on our banana boat for all ages.",
        imageUrl: "/balinese-photos/amenity-banana.webp",
    }
]

export function CarouselDemo() {

  return (

    <Carousel className="justify-center max-w-[70%] ">
      <CarouselContent >
        {amenities.map((amenity, index) => (
          <CarouselItem key={index} >
            <CarouselCard
              title={amenity.title}
              description={amenity.description}
              imageUrl={amenity.imageUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
