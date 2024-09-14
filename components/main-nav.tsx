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
    <nav className='items-center mr-4 whitespace-nowrap hidden md:flex space-x-4 lg:space-x-6'>
      <Link href='/' className='flex space-x-2 items-center'>
        <Icons.logo className='w-8 h-8' />
        <span className='hidden lg:inline-block font-bold'>
          {siteConfig.name}
        </span>
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
        Films et séries
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
