/*-------------------------------------------------------------------
|  🐼 React FC ThemeToggle
|
|  🐯 Purpose: TOGGLE LIGHT MODE / DARK MODE
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RiMoonCloudyLine } from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'

const framer_theme = {
  initial: { y: 30 },
  animate: { y: 0 },
  exit: { y: -30 },
  transition: { duration: 0.3 },
}

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const dark_system_theme =
    theme === 'system' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || dark_system_theme

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button className="overflow-hidden custom-btn" onClick={toggleTheme}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span {...framer_theme} className="flex" key={isDark}>
          {isDark ? (
            <RiMoonCloudyLine className="text-[1.2rem]" />
          ) : (
            <FiSun className="text-[1.2rem]" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
