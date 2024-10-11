'use client'

import { startTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  const router = useRouter()

  const tryAgainHandler = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <code className="text-center text-red-500">
        Message: {error.message}
        <br />
        (Digest: {error.digest})
      </code>
      <Button onClick={tryAgainHandler}>Try again</Button>
    </div>
  )
}
