import React from 'react'
import Link from 'next/link'
import { CalendarIcon } from '@radix-ui/react-icons'
import { buttonVariants } from './ui/button'
import { cn, formatDate } from '@/lib/utils'

interface PostItemProps {
  slug: string
  title: string
  description?: string
  date: string
}

export const PostItem = ({ slug, title, description, date }: PostItemProps) => {
  return (
    <article className='post-preview flex flex-col fap-2 border-border border-b py-3'>
      <div className='title'>
        <h2 className='text-2xl font-bold'>
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className='max-w-none text-muted-foreground'>{description}</div>
      <div className='flex justify-between items-center'>
        <dl>
          <dt className='sr-only'>Publié le</dt>
          <dd className='text-sm sm:text-base font-medium flex items-center gap-1'>
            <CalendarIcon className='h-4 w-4' />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Voir plus ➡️
        </Link>
      </div>
    </article>
  )
}
