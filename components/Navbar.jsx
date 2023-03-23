import { Sidebar, ThemeToggle } from '.'

export const Navbar = () => {
  return (
    <nav className="p-5 flex border-b sticky top-0 items-center justify-between">
      <div className="flex items-center gap-2">
        <Sidebar />
        <strong>Anime App</strong>
      </div>
      <ThemeToggle />
    </nav>
  )
}
