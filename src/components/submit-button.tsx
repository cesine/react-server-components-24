import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export function SubmitButton({ children }: React.PropsWithChildren) {
  const { pending } = useFormStatus()

  console.log('pending', pending)
  return (
    <Button disabled={pending} type="submit">
      {children}
    </Button>
  )
}
