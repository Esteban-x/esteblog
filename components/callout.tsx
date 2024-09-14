import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CalloutProps {
  children?: ReactNode
  type?: 'default' | 'warning' | 'danger'
}

export default function Callout({
  children,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        ' items-start rounded-md border border-l-4 py-0 px-5 w-full dark:max-w-none',
        {
          'border-red-900 bg-red-50 dark:prose': type === 'danger',
          'border-yellow-900 bg-yellow-50 dark:prose': type === 'warning',
        }
      )}
      {...props}
    >
      <div className='main-content break-words [word-spacing:3px] text-md leading-relaxed tracking-wide md:text-xl'>
        {children}
      </div>
    </div>
  )
}
