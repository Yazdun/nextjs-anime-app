import { useOnClickOutside } from '@/hooks'
import { useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AnimatePresence, motion } from 'framer-motion'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(prev => !prev)} className="custom-btn">
        <RxHamburgerMenu className="text-[1.2rem]" />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && <Panel setOpen={setOpen} />}
      </AnimatePresence>
    </>
  )
}

const Panel = ({ setOpen }) => {
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))

  return (
    <motion.div
      {...framer_background}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
    >
      <motion.div
        ref={ref}
        {...framer_modal}
        className="p-5 bg-light-100 dark:bg-dark-800 h-full w-full max-w-sm"
      >
        sidebar
      </motion.div>
    </motion.div>
  )
}

export const framer_background = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

export const framer_modal = {
  initial: { x: '-100%' },
  animate: { x: 0, transition: { delay: 0.1, duration: 0.2 } },
  exit: { x: '-100%' },
  transition: { duration: 0.2 },
}
