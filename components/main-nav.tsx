'use client'
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const MainNav = () => {
  const pathname = usePathname()
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='w-9 h-9' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Posts
      </Link>
      <Link
        href='pics'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/pics' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Photos
      </Link>
      <Link
        href='videos'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/videos' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Videos
      </Link>
      <Link
        href='books'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Livres
      </Link>
      <Link
        href='films'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/films' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Films et Séries
      </Link>
      <Link
        href='politic'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/politic' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Politique
      </Link>
      <Link
        href='history'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/history' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Histoire
      </Link>
    </nav>
  )
}
