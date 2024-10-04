import Link from 'next/link'

import { NavLink } from './nav-link'
import { MovieClapper } from './movie-clapper'

export function MainMenu() {
  return (
    <header className="flex h-14 items-center border-b bg-white px-4 dark:bg-gray-950 md:px-6">
      <Link
        href="/"
        className="mr-4 flex items-center gap-2 text-foreground/60 hover:text-foreground/80"
      >
        <MovieClapper className="h-5 w-5 fill-current" />
        <span className="font-semibold">TMDB</span>
      </Link>
      <nav className="hidden flex-1 items-center gap-4 space-x-4 md:flex">
        <NavLink href="/" pathname={null}>
          Home
        </NavLink>
        <NavLink href="/science-fiction" pathname="science-fiction">
          Science Fiction
        </NavLink>
        <NavLink href="/error-handling" pathname="error-handling">
          Error Handling
        </NavLink>
        <NavLink href="/client-or-server" pathname="client-or-server">
          Client or Server
        </NavLink>
      </nav>
    </header>
  )
}
