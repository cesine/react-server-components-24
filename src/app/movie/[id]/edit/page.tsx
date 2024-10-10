import { redirect } from 'next/navigation'

import { MovieEditor } from '@/components/movie-editor'
import { handleSubmitMovieForm } from '@/server/actions'
import { getMovie } from '@/server/movie'
import { prisma } from '@/lib/prisma'

type Props = {
  params: Promise<{ id: string }>
}

export default async function MovieEditPage(props: Props) {
  const params = await props.params

  const movie = await getMovie(parseInt(params.id))

  if (!movie) {
    redirect('/404')
  }

  const formAction = async (formData: FormData) => {
    'use server'
    const json = Object.fromEntries(formData.entries())
    console.log('Form submit', json)

    movie.title = formData.get('title') as string
    movie.overview = formData.get('overview') as string
    // Etc.

    await prisma.movie.update({
      where: { id: movie.id },
      data: movie,
    })
  }

  return (
    <div className="p-4">
      <MovieEditor movie={movie} formAction={formAction} />;
    </div>
  )
}
