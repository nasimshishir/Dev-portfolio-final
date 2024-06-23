'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/data'

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>Lets work together</h3>
                            <p className='text-white/60'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, tenetur.</p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type='firstname' placeholder='Firstname' />
                                <Input type='lastname' placeholder='Lastname' />
                                <Input type='email' placeholder='Email address' />
                                <Input type='phone' placeholder='Phone number' />

                            </div>
                            <Select>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value='wst'>Web Development</SelectItem>
                                        <SelectItem value='mst'>Mobile App Development</SelectItem>
                                        <SelectItem value='ust'>UI/UX</SelectItem>
                                        <SelectItem value='cst'>Consultaion</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className='h-[200px]' placeholder='Type your message here.' />
                            <Button size="md" className='max-w-40'>Send Message</Button>
                        </form>
                    </div>

                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {contactInfo.map((info, idx) => {
                                return (
                                    <li key={idx} className='flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[24px] xl:text-[28px]' >< info.icon /></div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{info.title}</p>
                                            <h3 className='text-xl'>{info.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact