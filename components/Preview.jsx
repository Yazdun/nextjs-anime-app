import Image from 'next/image'
import React from 'react'
import { HiOutlineLink } from 'react-icons/hi'
import cn from 'classnames'

export const Preview = ({ item, idx }) => {
  return (
    <li
      key={item.id}
      className={cn(
        'p-5 border-t last-of-type:border-b md:last-of-type:border-none dark:border-gray-800 flex justify-between relative overflow-hidden md:first-of-type:border-none',
        idx % 2 !== 0 && 'dark:bg-dark-900 bg-gray-50',
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-full h-[3rem] overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800 max-w-[3rem]">
          <Image
            src={item.coverImage.extraLarge}
            alt={item.title.romaji}
            width={50}
            height={50}
          />
        </div>
        <p className="truncate dark:text-slate-300 w-4rem">
          {item.title.romaji}
        </p>
      </div>

      <div
        className={cn(
          'absolute top-0 bottom-0 right-0 flex items-center justify-center p-5 pl-20 bg-gradient-to-l',
          idx % 2 !== 0
            ? 'from-gray-50 via-gray-50 to-transparent dark:from-dark-900 dark:via-dark-900 dark:to-transparent'
            : 'from-white via-white to-transparent dark:from-dark-800 dark:via-dark-800 dark:to-transparent',
        )}
      >
        <a href={item.siteUrl} target="_blank" className="custom-btn">
          <HiOutlineLink className="text-lg" />
        </a>
      </div>
    </li>
  )
}
