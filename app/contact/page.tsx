'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/data'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { LibraryIcon, Loader2 } from 'lucide-react'
import { FaVideo } from "react-icons/fa"
import Link from "next/link"

const Contact = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)


    const formSchema = z.object({
        firstname: z.string().min(2).max(50),
        lastname: z.string().min(2).max(50),
        email: z.string().email(),
        phone: z.string().min(10).max(15),
        service: z.string().min(2).max(3),
        message: z.string().max(600)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        }
    })

    const submit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            const response = await axios.post('/api/send', data)
            if (response.status === 200) {
                setIsLoading(false)
                toast({
                    title: `Thanks for reaching out ${data.firstname}, I'll get back to you soon!`,
                })
            }
        } catch (error) {
            setIsLoading(false)
            toast({
                title: `Something went wrong, please try again later!`,
            })
        }
    }


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


                        <Form {...form}>

                            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={form.handleSubmit(submit)}>
                                <h3 className='text-4xl text-accent'>Lets work together</h3>
                                <p className='text-white/60'>Get in Touch to Start Your Next Project.</p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                                    <FormField
                                        control={form.control}
                                        name='firstname'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input {...field} placeholder='Firstname' className="w-full" />
                                                </FormControl>
                                                <FormMessage>{form.formState.errors.firstname?.message}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='lastname'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input {...field} placeholder='Lastname' className="w-full" />
                                                </FormControl>
                                                <FormMessage>{form.formState.errors.firstname?.message}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input {...field} placeholder='Email address' className="w-full" />
                                                </FormControl>
                                                <FormMessage>{form.formState.errors.firstname?.message}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='phone'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input {...field} placeholder='Phone number' className="w-full" />
                                                </FormControl>
                                                <FormMessage>{form.formState.errors.firstname?.message}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name='service'
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className='w-full'>
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Select a service</SelectLabel>
                                                        <SelectItem value='wd'>Web Development</SelectItem>
                                                        <SelectItem value='mad'>Mobile App Development</SelectItem>
                                                        <SelectItem value='ui'>UI/UX</SelectItem>
                                                        <SelectItem value='cst'>Consultaion</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='message'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea {...field} className='h-[200px]' placeholder='Type your message here.' />
                                            </FormControl>
                                            <FormMessage>{form.formState.errors.firstname?.message}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <Button size="md" className='max-w-40' type='submit'>Send Message {isLoading && <Loader2 />}</Button>
                            </form>
                        </Form>


                    </div>

                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            <Link href="https://cal.com/nasimshishir/30min" target="_blank" className="group">
                                <li className='flex items-center gap-6 border border-accent rounded-lg py-3 pe-4 mb-5'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center'>
                                        <div className='text-[24px] xl:text-[28px]' ><FaVideo /></div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/60 group-hover:text-white/80'>Book a Schedule</p>
                                        <h3 className='text-xl'>For a FREE consultation</h3>
                                    </div>
                                </li>
                            </Link>
                            {contactInfo.map((info, idx) => {
                                return (
                                    <li key={idx} className='flex items-center gap-4 lg:gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[24px] xl:text-[28px]' >< info.icon /></div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{info.title}</p>
                                            <h3 className='text-lg lg:text-xl'>{info.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}

export default Contact