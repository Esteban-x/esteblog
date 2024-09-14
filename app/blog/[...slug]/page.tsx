import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-component'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find(post => post.slugAsParams === slug)
  return post
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)
  if (!post || !post.published) {
    notFound()
  }
  return (
    <article className='container  flex flex-col py-8 prose dark:prose-invert max-w-screen-2xl md:px-10 mx-auto'>
      <h1 className='mb-2 text-center md:text-left md:inline-block justify-center flex font-black text-4xl lg:text-5xl'>
        {post.title}
      </h1>
      {post.description ? (
        <p className='text-xl break-words mt-0 mb-4 ml-1 md:inline-block flex justify-center text-muted-foreground'>
          {post.description}
        </p>
      ) : null}
      <MDXContent code={post.body} />
    </article>
  )
}
