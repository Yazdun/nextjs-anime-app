import React from 'react'
import { Preview } from '.'

export const Table = ({ data }) => {
  if (!data) {
    return <div>loading</div>
  }

  return (
    <ul className="text-sm bg-white shadow-sm md:rounded-md md:border dark:shadow-transparent dark:md:border-2 dark:bg-dark-800 dark:border-gray-800">
      {data.map((item, idx) => {
        return <Preview item={item} idx={idx} key={item.id} />
      })}
    </ul>
  )
}
