export type Movie = {
  id: number
  actorIds: number[]
  backdropPath: string
  directorIds: number[]
  genreIds: number[]
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  title: string
  voteAverage: number
  voteCount: number
}

const movies: Movie[]

export default movies
