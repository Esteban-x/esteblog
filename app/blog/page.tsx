import React from 'react'
import { posts } from '#site/content'
import { PostItem } from '@/components/posts-item'
import { sortPosts } from '@/lib/utils'

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  const displayPosts = sortedPosts
  return (
    <div className='container mx-auto max-w-screen-2xl px-3 py-8 lg-py-10'>
      <div className='flex flex-col items-start gap-4 md:flex md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4 '>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            Posts
          </h1>
          <p className='text-xl text-muted-foreground whitespace-nowrap'>
            Voici la liste de tout mes posts
          </p>
        </div>
      </div>
      <hr className='mt-8' />
      {displayPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {displayPosts.map(({ slug, date, title, description }) => {
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  description={description}
                  title={title}
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Pas de posts pour le moment</p>
      )}
    </div>
  )
}
