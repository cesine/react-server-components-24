import { cn } from '@/lib/utils'

type Props = {
  voteAverage: number
} & React.ComponentProps<'div'>

export function VoteStars({ voteAverage, className, ...props }: Props) {
  return (
    <span
      className={cn('grid grid-cols-[1fr] grid-rows-[1fr]', className)}
      {...props}
    >
      <span
        className="col-start-1 row-start-1 overflow-hidden"
        style={{ width: `${10 * voteAverage}%` }}
      >
        ★★★★★
      </span>
      <span className="col-start-1 row-start-1 overflow-hidden">☆☆☆☆☆</span>
    </span>
  )
}
