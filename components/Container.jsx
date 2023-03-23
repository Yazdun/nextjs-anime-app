import cn from 'classnames'

export const Container = ({
  as: Element = 'div',
  children,
  className = 'bg-secondary',
  ...rest
}) => {
  return (
    <Element
      {...rest}
      className={cn('w-full max-w-3xl mx-auto p-5', className)}
    >
      {children}
    </Element>
  )
}
