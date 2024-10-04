import { cn } from '@/lib/utils'
import { Child } from './child'
import { GrandChild } from './grand-child'

export function Parent() {
  const isServer = typeof window === 'undefined'

  return (
    <div
      className={`flex flex-col gap-2 p-5 ${cn({
        'bg-red-200': isServer,
        'bg-red-500': !isServer,
      })}`}
    >
      <h2 className="text-2xl font-bold">Parent Component</h2>
      <p>Rendered on: {isServer ? 'Server' : 'Client'}</p>
      <Child />
    </div>
  )
}
