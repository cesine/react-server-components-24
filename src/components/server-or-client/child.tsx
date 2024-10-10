'use client'

import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'
import { GrandChild } from './grand-child'

export function Child({ children }: PropsWithChildren) {
  const isServer = typeof window === 'undefined'

  return (
    <div
      className={`flex flex-col gap-2 p-5 ${cn({
        'bg-green-200': isServer,
        'bg-green-500': !isServer,
      })}`}
    >
      <h3 className="text-xl font-bold">Child Component</h3>
      <p>Rendered on: {isServer ? 'Server' : 'Client'}</p>
      <GrandChild />
      {children}
    </div>
  )
}
