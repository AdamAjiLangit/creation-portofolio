'use client';

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconUser,
    IconCircleDottedLetterJ,
    IconHeartFilled,

} from "@tabler/icons-react";

export function FloatingDockMain() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Journery",
            icon: (
                <IconCircleDottedLetterJ className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: "#journey",
        },
        {
            title: "Skills",
            icon: (
                <IconHeartFilled className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: "#skills",
        },
    ];
    return (
        (<div className="flex items-center justify-center">
            <div className="fixed bottom-5 z-[999]">
                <FloatingDock
                    mobileClassName="translate-y-20"
                    items={links} />
            </div>
        </div>)
    );
}
