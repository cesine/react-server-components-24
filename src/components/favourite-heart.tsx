'use client'

import { Heart } from 'lucide-react'

import { cn } from '@/lib/utils'
import { toggleFavourite } from '@/server/actions'
import { useOptimistic, useTransition } from 'react'

type Props = {
  favourite: boolean
  movieId: number
}

export function FavouriteHeart({ favourite, movieId }: Props) {
  const [isPending, startTransition] = useTransition()
  const [optimisticFavourite, setOptimisticFavourite] = useOptimistic(favourite)

  return (
    <Heart
      aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
      className={cn('cursor-pointer text-green-500', {
        'fill-green-500': optimisticFavourite,
        'opacity-50': isPending,
      })}
      onClick={() => {
        startTransition(async () => {
          try {
            setOptimisticFavourite(!optimisticFavourite)
            await toggleFavourite(movieId)
          } catch (error) {
            console.error(error)
          }
        })
      }}
    />
  )
}
