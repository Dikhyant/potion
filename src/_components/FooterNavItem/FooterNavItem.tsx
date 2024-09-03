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
        >
            <span className="block w-max after:block after:left-0 after:right-0 after:h-1 
                             after:border-b after:scale-x-0 hover:after:scale-100 
                             after:transition-transform after:duration-[.6s] after:ease-[cubic-bezier(.16,1,.3,1)] after:origin-left" >
                {text}
            </span>
        </Link>
    )
}