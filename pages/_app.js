/*-------------------------------------------------------------------
|                    🚀 NEXTJS ANIME APP 🚀
|
|  HELLO 👋! WELCOME TO ANIME APP. THIS APP FETCHES DATA FROM AN 
|  EXTERNAL API AND DISPLAYS THE DATA. I BUILT THIS APP AS A TASK
|  FOR AN INTERVIEW. IF YOU HAVE ANY QUESTIONS, FEEL FREE TO REACH
|  OUT TO ME OR OPEN AN ISSUE ON GITHUB. THANKS!
|
|  🔗CREATOR: https://yazdun.com
|  🔗SOURCE CODE: https://github.com/Yazdun/nextjs-anime-app
|
*-------------------------------------------------------------------*/

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
