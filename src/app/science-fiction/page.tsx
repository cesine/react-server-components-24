import { GridLayout } from '@/components/grid-layout'
import { MovieCard } from '@/components/movie-card'
import { prisma } from '@/lib/prisma'
import { Suspense } from 'react'

export default async function ScienceFictionMovies() {
  const movies = await prisma.genre
    .findUniqueOrThrow({ where: { id: 878 } })
    .movies({
      select: {
        id: true,
      },
      orderBy: {
        title: 'asc',
      },
    })

  return (
    <div className="p-4">
      <h1 className="my-8 text-center text-4xl font-bold">
        Science Fiction Movies
      </h1>

      <GridLayout>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} />
        ))}
        {/* </Suspense> */}
      </GridLayout>
    </div>
  )
}
