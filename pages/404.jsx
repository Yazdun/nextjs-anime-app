/*-------------------------------------------------------------------
|  🐼 React FC Custom404
|
|  🐯 Purpose: DISPLAYS 404 PAGE FOR UNAVAILABLE NEXTJS PAGES
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Container } from '@/components'
import Head from 'next/head'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Anime App | 404</title>
        <meta name="description" content="NextJS Anime Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="flex flex-col items-center justify-center gap-5 mt-10 text-center">
        <h1 className="text-3xl font-bold">404 | Page not found</h1>
        <p className="typography">
          Sorry ! Looks like this page doesn&apos;t exist or has been deleted
        </p>
        <Link
          className="flex items-center justify-center gap-1 font-bold text-blue-600 dark:text-blue-500 link md:justify-start"
          href="/"
        >
          <HiArrowNarrowRight />
          Back to Homepage
        </Link>
      </Container>
    </>
  )
}
