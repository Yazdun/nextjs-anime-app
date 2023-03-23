import '@/styles/globals.css'
import { Layout } from '@/components'
import { ThemeProvider } from 'next-themes'
import { MotionConfig } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MotionConfig>
  )
}
