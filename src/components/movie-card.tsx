import Image from 'next/image'
import Link from 'next/link'

import { sleep } from '@/lib/utils'

import { Button } from './ui/button'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from './ui/card'
import { VoteStars } from './vote-stars'
import { FavouriteHeart } from './favourite-heart'
import { Movie } from '@prisma/client'
import { prisma } from '@/lib/prisma'

type Props = {
  movieId: number
  // movie: Pick<
  //   Movie,
  //   | 'id'
  //   | 'title'
  //   | 'posterPath'
  //   | 'voteAverage'
  //   | 'voteCount'
  //   | 'overview'
  //   | 'favourite'
  // >
} & React.ComponentProps<typeof Card>

export async function MovieCard({ movieId, ...props }: Props) {
  await sleep(Math.random() * 5_000);

  const movie: Movie = await prisma.movie.findUniqueOrThrow({
    where: { id: movieId },
  })

  return (
    <Card className="flex h-full flex-col shadow-lg" {...props}>
      <CardHeader>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
          alt={`Movie poster for ${movie.title}`}
          width={200}
          height={300}
          className="h-auto w-full"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex-grow">{movie.title}</span>
          <FavouriteHeart movieId={movie.id} favourite={movie.favourite} />
        </CardTitle>
        <CardDescription className="flex flex-col gap-2 text-gray-500">
          <span className="flex items-center">
            <VoteStars
              className="text-2xl text-yellow-500"
              voteAverage={movie.voteAverage}
              title={`${movie.voteAverage} / 10`}
            />
            <span className="ml-2 text-sm">({movie.voteCount} votes)</span>
          </span>
          <span className="line-clamp-6 text-sm">{movie.overview}</span>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/movie/${movie.id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
