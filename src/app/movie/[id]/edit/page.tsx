import { redirect } from 'next/navigation'

import { MovieEditor } from '@/components/movie-editor'
import { handleSubmitMovieForm } from '@/server/actions'
import { getMovie } from '@/server/movie'

type Props = {
  params: Promise<{ id: string }>
}

export default async function MovieEditPage(props: Props) {
  const params = await props.params

  const movie = await getMovie(parseInt(params.id))

  if (!movie) {
    redirect('/404')
  }

  return (
    <div className="p-4">
      <MovieEditor movie={movie} formAction={handleSubmitMovieForm} />;
    </div>
  )
}
