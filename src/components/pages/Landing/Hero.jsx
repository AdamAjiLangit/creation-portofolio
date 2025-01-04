'use client';

import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import { heroSlideUp } from '@/lib/animate';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Image from 'next/image';
import Magnetic from '@/common/Magnetic';

const Hero = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const parallaxImage = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(parallaxImage.current, {
            scrollTrigger: {
                trigger: parallaxImage.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onUpdate: (e) => {
                    gsap.set(parallaxImage.current, { yPercent: e.progress * -50 });
                },
            },
        });

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (
        <motion.main
            variants={heroSlideUp}
            initial="initial"
            animate="enter"
            className="relative flex h-[100vh] overflow-hidden bg-[#04101C]"
        >
            <div
                ref={parallaxImage}
                className="absolute inset-0 w-full h-full bg-cover bg-center brightness-75"
                style={{ backgroundImage: "url('/assets/images/simple.jpg')" }}
            />
            <div className='hidden lg:flex items-center gap-5 absolute top-5 left-5'>
                <video className='w-[100px] h-[100px] object-cover rounded-full' src="/assets/video/loopingGlobe.mp4" muted autoPlay playsInline loop></video>
            </div>
            <div className="absolute top-[calc(100vh-350px)]">
                <div ref={slider} className="relative whitespace-nowrap ">
                    <p className='relative m-0 text-white md:text-[150px] lg:text-[230px] text-6xl font-medium pr-[50px]' ref={firstText}>Web Creation -</p>
                    <p className='m-0 text-white md:text-[150px] lg:text-[230px] text-6xl font-medium pr-[50px] absolute left-full top-0' ref={secondText}>Web Creation -</p>
                </div>
            </div>
            <div data-scroll data-scroll-speed={0.1} className="absolute top-[35%] left-[65%] text-white text-[24px] font-light">
                <svg className='scale-[2] mb-5' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                </svg>
                <div className='m-0 mb-2 text-base lg:text-2xl'>
                    <p>Crafting</p>
                    <p>Digital Experiences</p>
                </div>
            </div>
        </motion.main >
    )
}

export default Hero