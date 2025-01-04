'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import NavItems from './nav/NavItems';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic';

export default function Navbar() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        });
    }, []);

    const handleHover = (selector) => {
        gsap.to(selector, { scale: 1, duration: 0.1, ease: 'power3.out' });
    };

    const handleLeave = (selector) => {
        gsap.to(selector, { scale: 0, duration: 0.1, ease: 'power3.out' });
    };

    return (
        <div className='hidden md:block'>
            <div ref={header} className="absolute flex z-10 top-0 text-white p-[35px] justify-between w-full font-medium box-border items-center" id='header'>
                <a href="/">
                    <Magnetic>
                        <div className="flex cursor-pointer absolute left-[9%]">
                            <p className="m-0 transition-all duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">©</p>
                            <div className="relative overflow-hidden whitespace-nowrap ml-1 transition-all duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">
                                <p className="relative transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">Creation</p>
                                {/* <p className="absolute left-[120px] pl-[0.3em] transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">Adam</p>
                                <p className="absolute left-[120px] pl-[0.3em] transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">Aji</p> */}
                            </div>
                        </div>
                    </Magnetic>
                </a>
                <div className="flex items-center">
                    {['About', 'Journey', 'Skills'].map((item) => (
                        <Magnetic key={item}>
                            <div
                                className="relative z-10 p-[15px] cursor-pointer"
                                onMouseEnter={() => handleHover(`.${item.toLowerCase()}-indicator`)}
                                onMouseLeave={() => handleLeave(`.${item.toLowerCase()}-indicator`)}
                            >
                                <a href={`#${item.toLowerCase()}`}>{item}</a>
                                <div
                                    className={`indicator ${item.toLowerCase()}-indicator absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform`}
                                ></div>
                            </div>
                        </Magnetic>
                    ))}
                </div>
                <div ref={button} className="scale-0 fixed right-0 z-40">
                    <Rounded onClick={() => { setIsActive(!isActive) }} className="relative m-[20px] w-[80px] h-[80px] rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center">
                        <div className={`w-full relative z-10 transition-transform duration-[0.3s] ${isActive ? 'rotate-[45deg] top-[-1px]' : ''}`}>
                            <div className="block h-[1px] w-[40%] mx-auto bg-white relative top-[-5px] transition-transform"></div>
                            <div className="block h-[1px] w-[40%] mx-auto bg-white relative top-[5px] transition-transform"></div>
                        </div>
                    </Rounded>
                </div>
            </div>
            <div ref={button} className="scale-0 fixed right-0 z-40">
                <Rounded
                    onClick={() => { setIsActive(!isActive) }}
                    className="relative m-[20px] w-[80px] h-[80px] rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center"
                >
                    <div
                        className={`w-full relative z-10 transition-transform duration-[0.3s] ${isActive ? 'rotate-0' : ''}`}
                    >
                        <div
                            className={`block h-[1px] w-[40%] mx-auto bg-white absolute top-[-5px] left-[50%] transform -translate-x-[1rem] transition-transform ${isActive ? 'rotate-45 translate-y-1' : ''}`}
                        ></div>
                        <div
                            className={`block h-[1px] w-[40%] mx-auto bg-white absolute top-[5px] left-[50%] transform -translate-x-[1rem] transition-transform ${isActive ? '-rotate-45 -translate-y-1' : ''}`}
                        ></div>
                    </div>
                </Rounded>
            </div>

            <AnimatePresence mode="wait">
                {isActive && <NavItems />}
            </AnimatePresence>
        </div>
    );
}
