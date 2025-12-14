import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
    {
        name: "Charles",
        body: "It's so pretty here! Kuhang kuha talaga yung vibe ng Bali!",
        img: "https://scontent.fmnl45-2.fna.fbcdn.net/v/t39.30808-6/470223522_8772340926154717_7473394019252700196_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=a9wKZtkcgOsQ7kNvwEgMt7c&_nc_oc=AdlCaeckR-NrHEpoGygeA89mAlSvitDBzDuXhNuunRBdSDq4FrQcFQkRx5i42O-JzjGNb-ePF3JfglwIGxDJuBug&_nc_zt=23&_nc_ht=scontent.fmnl45-2.fna&_nc_gid=gNNqnPFBUSNNItVzVuSxQQ&oh=00_Afkyrn8TqSBjCSiSVXgMxjp6YmC3ECvMkYf6pIUxXjLUxw&oe=6944993A",
    },
    {
        name: "Alyssa",
        body: "Parang nasa Bali ka talaga kahit nasa Pilipinas lang. Sobrang ganda at relaxing.",
        img: "https://avatar.vercel.sh/alyssa",
    },
    {
        name: "Miguel",
        body: "Tahimik, presko, at ang ganda ng place. Perfect pang-unwind.",
        img: "https://avatar.vercel.sh/miguel",
    },
    {
        name: "Kath",
        body: "Grabe, hindi ko in-expect na ganito ka-Bali vibes. Super relaxing and worth it.",
        img: "https://avatar.vercel.sh/kath",
    },
    {
        name: "Paolo",
        body: "Ang linis ng rooms at ang bait ng staff. Bali feels talaga.",
        img: "https://avatar.vercel.sh/paolo",
    },
    {
        name: "Rica",
        body: "Sobrang aesthetic ng resort. Parang out of the country yung feels.",
        img: "https://avatar.vercel.sh/rica",
    },
    {
        name: "Tress",
        body: "My parents wanted to try it here and we don't regret it! Worth the price!",
        img: "https://avatar.vercel.sh/tres",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string
  name: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white font-serif">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function MarqueeDemo(){

    return (
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}