'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { projects } from '@/data'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper as SwiperType } from 'swiper/types'
import WorksSliderButtons from '@/components/WorksSliderButtons'
const Works = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }



    return (
        <section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.4,
                        ease: "easeIn"
                    }
                }}
                className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
            >
                <div className='container mx-auto'>
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                            <div className='flex flex-col gap-[30px] h-[50%]'>
                                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h2>
                                <p className='text-xl font-bold leading-none text-accent'>{project.title}</p>
                                <p className='text-white/60'>{project.description}</p>
                                <ul className='flex gap-4'>
                                    {project.stack.map((item, idx) => {
                                        return (
                                            <li key={idx} className='text-accent'>
                                                {item.name}
                                            </li>
                                        )
                                    })}
                                </ul>

                                {/* Border */}
                                <div className='border border-white/20'></div>

                                <div className='flex items-center gap-4'>
                                    {/* Live Project Button */}
                                    <Link href={project.liveSite}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className=''>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    {/* Github Button */}
                                    {
                                        project.github &&
                                        <Link href={project.github}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className=''>Github Repository</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-full xl:w-[50%]'>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className='xl:h-[520px] mb-12'
                                onSlideChange={handleSlideChange}
                            >
                                {projects.map((item, idx) => {
                                    return (
                                        <SwiperSlide key={idx} className='w-full '>
                                            <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                                <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                                <div className='relative w-full h-full'>
                                                    <Image src={item.image} alt={item.title} fill className='object-cover' />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                                {/* Slider Buttons */}
                                <WorksSliderButtons
                                    containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                    buttonStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all '
                                />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.section>
        </section>
    )
}

export default Works