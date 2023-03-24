/*-------------------------------------------------------------------
|  🐼 React Hook useModifiedSWR
|
|  🐯 Purpose: HANDLES API REQUESTS
|
|  🐸 Returns: DIFFERENT STATES OF AN API REQUEST AND API DATA
*-------------------------------------------------------------------*/

import useSWR from 'swr'
import { request } from 'graphql-request'

const fetcher = async query => {
  const endpoint = 'https://graphql.anilist.co'
  const data = await request(endpoint, query, query.variables)
  return data
}

export function useModifiedSWR(query) {
  const { data, error, isValidating } = useSWR(query ? query : null, fetcher)

  if (error) {
    console.log(error)
  }

  return {
    isValidating,
    isLoading: !error && !data,
    isError: error,
    data,
  }
}
