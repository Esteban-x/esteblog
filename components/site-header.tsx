import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { MainNav } from './main-nav'

export default function SiteHeader() {
  return (
    <header className='sticky top-0 w-full   bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10'>
      <div className='container mx-auto flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <button className='inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64'>
              <span className='hidden lg:inline-flex'>Rechercher...</span>
              <span className='inline-flex lg:hidden'>Rechercher...</span>
              <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
                <span className='text-xs'>⌘</span>K
              </kbd>
            </button>
          </div>
          <nav className='flex items-center'>
            <Link
              href={siteConfig.links.instagram}
              rel='noreferrer'
              target='_blank'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-8 px-0 opacity-60 hover:opacity-100'
                )}
              >
                <Icons.instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.tiktok}
              rel='noreferrer'
              target='_blank'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-8 px-0 opacity-60 hover:opacity-100'
                )}
              >
                <Icons.tiktok className='h-5 w-5 ' />
                <span className='sr-only'>Tiktok</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              rel='noreferrer'
              target='_blank'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-8 px-0 opacity-60 hover:opacity-100'
                )}
              >
                <Icons.github className='h-5 w-5 ' />
                <span className='sr-only'>Github</span>
              </div>
            </Link>
            <Link href='#' rel='noreferrer' target='_blank'>
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-8 px-0 opacity-60 hover:opacity-100'
                )}
              >
                <Icons.light className='h-5 w-5' />
                <span className='sr-only'>Changer de thème</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
