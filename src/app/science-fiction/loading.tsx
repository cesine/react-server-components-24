import { GridLayout } from '@/components/grid-layout'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="my-8 text-center text-4xl font-bold">
        Science Fiction Movies
      </h1>

      <GridLayout>
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="flex h-full flex-col shadow-lg">
            <CardHeader>
              <Skeleton className="h-[300px] w-full" />
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 flex-grow" />
                <Skeleton className="h-6 w-6" />
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="ml-2 h-4 w-24" />
                </div>
                <Skeleton className="h-24 w-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-24" />
            </CardFooter>
          </Card>
        ))}
      </GridLayout>
    </div>
  )
}
