import Link from 'next/link'

export function PageFooter() {
  return (
    <footer className="flex items-center justify-center gap-2 text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()}</p>-
      <Link href="https://www.theproblemsolver.dev/" target="_blank">
        The Problem Solver
      </Link>
      -
      <Link href="https://www.themoviedb.org/" target="_blank">
        The Movie Database
      </Link>
    </footer>
  )
}
