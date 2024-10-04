import { SometimesThrowsAnError } from '@/components/sometimes-throws-an-error'

export default function ErrorHandling() {
  return (
    <div className="p-4">
      <h1 className="my-8 text-center text-4xl font-bold">Error Handling</h1>

      <SometimesThrowsAnError />
    </div>
  )
}
