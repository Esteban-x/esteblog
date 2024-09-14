import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { MainNav } from './main-nav'
import { ToggleTheme } from './toggle-theme'

export default function SiteHeader() {
  return (
    <header className='sticky z-50 top-0 w-full bg-background/95 backdrop-blur text-foreground supports-[backdrop-filter]:bg-background/60 md-px-8 px-6'>
      <div className='container mx-auto flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <button
          className='inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-3 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
          type='button'
          aria-haspopup='dialog'
          aria-expanded='false'
          aria-controls='radix-:R15u6ja:'
          data-state='closed'
        >
          <Icons.menu className='h-8 w-8' />
          <span className='sr-only'>Afficher le menu</span>
        </button>
        <div className='flex flex-1 items-center md:justify-end space-x-2'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <button className='inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64'>
              <span className='hidden lg:inline-flex'>Rechercher...</span>
              <span className='inline-flex lg:hidden'>Rechercher...</span>
              <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
                <span className='text-xs'>⌘</span>K
              </kbd>
            </button>
          </div>
          <nav className='flex items-center opacity-65 text-foreground'>
            <ToggleTheme />
          </nav>
        </div>
      </div>
    </header>
  )
}
