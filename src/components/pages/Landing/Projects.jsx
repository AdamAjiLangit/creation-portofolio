import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import AnimatedButton from "@/components/ui/animated-button";
import { Divider } from "@nextui-org/react";
import { Lens } from "@/components/ui/lens";

export function Projects() {
    const [hovering, setHovering] = useState(false);

    const data = [
        {
            title: "Present",
            content: (
                <div>
                    <h2
                        className="text-white md:text-3xl font-poppinsMedium mb-8">
                        Creation in 2025 - Present 🚀
                    </h2>
                    <h3
                        className="text-[#18B3AB] text-lg md:text-2xl font-poppinsMedium mb-8">
                        SIKITA <span className="text-white">- Posyandu Digital</span>
                    </h3>
                    <AnimatedButton text="Visit" url="" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/siKita/hero.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/siKita/agenda.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/siKita/timeTable.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/siKita/adminTable.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <h2
                        className="text-white md:text-3xl font-poppinsMedium mb-8">
                        Creation in 2024✨
                    </h2>
                    <h3
                        className="text-[#5BB774] text-lg md:text-2xl font-poppinsMedium mb-8">
                        Agen Umroh <span className="text-white">- Admin Dashboard</span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://agen-umroh.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/agenUmroh/dashboard.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/agenUmroh/skeleton.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/agenUmroh/table.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/agenUmroh/form.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                    <Divider className="my-10 bg-white" />
                    <h3
                        className="text-[#F4F0EA] text-lg md:text-2xl mt-10 font-poppinsMedium mb-8">
                        Cozy <span className="text-white">- Simple Animation</span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://cozy-adam.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/cozy/cozy.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/cozy/menu.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/cozy/404.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/cozy/preloader.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                    <Divider className="my-10 bg-white" />
                    <h3
                        className="text-[#EB38D2] text-lg md:text-2xl mt-10 font-poppinsMedium mb-8">
                        Ratio <span className="text-white">- Simple Animation</span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://ratio-adam.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/ratio/ratio.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/ratio/preloader.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/ratio/menu.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                    <Divider className="my-10 bg-white" />
                    <h3
                        className="text-[#24AE7C] text-lg md:text-2xl mt-10 font-poppinsMedium mb-8">
                        HealthCare <span className="text-white">- Patient Management</span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://health-care-lemon.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/healthCare/form.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/healthCare/admin.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/healthCare/newAppointment.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/healthCare/success.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                    <Divider className="my-10 bg-white" />
                    <h3
                        className="text-[#716B5F] text-lg md:text-2xl mt-10 font-poppinsMedium mb-8">
                        Animation Portofolio <span className="text-white"></span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://animation-portofolio.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/animationWeb/hero.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/animationWeb/projects.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/animationWeb/about.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/animationWeb/404.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                    <Divider className="my-10 bg-white" />
                    <h3
                        className="text-[#ff4d33] text-lg md:text-2xl mt-10 font-poppinsMedium mb-8">
                        Rental Motor Kudus <span className="text-white">- Motor Rental Web</span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://rental-motor-kudus.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/rentalMotor/hero.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/rentalMotor/motorList.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/rentalMotor/aboutUs.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/rentalMotor/paymentGateway.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <h2
                        className="text-white text-xl md:text-3xl font-poppinsMedium mb-8">
                        Creation in 2023🔮
                    </h2>
                    <h3
                        className="text-orange-400 text-lg md:text-2xl font-poppinsMedium mb-8">
                        Jelajah<span className="text-white">KALBAR</span>
                    </h3>
                    <AnimatedButton text="Visit" url="https://website-kalimantan-barat.vercel.app/" customClass="mb-10" />
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/assets/images/jelajahKalbar/hero.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/jelajahKalbar/gallery.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                            <Image
                                src="/assets/images/jelajahKalbar/packages.png"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        </div>
                    </Lens>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
