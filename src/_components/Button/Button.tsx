import { cn } from "@/utils/misc";
import { ReactNode, useState } from "react";

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
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
    const [isMouseLeave, setIsMouseLeave] = useState<boolean>(false);
    function onMouseEnter() {
        console.log("onMouseEnter");
        setIsMouseEnter(true);
        setIsMouseLeave(false);
    }

    function onMouseLeave() {
        console.log("onMouseLeave");
        setIsMouseEnter(false);
        setIsMouseLeave(true);
    }
    return (
        <button
            className={cn(
                "group rounded-full w-[320px] h-[75px] font-medium relative overflow-hidden z-[0] *:z-[2]",
                buttonVariant === "filled" ? "bg-primary text-white" : buttonVariant === "outlined" ? "bg-transparent text-black" : "",
                className
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
            {
                buttonVariant === "filled" && (
                    <>
                        <div className={cn("absolute top-0 rounded-full w-full h-full bg-primary-100 -left-full !z-[1] group-hover:animate-enterFromLeft", isMouseLeave && "animate-exitToRight")} ></div>
                        <div className={cn("absolute top-0 rounded-full w-full h-full bg-primary-200 -left-full !z-[1] group-hover:animate-enterFromLeft", isMouseLeave && "animate-exitToRight")} ></div>
                    </>
                )
            }
        </button>
    )
}