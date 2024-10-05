import { GridLayout } from '@/components/grid-layout'
import { MovieCard } from '@/components/movie-card'
import { prisma } from '@/lib/prisma'

export default async function ScienceFictionMovies() {
  const movies = await prisma.genre
    .findUniqueOrThrow({ where: { id: 878 } })
    .movies({
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
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridLayout>
    </div>
  )
}
