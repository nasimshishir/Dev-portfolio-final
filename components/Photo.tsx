'use client'
import Image from 'next/image'
import React from 'react'

const Photo = () => {
    return (
        <div className=''>
            <Image src='/assets/nasim_shishir.jpg' alt='Nasim Shishir' width={380} height={380} className='rounded-full' />
        </div>
    )
}

export default Photo