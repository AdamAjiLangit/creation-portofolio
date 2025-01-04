import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { linkMenuSlide } from '@/lib/animate';
import LinkNavbar from './Link';
import Curve from './Curve';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Journey",
        href: "#journey",
    },
    {
        title: "Skills",
        href: "#skills",
    },
]

export default function NavItems() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={linkMenuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-30"
        >
            <div className="box-border p-[100px] flex flex-col gap-5 justify-between">
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname);
                    }}
                    className="flex flex-col text-[56px] gap-3 mt-5"
                >
                    <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-[11px] mb-10">
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => (
                        <LinkNavbar
                            key={index}
                            data={{ ...data, index }}
                            isActive={selectedIndicator == data.href}
                            setSelectedIndicator={setSelectedIndicator}
                        />
                    ))}
                </div>
            </div>
            <Curve />
        </motion.div>
    )
}