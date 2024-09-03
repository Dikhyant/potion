import { cn } from "@/utils/misc";
import Link from "next/link";
import { ReactNode } from "react"

type TFooterSocialNavItem = {
    children?: ReactNode;
    href: string;
    className?: string;
}

export default function FooterSocialNavItem({
    className,
    children,
    href,
}: TFooterSocialNavItem) {
    return (
        <Link
            href={href}
            className={cn(
                "hover:scale-[0.9] transition-transform duration-[.3s]",
                className
            )}
        >
            {children}
        </Link>
    )
}