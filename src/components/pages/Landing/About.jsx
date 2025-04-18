import React, { useEffect, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiUser } from "react-icons/fi";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { LinkPreview } from "@/components/ui/link-preview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LampContainer } from "@/components/ui/lamp";
import AnimatedButton from "@/components/ui/animated-button";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const blocks = gsap.utils.toArray(".block");
        const animations = blocks.map((block) =>
            gsap.fromTo(
                block,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 85%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        );

        return () => {
            animations.forEach((animation) => animation.scrollTrigger.kill());
        };
    }, []);

    return (
        <section id="about" className="min-h-screen bg-[#04101C] px-4 py-24 text-zinc-50">
            <div className="flex items-center justify-center mb-5">
                <h1 className="text-white text-4xl">About Me</h1>
            </div>
            <div
                ref={aboutRef}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <AboutBlock />
            </div>
        </section>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "block col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 z-[1]",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        {/* <img
            src="/assets/images/avatar.png"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        /> */}
        <div className="flex items-start justify-start mb-4 w-full">
            <DotLottieReact
                src="https://lottie.host/d34b8e73-f42c-4ec5-a139-0e8204a266f3/xREJmzT1Nj.json"
                loop
                autoplay
                className='rounded-full w-full'
            />
        </div>
        <h1 className="mb-12 text-base md:text-xl lg:text-4xl font-medium leading-tight">
            Hi, I'm Adam.{" "}
            <span className="text-zinc-400">
                I build cool websites like this one.
            </span>
        </h1>
        <AnimatedButton text="Download CV" url="/assets/myCV.pdf" />
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-pink-500 md:col-span-3"
        >
            <LinkPreview
                url="https://www.instagram.com/zein_wx/"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiInstagram />
            </LinkPreview>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 md:col-span-3"
        >
            <LinkPreview
                url="https://github.com/AdamAjiLangit"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiGithub />
            </LinkPreview>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <LinkPreview
                url="https://adam-personal-portofolio.vercel.app/"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <FiUser />
            </LinkPreview>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 md:col-span-3"
        >
            <LinkPreview
                url="https://www.linkedin.com/in/adam-aji-langit-817670267/"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiLinkedin />
            </LinkPreview>
        </Block>
    </>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-base md:text-xl lg:text-3xl leading-snug">
        <p>
            My passion is building cool stuff.{" "}
            <span className="text-zinc-400">
                I build primarily with React, Tailwind CSS, and Framer Motion. I love
                this stack so much that I even built a website about it. Creative
                creation has always been at the heart of everything I do - from designing
                intuitive user interfaces to crafting seamless user experiences. Each
                project is an opportunity to push boundaries and bring innovative ideas
                to life.
            </span>
        </p>
    </Block>
);
