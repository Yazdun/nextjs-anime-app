import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-black bg-light-100 dark:bg-dark-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
