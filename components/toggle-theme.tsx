'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

export const ToggleTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
      {currentTheme === 'dark' ? (
        <Button onClick={() => setTheme('light')} variant='outline' size='icon'>
          <SunIcon className='h-[1.2rem] w-[1.2rem]   scale-0 transition-all  dark:scale-100' />
          <span className='sr-only'>Activer le mode clair</span>
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')} variant='outline' size='icon'>
          <MoonIcon className=' h-[1.2rem] w-[1.2rem]  scale-100 transition-all  light:scale-0' />
          <span className='sr-only'>Activer le mode sombre</span>
        </Button>
      )}
    </div>
  )
}
