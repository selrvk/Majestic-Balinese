
interface CarouselCardProps { 

    title?: string;
    description?: string;
    imageUrl?: string;

}

export default function CarouselCard({title , description, imageUrl}: CarouselCardProps) {

    return (

        <div className="flex flex-col items-center md:flex-row justify-center gap-5">
            <img
                src={imageUrl}
                alt={title}
                className="w-full md:w-[50%]"
            />
            <div className="flex flex-col text-center">
                <h3 className="mt-3 text-4xl font-semibold font-quintessential text-amber-950/80">{title}</h3>
                <p className="text-md text-muted-foreground mt-5">{description}</p>
                
                <a href="/amenities">
                    <h2 className="mt-40 text-amber-950 underline underline-offset-6 cursor-pointer">
                        Learn more
                    </h2>
                </a>
            </div>
            
        </div>
    )
}