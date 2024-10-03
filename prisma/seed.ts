import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
import movies from './seed-data/movies.json'
import genres from './seed-data/genres.json'
import actors from './seed-data/actors.json'
import directors from './seed-data/directors.json'

async function main() {
  for (const actor of actors) {
    await prisma.actor.upsert({
      where: { id: actor.id },
      update: actor,
      create: actor,
    })
  }

  for (const director of directors) {
    await prisma.director.upsert({
      where: { id: director.id },
      update: director,
      create: director,
    })
  }
  for (const genre of genres) {
    await prisma.genre.upsert({
      where: { id: genre.id },
      update: genre,
      create: genre,
    })
  }

  for (const item of movies) {
    const { genreIds, actorIds, directorIds, ...rest } = item
    const movie = {
      ...rest,
      favourite: false,
      genres: {
        connect: genreIds.map((id) => ({ id })),
      },
      actors: {
        connect: actorIds.map((id) => ({ id })),
      },
      directors: {
        connect: directorIds.map((id) => ({ id })),
      },
    }

    await prisma.movie.upsert({
      where: { id: movie.id },
      update: movie,
      create: movie,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
