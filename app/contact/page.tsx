'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion } from 'framer-motion'

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
                <div>
                    <div>
                        <form></form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact