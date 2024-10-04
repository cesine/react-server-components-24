import { cn } from '@/lib/utils'

type Props = React.PropsWithChildren<React.ComponentProps<'div'>>

export function GridLayout({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
