import { cn } from "@/utils/misc";
import Link from "next/link";

type TNavItem = {
    text: string;
    href: string;
}

export default function NavItem({
    text,
    href,
}: TNavItem) {
    return (
        <Link 
            href={href}
            className={cn("p-[15px] text-base font-medium tracking-[-0.02em] hover:text-primary")}
        >{text}</Link>
    )
}