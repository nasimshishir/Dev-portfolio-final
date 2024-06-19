'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Links } from '@/data'
import { link } from 'fs'

const Nav = () => {
    const pathName = usePathname()
    return (
        <nav className='flex items-center gap-8'>
            {
                Links.map((link, idx) => {
                    return (
                        <Link href={link.path} key={idx} className={`${pathName === link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Nav