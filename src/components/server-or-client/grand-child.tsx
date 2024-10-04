import { cn } from '@/lib/utils'

export function GrandChild() {
  const isServer = typeof window === 'undefined'

  return (
    <div
      className={`flex flex-col gap-2 p-5 ${cn({
        'bg-blue-200': isServer,
        'bg-blue-500': !isServer,
      })}`}
    >
      <h4 className="text-lg font-bold">GrandChild Component</h4>
      <p>Rendered on: {isServer ? 'Server' : 'Client'}</p>
    </div>
  )
}
