'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const slider1 = [
    {
        color: "#d7d4cf",
        src: "rentalMotor/hero.png",
        href: "https://rental-motor-kudus.vercel.app/"
    },
    {
        color: "#d7d4cf",
        src: "cozy/cozy.png",
        href: "https://cozy-adam.vercel.app/"
    },
    {
        color: "#d7d4cf",
        src: "ratio/ratio.png",
        href: "https://ratio-adam.vercel.app/"
    },
    {
        color: "#d7d4cf",
        src: "jelajahKalbar/hero.png",
        href: "https://website-kalimantan-barat.vercel.app/"
    },
];

const slider2 = [
    {
        color: "#d7d4cf",
        src: "healthCare/form.png",
        href: "https://health-care-lemon.vercel.app/"
    },
    {
        color: "#e5e0e1",
        src: "siKita/hero.png",
        href: ""
    },
    {
        color: "#d7d4cf",
        src: "rentalMotor/aboutUs.png",
        href: "https://rental-motor-kudus.vercel.app/"
    },
    {
        color: "#e1dad6",
        src: "agenUmroh/dashboard.png",
        href: "https://agen-umroh.vercel.app/"
    },
];

export default function Gallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div ref={container} className="flex-col gap-[3vw] relative bg-[#04101C] hidden md:flex z-[1]">
            <motion.div style={{ x: x1 }} className="flex relative gap-[3vw]">
                {slider1.map((project, index) => (
                    <div
                        key={index}
                        className="w-[100vw] h-[25vh] flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ backgroundColor: project.color }}
                    >
                        <div className="relative w-[80%] h-[80%]">
                            <Link href={project.href} target="_blank">
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/assets/images/${project.src}`}
                                    className="object-cover cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div style={{ x: x2 }} className="flex relative gap-[3vw]">
                {slider2.map((project, index) => (
                    <div
                        key={index}
                        className="w-[100vw] h-[25vh] flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ backgroundColor: project.color }}
                    >
                        <div className="relative w-[80%] h-[80%]">
                            <Link href={project.href} target="_blank">
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/assets/images/${project.src}`}
                                    className="object-cover cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div style={{ height }} className="relative mt-[100px] max-w-fit bg-white">
                <div className="absolute h-[1550%] w-[120%] left-[-10%] rounded-b-[50%] bg-white shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
            </motion.div>
        </div>
    );
}
