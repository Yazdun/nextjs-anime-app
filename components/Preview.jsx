/*-------------------------------------------------------------------
|  🐼 React FC Preview
|
|  🐯 Purpose: ANIME PREVIEW CARDS TO BE SHOWN IN THE TABLE COMPONENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineLink } from 'react-icons/hi'
import cn from 'classnames'

export const Preview = ({ item, idx }) => {
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <li
      className={cn(
        'p-5 border-t last-of-type:border-b md:last-of-type:border-none dark:border-gray-800 flex justify-between relative overflow-hidden md:first-of-type:border-none',
        idx % 2 !== 0 && 'dark:bg-dark-900 bg-gray-50',
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            'h-[3rem] overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800 min-w-[3rem]',
            imageLoading && 'animate-pulse',
          )}
        >
          <Image
            src={item.coverImage.extraLarge}
            alt={item.title.romaji}
            width={50}
            height={50}
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold truncate dark:text-slate-300">
            {item.title.native}
          </p>
          <p className="text-xs dark:text-slate-400 text-slate-600">
            <span>{item?.startDate?.year}</span> -{' '}
            <span>{item?.endDate?.year || 'Now'}</span>
          </p>
        </div>
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

export const LoadingPreview = ({ idx }) => {
  return (
    <li
      className={cn(
        'p-5 border-t items-center last-of-type:border-b md:last-of-type:border-none dark:border-gray-800 flex justify-between relative overflow-hidden md:first-of-type:border-none',
        idx % 2 !== 0 && 'dark:bg-dark-900 bg-gray-50',
      )}
    >
      <div className="flex items-center gap-2">
        <div className="loading h-[3rem] min-w-[3rem]"></div>
        <div className="flex flex-col w-full gap-2">
          <div className="h-4 w-[10rem] md:w-[12rem] loading "></div>
          <div className="h-2 w-[6rem] loading "></div>
        </div>
      </div>

      <div className="p-5 loading"></div>
    </li>
  )
}
