'use client'
import React, { useEffect, useState } from 'react'
import { filters } from '@/data/filters'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@radix-ui/react-dropdown-menu'
import { Button } from './ui/button'
import { useSearchParams, useRouter } from 'next/navigation'
import { GiMineExplosion } from 'react-icons/gi'
import { PiDetective } from 'react-icons/pi'
import { MdOutlineDraw } from 'react-icons/md'
import { GiPumpkinLantern } from 'react-icons/gi'
import { SlMagicWand } from 'react-icons/sl'
import { LiaLaughSquint } from 'react-icons/lia'
import { GiFilmSpool } from 'react-icons/gi'
import { PiFilmSlateLight } from 'react-icons/pi'
import { Icons } from './icons'

type FilterCategory = 'type' | 'langue' | 'genres'

type SelectedFilters = {
  type: string[]
  langue: string[]
  genres: string[]
}

export const Filters = () => {
  const searchParams = useSearchParams()
  console.log(searchParams)
  const router = useRouter()

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    type: searchParams.getAll('type') || [],
    langue: searchParams.getAll('langue') || [],
    genres: searchParams.getAll('genres') || [],
  })

  console.log('selectedFilter : ', selectedFilters)

  const handleFilterChange = (category: FilterCategory, value: string) => {
    setSelectedFilters(prev => {
      const updated = { ...prev }
      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter(item => item !== value)
      } else {
        updated[category].push(value)
      }
      return updated
    })
  }

  useEffect(() => {
    const params = new URLSearchParams()
    ;(Object.keys(selectedFilters) as Array<FilterCategory>).forEach(key => {
      selectedFilters[key].forEach(val => {
        params.append(key, val)
      })
    })
    router.replace(`?${params.toString()}`)
    console.log(params.toString())
  }, [selectedFilters, router])

  return (
    <div className='container z-10 mt-5 pr-5 rounded-md'>
      <div className='flex gap-4 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='' variant={'secondary'}>
              Type
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='z-50  overflow-hidden rounded-md  bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 dark:bg-[#0D0D0D] data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-full flex flex-col justify-center mt-1'>
            {filters.type.map(type => (
              <DropdownMenuCheckboxItem
                className='relative flex cursor-pointer select-none items-center rounded-sm py-3 px-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none w-[8rem] justify-center data-[disabled]:opacity-50 border-b-[0.5px] gap-2'
                key={type.value}
                checked={selectedFilters.type.includes(type.value)}
                onCheckedChange={() => handleFilterChange('type', type.value)}
              >
                {type.value === 'film' ? (
                  <GiFilmSpool className='w-4 h-4' />
                ) : null}
                {type.value === 'serie' ? (
                  <PiFilmSlateLight className='w-4 h-4' />
                ) : null}
                {selectedFilters.type.includes(type.value) ? (
                  <span className='absolute text-[#5a97ff] left-3 flex h-3.5 w-3.5 items-center justify-center'>
                    <span data-state='checked'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                      >
                        <path
                          d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
                          fill='currentColor'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </span>
                ) : null}

                {type.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'secondary'}>Genre</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='z-50  overflow-hidden rounded-md  bg-popover pt-2 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 dark:bg-[#0D0D0D] data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 flex flex-col justify-center mt-1'>
            {filters.genres.map(genre => (
              <DropdownMenuCheckboxItem
                className='relative flex cursor-pointer select-none items-center rounded-sm py-3   text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none gap-2 data-[disabled]:opacity-50 justify-center w-[9rem] px-2 border-b-[0.5px]'
                key={genre.value}
                checked={selectedFilters.genres.includes(genre.value)}
                onCheckedChange={() =>
                  handleFilterChange('genres', genre.value)
                }
              >
                {genre.value === 'action' ? (
                  <GiMineExplosion className='w-4 h-4' />
                ) : null}
                {genre.value === 'enquete' ? (
                  <PiDetective className='w-4 h-4' />
                ) : null}
                {genre.value === 'anime' ? (
                  <MdOutlineDraw className='w-4 h-4' />
                ) : null}
                {genre.value === 'horreur' ? (
                  <GiPumpkinLantern className='w-4 h-4' />
                ) : null}
                {genre.value === 'magie' ? (
                  <SlMagicWand className='w-4 h-4' />
                ) : null}
                {genre.value === 'humour' ? (
                  <LiaLaughSquint className='w-4 h-4' />
                ) : null}

                {selectedFilters.genres.includes(genre.value) ? (
                  <span className='absolute left-3 text-[#5a97ff] flex h-3.5 w-3.5 items-center justify-center'>
                    <span data-state='checked'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                      >
                        <path
                          d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
                          fill='#5a97ff'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </span>
                ) : null}
                {genre.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'secondary'}>Langue</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='z-50  overflow-hidden rounded-md  bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 dark:bg-[#0D0D0D] data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-full flex flex-col justify-center mt-1'>
            {filters.langue.map(langue => (
              <DropdownMenuCheckboxItem
                className='relative flex cursor-pointer select-none items-center rounded-sm py-3 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none w-[7rem] justify-center data-[disabled]:opacity-50 gap-2 border-b-[0.5px]'
                key={langue.value}
                checked={selectedFilters.langue.includes(langue.value)}
                onCheckedChange={() =>
                  handleFilterChange('langue', langue.value)
                }
              >
                {langue.value === 'francais' ? (
                  <Icons.france className='w-4 h-4' />
                ) : null}

                {langue.value === 'russe' ? (
                  <Icons.russie className='w-4 h-4' />
                ) : null}

                {selectedFilters.langue.includes(langue.value) ? (
                  <span className='absolute text-[#5a97ff] left-3 flex h-3.5 w-3.5 items-center justify-center'>
                    <span data-state='checked'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                      >
                        <path
                          d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
                          fill='currentColor'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </span>
                ) : null}
                {langue.value === 'francais' ? 'FR' : null}

                {langue.value === 'russe' ? 'РУ' : null}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
