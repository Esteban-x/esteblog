import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdSubdirectoryArrowRight } from 'react-icons/md'
import { RxTimer } from 'react-icons/rx'
import ReactStars from 'react-stars'

interface Film {
  name: string
  genre: string[]
  type: string
  langue: string
  embedCode: string
  imageUrl: string
  slug: string
  annee: string
  duree: string
  note: number
}

type MovieCardProps = {
  film: Film
}

export const MovieCard = ({ film }: MovieCardProps) => {
  return (
    <div className='flex flex-col max-se:w-[8.5rem] max-se:h-[18rem] w-[9.72rem] h-[19rem] items-center relative'>
      <Link
        href={`/${film.slug}`}
        className='rounded-2xl border-border duration-150 border transition-transform origin-bottom hover:scale-y-[102%] hover:scale-x-[102%] group relative overflow-hidden w-full h-full '
      >
        <Image
          alt='Image du film'
          layout='fill'
          className='h-full opacity-90 w-full object-cover duration-150 object-center  group-hover:brightness-50'
          src={film.imageUrl}
        ></Image>

        <div className='absolute text-white inset-0 flex flex-col pb-4 justify-end opacity-0 hover:opacity-100 duration-150 p-2'>
          <MdSubdirectoryArrowRight className='absolute w-20 h-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          <p className='capitalize text-sm font-medium px-2 annee-langue'>
            {film.annee}, {film.langue},
          </p>
          <p className='capitalize mt-[-5px] w-30 text-sm font-medium px-2 truncate ... genre'>
            {film.genre.join(', ')}
          </p>
          <p className='capitalize flex flex-row items-center text-sm font-medium px-2 annee-langue'>
            <RxTimer /> &nbsp;
            {film.duree}
          </p>
        </div>
      </Link>
      <div className='flex items-start py-[7px] w-40 px-[1px] mx-auto flex-col'>
        <Link
          href={`/${film.slug}`}
          className='text-md text-foreground w-40 font-semi-bold truncate ...'
        >
          {film.name}
        </Link>
        <ReactStars
          className='pointer-events-none mt-[-2px]'
          count={5}
          value={film.note}
          size={17}
          color2={'#5a97ff'}
        />
      </div>
    </div>
  )
}
