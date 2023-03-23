import { Sidebar, ThemeToggle } from '.'

export const Navbar = () => {
  return (
    <div className="p-5 border-b">
      <Sidebar />
      <strong>Anime App</strong>
      <ThemeToggle />
    </div>
  )
}
