import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaVideo } from "react-icons/fa"

const Homepage = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className='text-center xl:text-left order-2 xl:order-none transition-all duration-500'>
            <span className='text-xl'>Web Developer</span>
            <h1 className='h1 mb-6'>Hello I am <br /> <span className='text-accent'>Nasim</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I am a passionate Full-Stack Web Developer with 3+ Years of Expertise in WordPress, E-commerce Solutions and fullstack development.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-4'>
              <Link
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className='uppercase flex items-center gap-2 transition-all duration-200' variant={'outline'} size={'lg'} >
                  <span>Download CV</span>
                  <FiDownload className='text-xl ml-2' />
                </Button>
              </Link>
              <Link
                href="https://cal.com/nasimshishir/30min"
                target="_blank"
              >
                <Button className='uppercase flex items-center gap-2 transition-all duration-200' variant={'outline'} size={'lg'} >
                  <span>Book a Meeting</span>
                  <FaVideo className='text-xl ml-2' />
                </Button>
              </Link>
            </div>
            <div className='flex justify-center xl:justify-start gap-8 xl:gap-12 my-8'>
              <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base  hover:bg-accent hover:text-primary hover:transition-all duration-500' />
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