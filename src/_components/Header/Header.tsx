"use client"
import { cn } from "@/utils/misc";
import NavItem from "../NavItem/NavItem";
import { useState } from "react";
import PotionLogo from "../Icons/PotionLogo";
import Link from "next/link";
import Button from "../Button/Button";

type THeader = {
    className?: string;
}

type TNavItem = React.ComponentProps<typeof NavItem>;

export default function Header({
    className
}: THeader) {
    const [navItems, setItems] = useState<TNavItem[]>(
        [
            {
                text: "Reviews",
                href: ""
            },
            {
                text: "Examples",
                href: ""
            },
            {
                text: "Features",
                href: ""
            },
            {
                text: "Pricing",
                href: ""
            },
            {
                text: "Login",
                href: ""
            }
        ]
        
    );
    return (
        <header
            className={cn("flex items-center rounded-full w-[821.81px] h-[66px] bg-white p-[10px] animate-fade", className)}
        >
            <Link
                href=""
                className="pl-[15px] pr-[25px]"
            >
                <PotionLogo 
                    className="w-[120px] h-[32px] "
                />
            </Link>
            
            {
                navItems.map((item , index) => {
                    return (
                        <NavItem
                            key={index}
                            text={item.text}
                            href={item.href}
                        />
                    )
                })
            }

            <Button
                className="w-[158.32px] h-[46px] ml-[25px] uppercase tracking-[-0.02em] text-base leading-normal"
            >Try for Free</Button>
        </header>
    )
}