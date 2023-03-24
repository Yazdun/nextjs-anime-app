/*-------------------------------------------------------------------
|  🐼 React FC Layout
|
|  🐯 Purpose: RE-USEABLE LAYOUT TO BE USED IN NEXTJS PAGES
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Navbar } from '@/components'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
