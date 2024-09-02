import { cn } from "@/utils/misc";
import Link from "next/link";

type TFooterNavItem = {
    className?: string;
    text: string;
    href: string;
}

export default function FooterNavItem({
    className,
    href,
    text,
}:TFooterNavItem) {
    return (
        <Link
            href={href}
            className={cn(
                "text-[21px] font-medium tracking-[-.02em] leading-[115%]",
                className
            )}
        >{text}</Link>
    )
}