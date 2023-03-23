import { Container, Sidebar, ThemeToggle } from '.'

export const Navbar = () => {
  return (
    <div className="border-b-2 dark:border-b-gray-800 sticky top-0  dark:bg-dark-800">
      <Container className="flex items-center justify-between" as="nav">
        <div className="flex items-center gap-2">
          <Sidebar />
          <strong>Anime App</strong>
        </div>
        <ThemeToggle />
      </Container>
    </div>
  )
}
