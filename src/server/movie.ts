import { revalidatePath } from 'next/cache'
import { Movie } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { sleep } from '@/lib/utils'

export async function toggleFavourite(id: number) {
  //   await sleep(1_000);

  const movie = await prisma.movie.findUniqueOrThrow({
    select: {
      favourite: true,
    },
    where: { id },
  })

  movie.favourite = !movie.favourite

  await prisma.movie.update({
    where: { id },
    data: movie,
  })

  revalidatePath('/')
}

export async function getTopRatedMovies() {
  const movies = await prisma.movie.findMany({
    select: {
      id: true,
    },
    orderBy: {
      voteAverage: 'desc',
    },
    take: 40,
  })

  return movies
}

export async function getScienceFictionMovies() {
  const movies = await prisma.genre
    .findUniqueOrThrow({ where: { id: 878 } })
    .movies({
      orderBy: {
        title: 'asc',
      },
      take: 40,
    })

  return movies
}

export async function getMovieOrThrow(id: number) {
  const movie = await prisma.movie.findUniqueOrThrow({
    where: {
      id,
    },
  })

  return movie
}

export async function getMovie(id: number) {
  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
  })

  return movie
}

export async function getMovieWithDetails(id: number) {
  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
    include: {
      actors: true,
      directors: true,
      genres: true,
    },
  })

  return movie
}

export async function updateMovie(id: number, data: Movie) {
  await prisma.movie.update({
    where: {
      id: id,
    },
    data,
  })
}
