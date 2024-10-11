'use client'

import { useForm } from 'react-hook-form'
import { Movie } from '@prisma/client'
import Image from 'next/image'

import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form'
import { SubmitButton } from './submit-button'
import { useToast } from '@/hooks/use-toast'
import { useActionState } from 'react'

type Props = {
  movie: Movie
  formAction: (state: string, formData: FormData) => Promise<string>
}

export function MovieEditor({ movie, formAction }: Props) {
  const form = useForm<Movie>({
    defaultValues: movie,
  })
  const { toast } = useToast()
  const posterPath = form.watch('posterPath')

  // Simple usage of useActionState()
  // const [errorMessage, action, isPending] = useActionState(formAction, '')

  const [errorMessage, action, isPending] = useActionState(
    async (state: string, formData: FormData) => {
      const result = await formAction(state, formData)

      if (result) {
        toast({
          title: 'Error',
          description: result,
          variant: 'destructive',
        })
      }
      return result
    },
    '',
  )

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <Image
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={movie.title}
          width={300}
          height={450}
          className="h-auto w-full"
        />
      </div>
      <div className="max-w-xl md:w-2/3 md:pl-8">
        <Form {...form}>
          <form className="flex flex-col gap-4" action={action}>
            <input type="hidden" name="id" value={movie.id} />
            {!!errorMessage ? (
              <div className="ml-1 text-xs font-medium text-red-500">
                {errorMessage}
              </div>
            ) : null}

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter movie title"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Overview</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Enter movie overview"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Release Date</FormLabel>
                  <FormControl>
                    <Input type="date" disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voteAverage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Vote Average</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voteCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Vote Count</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="posterPath"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Poster Path</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter poster path URL"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton>Save</SubmitButton>
          </form>
        </Form>
      </div>
    </div>
  )
}
