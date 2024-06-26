'use client'
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
import { about, education, experiences, skills } from '@/data';



const Resume = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 '
                >
                    <div className="container mx-auto">
                        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                                <TabsTrigger value="experience">Experience</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                                <TabsTrigger value="about">About me</TabsTrigger>
                            </TabsList>
                            <div className='min-h-[70vh] w-full'>

                                {/* Experience */}
                                <TabsContent value='experience' className='w-full'>
                                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                        <h3 className='text-4xl font-bold'>{experiences.title}</h3>
                                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiences.description}</p>
                                        <ScrollArea className='h-[400px] '>
                                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                                {experiences.experiences.map((exp, index) => {
                                                    return (
                                                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                            <span className='text-accent'>{exp.duartion}</span>
                                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{exp.position}</h3>
                                                            <div className='flex items-center gap-3'>
                                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                                <p className='text-white/60'>{exp.company}</p>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </ScrollArea>
                                    </div>
                                </TabsContent>

                                {/* Education */}
                                <TabsContent value='education' className='w-full'>
                                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                        <h3 className='text-4xl font-bold'>{education.title}</h3>
                                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                        <ScrollArea className='h-[400px] '>
                                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                                {education.info.map((edu, index) => {
                                                    return (
                                                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                            <span className='text-accent'>{edu.duration}</span>
                                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{edu.degree}</h3>
                                                            <div className='flex items-center gap-3'>
                                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                                <p className='text-white/60'>{edu.institution}</p>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </ScrollArea>
                                    </div>
                                </TabsContent>

                                {/* Skills */}
                                <TabsContent value='skills' className='w-full'>
                                    <div className="flex flex-col gap-[30px]">
                                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                            <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                        </div>
                                        <ScrollArea className='h-[400px] '>
                                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]'>
                                                {skills.info.map((skill, index) => {
                                                    return (
                                                        <li key={index} className='flex flex-col gap-[10px]'>
                                                            <TooltipProvider delayDuration={100}>
                                                                <Tooltip>
                                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>< skill.icon /></div>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className='capitalize'>{skill.name}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </ScrollArea>
                                    </div>
                                </TabsContent>

                                {/* About */}
                                <TabsContent value='about' className='w-full'>
                                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                        <h3 className='text-4xl font-bold'>{about.title}</h3>
                                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:w-full xl:mx-0 '>
                                            {about.info.map((item, idx) => {
                                                return (
                                                    <li key={idx} className='flex items-start justify-start gap-4'>
                                                        <span className='text-white/60 '>{item.fieldName}</span>
                                                        <span className='text-lg '>{item.fieldValue}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Resume