/*-------------------------------------------------------------------
|  🐼 React FC Container
|
|  🐯 Purpose: RE-USEABLE CONTAINER COMPONENT TO WRAP THE ELEMENTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from 'classnames'

export const Container = ({
  as: Element = 'div',
  children,
  className = 'bg-secondary',
  screen,
  ...rest
}) => {
  return (
    <Element
      {...rest}
      className={cn(
        'w-full max-w-3xl mx-auto',
        screen ? 'md:px-5' : 'p-5',
        className,
      )}
    >
      {children}
    </Element>
  )
}
