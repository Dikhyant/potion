import { cn } from "@/utils/misc";
import Link from "next/link";

type TFooterNavItem = {
    className?: string;
    text: string;
    href: string;
    isUnderlineVisibleWhileUnhover?: boolean;
    isUnderlineOriginRight?: boolean;
}

export default function FooterNavItem({
    className,
    href,
    text,
    isUnderlineVisibleWhileUnhover = false,
    isUnderlineOriginRight = false,
}:TFooterNavItem) {
    return (
        <Link
            href={href}
            className={cn(
                "text-[21px] font-medium tracking-[-.02em] leading-[115%]",
                className
            )}
        >
            <span 
                className={
                    cn(
                        "block box-border w-max after:block after:left-0 after:right-0 after:h-[1px] after:border-b after:transition-transform after:duration-[.6s] after:ease-[cubic-bezier(.16,1,.3,1)]",
                        isUnderlineVisibleWhileUnhover ? "after:scale-x-100 hover:after:scale-x-0" :
                        "after:scale-x-0 hover:after:scale-x-100",
                        isUnderlineOriginRight ? "after:origin-right" : "after:origin-left",
                    )} >
                {text}
            </span>
        </Link>
    )
}