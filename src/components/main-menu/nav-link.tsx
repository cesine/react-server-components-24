'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  pathname: string | null
  children: React.ReactNode
}

export function NavLink({ href, pathname, children }: Props) {
  const segment = useSelectedLayoutSegment()
  const isActive = segment === pathname

  return (
    <Link
      href={href}
      className={cn('font-medium', {
        'text-foreground': isActive,
        'text-foreground/60 hover:text-foreground/80': !isActive,
      })}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
