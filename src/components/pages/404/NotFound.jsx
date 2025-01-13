'use client';

import React from 'react';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import AnimatedButton from '@/components/ui/animated-button';
import { motion } from 'framer-motion';

const NotFoundComponent = () => {
    return (
        <div className='min-h-screen bg-[#04101C] pt-40'>
            <div className='flex items-center justify-center gap-5'>
                <Image
                    src='/assets/images/404.png'
                    width={500} height={500}
                    alt='404'
                    className='rounded-xl shadow-xl shadow-yellow-300 z-[10]'
                />
                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, bounce: 1 }} className='space-y-5 z-[1]'>
                    <div>
                        <h4 className='text-gray-400 text-lg'>Error 404</h4>
                        <Divider className='max-w-12 my-2 bg-gray-300' />
                    </div>
                    <h1 className='text-white text-6xl'>oops, you're in <br /> the wrong place!</h1>
                    <h4 className='text-gray-400 font-poppins'>No worries! Let's get you back on track.</h4>
                    <AnimatedButton text="Go home" url="/" />
                </motion.div>
            </div>
        </div>
    )
}

export default NotFoundComponent