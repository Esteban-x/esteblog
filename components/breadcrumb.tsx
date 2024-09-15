'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import clsx from 'clsx'

const CustomBreadcrumb = () => {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter(x => x)

  return (
    <Breadcrumb className='container mx-auto flex md:inline-block justify-center max-w-screen-2xl px-10 pt-5 md:px-20'>
      <div className=''>
        <BreadcrumbList>
          <React.Fragment>
            <BreadcrumbItem>
              {pathname === '/' ? null : (
                <BreadcrumbLink
                  className={clsx({
                    'underline underline-offset-2 capitalize': pathname !== '/',
                  })}
                  href='/'
                >
                  Accueil
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {pathname === '/' ? null : <BreadcrumbSeparator />}
          </React.Fragment>
          {pathnames.map((value, index) => {
            const href = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            return isLast ? (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className='capitalize'
                    href={href}
                    aria-current='page'
                  >
                    {value}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className={clsx({
                      'underline underline-offset-2 capitalize':
                        pathname !== value,
                    })}
                    href={href}
                  >
                    {value}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </div>
    </Breadcrumb>
  )
}

export default CustomBreadcrumb
