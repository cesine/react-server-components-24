import { GridLayout } from '@/components/grid-layout'
import { MovieCard } from '@/components/movie-card'
import { prisma } from '@/lib/prisma'
import { Suspense } from 'react'
import Loading from './loading'

export default async function ScienceFictionMovies() {
  const movies = await prisma.genre.findUniqueOrThrow({ where: { id: 878}})
  .movies({
    select: {
      id: true,
    },
    orderBy: {
      title: 'asc'
    }
  })
  console.log('we have movies', movies.length)

  return (
    <div className="p-4">
      <h1 className="my-8 text-center text-4xl font-bold">
        Science Fiction Movies
      </h1>

      <GridLayout>
        {movies.map((movie) => (
          <Suspense key={movie.id} fallback={<Loading />}>
            <MovieCard key={movie.id} movieId={movie.id} />
          </Suspense>
        ))}
      </GridLayout>
    </div>
  )
}
