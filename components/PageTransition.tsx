'use client'
import React from 'react'
import { AnimatePresence, motion, delay } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
    children: React.ReactNode
}
const PageTransition = ({ children }: PageTransitionProps) => {
    const pathName = usePathname();
    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    className='h-screen w-screen fixed top-0 pointer-events-none bg-primary'
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition