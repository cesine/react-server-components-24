'use server'

import { revalidatePath } from 'next/cache'

import { sleep } from '@/lib/utils'
import { getMovieOrThrow, updateMovie } from './movie'
import { redirect } from 'next/navigation'

export async function toggleFavourite(id: number) {
  // await sleep(1_000)

  const movie = await getMovieOrThrow(id)

  movie.favourite = !movie.favourite

  await updateMovie(id, movie)

  revalidatePath('/')
}

export async function handleSubmitMovieForm(
  state: string,
  formData: FormData,
): Promise<string> {
  //   await sleep(1_000);

  const idValue = formData.get('id')
  const id = Number(idValue)
  if (!id || isNaN(id)) {
    throw new Error('Invalid id')
  }

  const movie = await getMovieOrThrow(id)

  const movieRecord: Record<string, string | number | boolean> = movie
  formData.forEach((value, key) => {
    if (key in movieRecord) {
      if (typeof movieRecord[key] === 'number') {
        movieRecord[key] = +(value as string)
      } else {
        movieRecord[key] = value as string
      }
    }
  })

  if (!movie.title) {
    return 'The movie title is required'
  }

  await updateMovie(id, movie)

  redirect(`/movie/${id}`)
}
