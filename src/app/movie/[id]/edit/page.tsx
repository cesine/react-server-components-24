import { redirect } from 'next/navigation'

import { MovieEditor } from '@/components/movie-editor'
import { getMovie } from '@/server/movie'
import { prisma } from '@/lib/prisma'
import { sleep } from '@/lib/utils'

type Props = {
  params: Promise<{ id: string }>
}

export default async function MovieEditPage(props: Props) {
  const params = await props.params

  const movie = await getMovie(parseInt(params.id))

  if (!movie) {
    redirect('/404')
  }

  const formAction = async (state: string | void, formData: FormData): Promise<string | void> => {
    'use server'

    await sleep(1000)
    // await handleSubmitMovieForm(formData)
    const json = Object.fromEntries(formData.entries())
    console.log('Form submit', json)
    movie.title = formData.get('title') as string
    movie.overview = formData.get('overview') as string

    if (!movie.title) {
      return 'title is needed'
    }

    // Etc.
    await prisma.movie.update({
      where: { id: movie.id },
      data: movie,
    })

    redirect(`/movie/${movie.id}`)
  }

  return (
    <div className="p-4">
      <MovieEditor movie={movie} formAction={formAction} />
    </div>
  )
}
