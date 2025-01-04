"use client";

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="pb-32 bg-[#04101C] scroll-pt-10"
        >
            <SectionHeading>My Creation Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg mt-20 text-white">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-black border border-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}