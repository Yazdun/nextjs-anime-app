/*-------------------------------------------------------------------
|  🐼 React FC Table 
|
|  🐯 Purpose: A TABLE TO DISPLAY ANIME PREVIEW CARDS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Preview } from '.'
import mock from '@/mocks/animeData.json'
import { LoadingPreview } from './Preview'

export const Table = ({ data, isLoading }) => {
  if (!data || data.length === 0 || isLoading) {
    return (
      <ul className="text-sm bg-white shadow-sm md:rounded-md md:border dark:shadow-transparent dark:md:border-2 dark:bg-dark-800 dark:border-gray-800">
        {mock.data.Page.media.map((item, idx) => {
          return <LoadingPreview idx={idx} key={item.id} />
        })}
      </ul>
    )
  }

  return (
    <ul className="text-sm bg-white shadow-sm md:rounded-md md:border dark:shadow-transparent dark:md:border-2 dark:bg-dark-800 dark:border-gray-800">
      {data.map((item, idx) => {
        return <Preview item={item} idx={idx} key={item.id} />
      })}
    </ul>
  )
}
