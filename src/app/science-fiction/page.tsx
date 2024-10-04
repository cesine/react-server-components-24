import { GridLayout } from '@/components/grid-layout'
import { MovieCard } from '@/components/movie-card'

export default function ScienceFictionMovies() {
  const movies = [
    {
      favourite: true,
      id: 693134,
      overview:
        'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.',
      posterPath: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
      title: 'Dune: Part Two',
      voteAverage: 8.2,
      voteCount: 5080,
    },
    {
      favourite: false,
      id: 1091,
      overview:
        'In the winter of 1982, a twelve-man research team at a remote Antarctic research station discovers an alien buried in the snow for over 100,000 years. Soon unfrozen, the form-changing creature wreaks havoc, creates terror... and becomes one of them.',
      posterPath: '/tzGY49kseSE9QAKk47uuDGwnSCu.jpg',
      title: 'The Thing',
      voteAverage: 8.057,
      voteCount: 6788,
    },
  ]

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
