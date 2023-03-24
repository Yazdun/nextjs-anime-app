import { Container, Preview, Table } from '@/components'
import { useModifiedSWR } from '@/hooks/useModifiedSWR'
import AnimeQuery from '@/queries/animeList.graphql'
import Head from 'next/head'

export default function Home() {
  const { data, isLoading } = useModifiedSWR({
    ...AnimeQuery,
    variables: { page: 5 },
  })

  console.log(data.Page)

  return (
    <>
      <Head>
        <title>Anime App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h2>Page 1</h2>
      </Container>
      <Container screen>
        <Table data={data?.Page?.media} />
      </Container>
    </>
  )
}
