import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getMovieWithDetails } from '@/server/movie'

type Props = {
  params: Promise<{ id: string }>
}

export default async function MoviePage(props: Props) {
  const params = await props.params
  const movie = await getMovieWithDetails(parseInt(params.id))

  if (!movie) {
    redirect('/404')
  }

  const listFormat = new Intl.ListFormat('en-US', {
    style: 'long',
    type: 'conjunction',
  })

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
            alt={movie.title}
            width={300}
            height={450}
            className="h-auto w-full"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold">
            {movie.title} ({new Date(movie.releaseDate).getFullYear()})
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl text-yellow-500">
              {movie.voteAverage}/10
            </span>
            <span className="text-gray-500">({movie.voteCount} Reviews)</span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-2 text-gray-700">{movie.overview}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Directors</h2>
            <p className="text-gray-7000 mt-2">
              {listFormat.format(
                movie.directors.map((director) => director.name),
              )}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Actors</h2>
            <p className="text-gray-7000 mt-2">
              {listFormat.format(movie.actors.map((actor) => actor.name))}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Genres</h2>
            <p className="mt-2 text-gray-700">
              {listFormat.format(movie.genres.map((genre) => genre.name))}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Release Date</h2>
            <p className="mt-2 text-gray-700">{movie.releaseDate}</p>
          </div>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link href={`/movie/${params.id}/edit`}>Edit</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
