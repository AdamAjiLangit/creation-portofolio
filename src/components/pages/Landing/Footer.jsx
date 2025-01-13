'use client';

import Link from 'next/link';
import Rounded from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic';
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function Footer() {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 250]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, isMobile ? 0 : 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, isMobile ? 0 : 90]);
    const margin = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100]);

    return (
        <motion.div ref={container} className="text-white flex flex-col items-center justify-center pb-20 md:pb-0 bg-[#141516] relative">
            <div className="pt-20 w-full">
                <div className="relative border-b border-gray-600 pb-[100px] mx-10 md:mx-[100px]">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[5vw] font-light m-0">Let&apos;s work</h2>
                        <h2 className="text-[5vw] font-light m-0">together</h2>
                    </div>
                    <motion.div style={{ x: isMobile ? 200 : x }} className="hidden md:block absolute left-[calc(100%-400px)] top-[calc(100%-90px)]">
                        <a href="mailto:adamajilangit@gmail.com">
                            <Rounded backgroundColor={"#334BD3"} className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer">
                                <p className="m-0 text-sm md:text-lg font-light relative z-10">Get in touch</p>
                            </Rounded>
                        </a>
                    </motion.div>
                    <motion.svg style={{ rotate: isMobile ? 90 : rotate, scale: 2, margin }} className="absolute top-[30%] left-full" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className="flex gap-5 mt-[100px] mx-10 md:mx-[100px]">
                    <a href='mailto:adamajilangit@gmail.com'>
                        <Rounded className="w-fit h-[50px] px-5 border border-white text-white rounded-full flex items-center justify-center cursor-pointer">
                            <p>adamajilangit@gmail.com</p>
                        </Rounded>
                    </a>
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 mt-5 p-5">
                    <div className="flex gap-5">
                        <span className="flex flex-col gap-4">
                            <h3 className="text-gray-400 uppercase font-medium">Version</h3>
                            <p className="hover:underline">2024 © Edition</p>
                        </span>
                        <span className="flex flex-col gap-4">
                            <h3 className="text-gray-400 uppercase font-medium">Local Time</h3>
                            <p className="hover:underline">12:00 PM WIB</p>
                        </span>
                    </div>
                    <div className="border border-white"></div>
                    <div>
                        <span className="flex flex-col gap-4">
                            <h3 className="text-gray-400 uppercase font-medium">socials</h3>
                            <div className='flex items-center gap-4'>
                                <Magnetic>
                                    <Link href="https://www.instagram.com/zein_wx/">
                                        <p className="hover:underline">Instagram</p>
                                    </Link>
                                </Magnetic>
                                <Magnetic>
                                    <Link href="https://www.linkedin.com/in/adam-aji-langit-817670267/">
                                        <p className="hover:underline">LinkedIn</p>
                                    </Link>
                                </Magnetic>
                                <Magnetic>
                                    <Link href="https://github.com/AdamAjiLangit">
                                        <p className="hover:underline">GitHub</p>
                                    </Link>
                                </Magnetic>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
