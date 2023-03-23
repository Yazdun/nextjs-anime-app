import { Sidebar, ThemeToggle } from '.'

export const Navbar = () => {
  return (
    <nav className="p-5 flex border-b-2 dark:border-b-gray-800 sticky top-0 items-center justify-between dark:bg-dark-800">
      <div className="flex items-center gap-2">
        <Sidebar />
        <strong>Anime App</strong>
      </div>
      <ThemeToggle />
    </nav>
  )
}
