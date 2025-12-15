import { cn } from "@/lib/utils"

interface ReviewCardProps {
  img: string
  name: string
  body: string
}

export function ReviewCard({ img, name, body }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl border p-4",
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        "dark:border-gray-50/10 dark:bg-gray-50/10"
      )}
    >
      <div className="flex items-center gap-2">
        <img className="rounded-full" width={32} height={32} src={img} alt={name} />
        <figcaption className="text-md font-medium font-serif">
          {name}
        </figcaption>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}