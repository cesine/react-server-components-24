import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export function SubmitButton({ children }: React.PropsWithChildren) {
  return <Button type="submit">{children}</Button>
}
