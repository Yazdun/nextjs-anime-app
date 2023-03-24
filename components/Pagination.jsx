/*-------------------------------------------------------------------
|  🐼 React FC Pagination
|
|  🐯 Purpose: PAGINATION CONTROL FOR TOGGLING ANIME PAGES
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Container } from '@/components'
import cn from 'classnames'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'

export const Pagination = ({ current, setCurrent, lastPage }) => {
  let count = []
  for (let i = 0; i < lastPage; i++) {
    count.push(i + 1)
  }
  return (
    <Container>
      <div className="flex justify-between gap-5 p-5 bg-white border-2 rounded-md shadow-sm dark:shadow-transparent dark:bg-dark-900 dark:border-gray-800">
        <Navigate
          callback={() => setCurrent(prev => prev - 1)}
          Icon={MdOutlineNavigateBefore}
          text="Previous"
          isPrev
          disabled={current === 1}
        />
        <ul className="flex justify-between w-full max-w-[17rem]">
          {count
            .slice(
              current === 1
                ? current - 1
                : current === 2
                ? current - 2
                : current - 3,
              current === 1
                ? current + 4
                : current === 2
                ? current + 3
                : current + 2,
            )
            .map(i => {
              return (
                <li key={i}>
                  <button
                    className={cn(
                      'font-bold px-2 rounded-md',
                      current === i && 'outline',
                      current + 1 > lastPage && 'hidden',
                    )}
                    onClick={() => {
                      setCurrent(i)
                    }}
                  >
                    {i}
                  </button>
                </li>
              )
            })}
        </ul>
        <Navigate
          callback={() => setCurrent(prev => prev + 1)}
          Icon={MdOutlineNavigateNext}
          text="Next"
          disabled={current === lastPage}
        />
      </div>
    </Container>
  )
}

const Navigate = ({ Icon, text, callback, isPrev, disabled }) => {
  return (
    <button
      className={cn(
        'flex text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed dark:text-blue-500',
        isPrev && 'flex-row-reverse',
      )}
      onClick={callback}
      disabled={disabled}
    >
      <strong className="hidden md:block">{text}</strong>
      <Icon className="text-2xl mb-[0.1rem]" />
    </button>
  )
}
