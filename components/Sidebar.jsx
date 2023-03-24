import { useOnClickOutside } from '@/hooks'
import { useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineRollback } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

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
        className=" bg-light-100 dark:bg-dark-800 h-full w-full max-w-[20rem] flex-col flex justify-between dark:border-gray-800 dark:border-r-2"
      >
        <div>
          <div className="flex items-center justify-between p-5 border-b-2 dark:border-gray-800">
            <h2 className="font-bold">Sidebar Menu</h2>
            <button className="custom-btn" onClick={() => setOpen(false)}>
              <AiOutlineRollback />
            </button>
          </div>

          <ul>
            {socials_data.map(item => {
              const { Icon, title, url } = item
              return (
                <li key={title}>
                  <a
                    href={url}
                    target="_blank"
                    className="flex items-center justify-between p-5 text-sm font-bold transition-colors border-b-2 text-slate-500 md:hover:text-black dark:text-slate-400 dark:md:hover:text-white dark:border-b-gray-800"
                  >
                    {title}
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="p-5 text-sm font-bold text-center">
          <p>Grassroots Economics Assignment</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

import { SiGithub, SiHashnode, SiLinkedin, SiTwitter } from 'react-icons/si'

export const socials_data = [
  {
    title: 'Source Code',
    url: 'https://github.com/Yazdun',
    Icon: SiGithub,
  },
  {
    title: 'My Portfolio',
    url: 'http://yazdun.com/',
    Icon: FaUserAlt,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yazdun-fadali/',
    Icon: SiLinkedin,
  },
]

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
