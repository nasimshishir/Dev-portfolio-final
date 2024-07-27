'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
import { Links } from '@/data'
import { Button } from "./ui/button"

const MobileNav = () => {
    const pathName = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href={`/`}>
                        <h1 className='text-4xl font-semibold'>Nasim <span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {
                        Links.map((link, idx) => {
                            return (
                                <Link href={link.path} key={idx} className={`${pathName === link.path && 'text-accent border-b-2 border-accent'} text-xl capitalize font-medium hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                    <Link href="/contact">
                        <Button>Contact</Button>
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav