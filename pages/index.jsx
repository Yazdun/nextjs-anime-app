/*-------------------------------------------------------------------
|  🐼 React FC Home
|
|  🐯 Purpose: THIS IS THE HOMEPAGE OF THE APPLICATION
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Container, Pagination, Table } from '@/components'
import { useModifiedSWR } from '@/hooks/useModifiedSWR'
import AnimeQuery from '@/queries/animeList.graphql'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [current, setCurrent] = useState(1)

  const { data, isLoading } = useModifiedSWR({
    ...AnimeQuery,
    variables: { page: current },
  })

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [current])

  return (
    <>
      <Head>
        <title>Anime App | Created by Yazdun</title>
        <meta name="description" content="NextJS Anime Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h2 className="font-bold">AnimeList - Page {current}</h2>
      </Container>
      <Container screen>
        <Table data={data?.Page?.media} isLoading={isLoading} />
      </Container>
      <Pagination
        lastPage={data?.Page?.pageInfo?.lastPage}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  )
}
