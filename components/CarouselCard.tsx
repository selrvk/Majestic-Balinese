
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
            <div className="flex flex-col justify-center">
                <h3 className="mt-3 text-lg font-semibold font-quintessential">{title}</h3>
                <p className="text-sm text-muted-foreground mt-5">{description}</p>
            </div>
            
        </div>
    )
}