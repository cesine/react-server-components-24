import { GridLayout } from '@/components/grid-layout'

export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="my-8 text-center text-4xl font-bold">
        Science Fiction Movies
      </h1>

      <GridLayout>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </GridLayout>
    </div>
  )
}
