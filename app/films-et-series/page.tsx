'use client'
import { Filters } from '@/components/filter'
import React from 'react'
import { films } from '@/data/film'
import { useSearchParams } from 'next/navigation'
import { MovieCard } from '@/components/movie-card'

export default function FilmSeriesPage() {
  const searchParams = useSearchParams()

  const selectedType = searchParams.getAll('type')
  const selectedGenre = searchParams.getAll('genres')
  const selectedLangue = searchParams.getAll('langue')

  const filteredFilms = films.filter(film => {
    const matchesType =
      selectedType.length === 0 || selectedType.includes(film.type)
    const matchesLangue =
      selectedLangue.length === 0 || selectedLangue.includes(film.langue)
    const matchesGenre =
      selectedGenre.length === 0 ||
      selectedGenre.some(data => film.genre.includes(data))

    return matchesType && matchesLangue && matchesGenre
  })

  return (
    <div className='mt-3 container mx-auto max-w-screen-2xl flex justify-center px-2 mb-8 lg-mb-10'>
      <div className='flex flex-col'>
        <h1 className='title text-4xl mb-1 font-extrabold'>
          Les meilleurs films et séries
        </h1>
        <p>
          Voici ma sélection personnelle des meilleurs films et séries.
          J&apos;ai pris soin de choisir uniquement les œuvres les plus
          remarquables pour vous offrir une expérience de visionnage
          exceptionnelle.
        </p>
        <Filters />
        <div className='flex-row flex-wrap gap-5 se:gap-3 mt-6 items-center flex'>
          {filteredFilms.length > 0 ? (
            filteredFilms.map((film, index) => (
              <MovieCard film={film} key={index} />
            ))
          ) : (
            <p>Aucun film ou série ne correspond à vos filtres</p>
          )}
        </div>
      </div>
    </div>
  )
}
