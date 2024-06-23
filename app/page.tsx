import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import { motion } from 'framer-motion'

const Homepage = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className='text-center xl:text-left order-2 xl:order-none transition-all duration-500'>
            <span className='text-xl'>Web Developer</span>
            <h1 className='h1 mb-6'>Hello I am <br /> <span className='text-accent'>Nasim</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I am a software developer based in Dhaka, Bangladesh. I enjoy building things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button className='uppercase flex items-center gap-2 transition-all duration-200' variant={'outline'} size={'lg'}>
                <span>Download CV</span>
                <FiDownload className='text-xl ml-2' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base  hover:bg-accent hover:text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Homepage;