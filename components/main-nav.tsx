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
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
      <Link
        href='/photos'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/photos' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Photos
      </Link>
      <Link
        href='/videos'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/videos' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Videos
      </Link>
      <Link
        href='/livres'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/livres' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Livres
      </Link>
      <Link
        href='/films-et-series'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/films-et-series'
            ? 'text-foreground'
            : 'text-foreground/60'
        )}
      >
        Films et séries
      </Link>
      <Link
        href='/politique'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/politique' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Politique
      </Link>
      <Link
        href='/histoire'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/histoire' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Histoire
      </Link>
    </nav>
  )
}
