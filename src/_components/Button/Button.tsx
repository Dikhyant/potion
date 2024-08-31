import { cn } from "@/utils/misc";
import { ReactNode } from "react";

type TButton = {
    buttonVariant?: TButtonVariant;
    children?: ReactNode;
    className?: string;
}

type TButtonVariant = "filled" | "outlined"

export default function Button({
    buttonVariant = "filled",
    children,
    className,
}: TButton) {
    return (
        <button
            className={cn(
                "rounded-full w-[320px] h-[75px] font-medium",
                buttonVariant === "filled" ? "bg-primary text-white" : buttonVariant === "outlined" ? "bg-transparent text-black" : "",
                className
            )}
        >{children}</button>
    )
}